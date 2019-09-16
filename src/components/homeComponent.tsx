import React from "react";
import { CountriesJson } from "../common/countires";
import { CountryData, StateData } from "../models/countryData";
import { connect } from "react-redux";
import { statesRequestStartAction, countriesRequestStartAction, countryChangeRequestStartAction, editStateRequestStartAction } from "../actions";
import { State } from "../reducers";
import StateTableComponent from "./stateTableComponent";
import * as PropTypes from 'prop-types';
import { History } from "history";

interface HomeComponentProps {
    updateCountryJson: (countries: Array<CountryData>) => void;
    getStatesByCountry: (states: Array<StateData>) => void;
    changeCountry: (countryName: string) => void;
    editState: (stateData: StateData) => void;
    countries: Array<string>;
    countryJson: Array<CountryData>,
    states: Array<StateData>;
    selectedCountryName: string;
    editedState: StateData;
    history: History
}

interface HomeComponentState {
    countries: Array<string>;
    countryJson: Array<CountryData>;
    [key: string]: any;
}

class HomeComponent extends React.Component<HomeComponentProps, HomeComponentState> {

    static contextTypes = {
        router: PropTypes.object
    }

    state: HomeComponentState = {
        countries: new Array<string>(),
        countryJson: new Array<CountryData>()
    };


    componentDidMount() {
        this.setState({
            countries: this.loadCountryNames(),
            countryJson: CountriesJson,
            selectedCountry: this.props.selectedCountryName
        });

        const countryJson = this.props.countryJson.length > 0 ? this.props.countryJson : CountriesJson;
        this.props.updateCountryJson(countryJson);
        this.loadCountryData(this.props.selectedCountryName, this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps: HomeComponentProps) {
        const prevCountryJsonString = JSON.stringify(this.props.countryJson);
        const nextCountryJsonString = JSON.stringify(nextProps.countryJson);
        if (prevCountryJsonString !== nextCountryJsonString) {
            this.loadCountryData(nextProps.selectedCountryName, nextProps);
        }
        console.log('stateData', nextProps.editedState);

    }

    loadCountryNames() {
        const countries: Array<string> = new Array<string>();
        CountriesJson.forEach((countryData: CountryData) => {
            countries.push(countryData.CountryName);
        });

        return countries;
    }

    loadCountryDataEvent = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        this.loadCountryData(evt.target.value, this.props);
    };

    loadCountryData = (countryName: string, props: HomeComponentProps) => {
        this.props.changeCountry(countryName);
        const states: Array<StateData> = [];
        const countries = countryName === 'All' ?
            props.countryJson :
            props.countryJson.filter(c => { return c.CountryName === countryName });

        countries.forEach((country: CountryData) => {
            country.Patients.forEach((patient: StateData) => {
                states.push(patient);
            });
        });

        if (states && states.length > 0) {
            props.getStatesByCountry(states);
        }
    };

    editState = (stateData: StateData) => {
        this.props.editState(stateData);
        this.props.history.push("/editstate");
    }

    render() {
        return (
            <div className="container">
                <h2>Patient Data</h2>

                <div className="form-group">
                    <label htmlFor="Manufacturer">Country</label>
                    <select
                        className="form-control"
                        onChange={this.loadCountryDataEvent}
                        name="selectedCountry"
                        value={this.props.selectedCountryName}
                    >
                        <option value="All">All Countries</option>
                        {this.state.countries.map((v: string, i) => (
                            <option key={i} value={v} >{v}</option>
                        ))}
                    </select>
                </div>
                <>
                    {
                        this.props.states && this.props.states.length > 0
                            ?
                            <StateTableComponent states={this.props.states} editState={this.editState} />
                            :
                            ''
                    }
                </>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    editedState: state.patientsCollectionState.editedState,
    countryJson: state.patientsCollectionState.countryJson,
    states: state.patientsCollectionState.states,
    selectedCountryName: state.patientsCollectionState.selectedCountryName
});

const mapDispatchToProps = (dispatch: any) => ({
    getStatesByCountry: (states: Array<StateData>) => dispatch(statesRequestStartAction(states)),
    updateCountryJson: (countries: Array<CountryData>) => dispatch(countriesRequestStartAction(countries)),
    changeCountry: (countryName: string) => dispatch(countryChangeRequestStartAction(countryName)),
    editState: (stateData: StateData) => dispatch(editStateRequestStartAction(stateData))
});

export const HomeRequestContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);