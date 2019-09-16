import { combineReducers } from 'redux';
import { CountriesCollectionReducer, PatientsCollectionState } from './patientReducer';

export interface State {
    patientsCollectionState: PatientsCollectionState
};

export const reducers = combineReducers<State>({
    patientsCollectionState: CountriesCollectionReducer
});
