import React from "react";
import { StateData, CountryData } from "../models/countryData";
import { connect } from "react-redux";
import { State } from "../reducers";
import { countriesRequestStartAction } from "../actions";
import { History } from "history";

interface EditPatientsComponentProps {
    editedState: StateData,
    updateCountryJson: (countries: Array<CountryData>) => void;
    countryJson: Array<CountryData>;
    selectedCountryName: string;
    history: History;
}

interface EditPatientsComponentState {
    StateName: string;
    MalePatients: number;
    FemalePatients: number;
    MaleriaPatients: number;
    DenguePatients: number;
    CancerPatients: number;
    Flue: number;
    [key: string]: any;
}

class EditPatientsComponent extends React.Component<EditPatientsComponentProps, EditPatientsComponentState> {
    constructor(props: EditPatientsComponentProps) {
        super(props);
        this.state = {
            StateName: '',
            MalePatients: 0,
            FemalePatients: 0,
            MaleriaPatients: 0,
            DenguePatients: 0,
            CancerPatients: 0,
            Flue: 0
        };
    }

    componentDidMount() {
        if (this.props.editedState) {
            this.setState({
                StateName: this.props.editedState.StateName,
                MalePatients: this.props.editedState.MalePatients,
                FemalePatients: this.props.editedState.FemalePatients,
                MaleriaPatients: this.props.editedState.MaleriaPatients,
                DenguePatients: this.props.editedState.DenguePatients,
                CancerPatients: this.props.editedState.CancerPatients,
                Flue: this.props.editedState.Flue
            });
        }
    }

    handleChange = (evt: | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const name = evt.target.name as string;
        const newValue: Partial<EditPatientsComponentState> = {};
        newValue[name] = evt.target.value;
        this.setState(newValue);
    };

    saveState = () => {
        const countryJson = this.props.countryJson;
        for (const country of countryJson) {
            for (const state of country.Patients) {
                if (state.StateName === this.state.StateName) {
                    state.MalePatients = this.state.MalePatients;
                    state.FemalePatients = this.state.FemalePatients;
                    state.MaleriaPatients = this.state.MaleriaPatients;
                    state.DenguePatients = this.state.DenguePatients;
                    state.CancerPatients = this.state.CancerPatients;
                    state.Flue = this.state.Flue;
                }
            }
        }

        this.props.updateCountryJson(countryJson);
        this.props.history.push("/");
    }

    cancel = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container">
                <h2>Edit Patients for {this.state.StateName}</h2>
                <div className="form-group">
                    <label htmlFor="MalePatients">Male Patients</label>
                    <input
                        type="text"
                        name="MalePatients"
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.MalePatients}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="FemalePatients">Female Patients</label>
                    <input
                        type="text"
                        name="FemalePatients"
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.FemalePatients}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="MaleriaPatients">Maleria Patients</label>
                    <input
                        type="text"
                        name="MaleriaPatients"
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.MaleriaPatients}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="DenguePatients">Dengue Patients</label>
                    <input
                        type="text"
                        name="DenguePatients"
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.DenguePatients}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="CancerPatients">Cancer Patients</label>
                    <input
                        type="text"
                        name="CancerPatients"
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.CancerPatients}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Flue">Flue Patients</label>
                    <input
                        type="text"
                        name="Flue"
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.Flue}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="button"
                        value="Update"
                        onClick={this.saveState}
                        className="btn btn-success m-2"
                    />
                    <input
                        type="button"
                        value="Cancel"
                        onClick={this.cancel}
                        className="btn btn-success m-2"
                    />
                </div>
                <hr />
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    editedState: state.patientsCollectionState.editedState,
    selectedCountryName: state.patientsCollectionState.selectedCountryName,
    countryJson: state.patientsCollectionState.countryJson
});

const mapDispatchToProps = (dispatch: any) => ({
    updateCountryJson: (countries: Array<CountryData>) => dispatch(countriesRequestStartAction(countries))
});

export const EditPatientsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPatientsComponent);