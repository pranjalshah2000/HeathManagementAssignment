import { BaseAction, actionIds } from '../common';
import { CountryData, StateData } from '../models/countryData';

export type PatientsCollectionState = {
    countryJson: Array<CountryData>,
    editedState: any,
    states: Array<StateData>,
    selectedCountryName: string
};

export const CountriesCollectionReducer = (state:
    PatientsCollectionState = {
        countryJson: new Array<CountryData>(),
        states: new Array<StateData>(),
        editedState: null,
        selectedCountryName: 'All'
    }, action: BaseAction) => {

    switch (action.type) {
        case actionIds.GET_COUNTRIES_COMPLETED:
            return {
                ...state,
                countryJson: action.payload
            };

        case actionIds.GET_STATES_BY_COUNTRY_COMPLETED:
            return {
                ...state,
                states: action.payload
            };

        case actionIds.CHANGE_COUNTRY_COMPLETED:
            return {
                ...state,
                selectedCountryName: action.payload
            };

        case actionIds.EDIT_STATE_COMPLETED:
            return {
                ...state,
                editedState: action.payload
            };
    }

    return state;
}
