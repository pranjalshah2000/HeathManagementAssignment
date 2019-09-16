import { put, takeEvery, all, fork } from 'redux-saga/effects';
import { countriesRequestCompletedAction, statesRequestCompletedAction, countryChangeRequestCompletedAction, editStateRequestCompletedAction } from '../actions';
import { actionIds } from '../common';

export const rootSaga = function* root() {
    yield all([
        fork(watchProductRequestStart),
    ])
}

function* watchProductRequestStart() {
    yield takeEvery(actionIds.GET_COUNTRIES_STARTED, updateCountries);
    yield takeEvery(actionIds.GET_STATES_BY_COUNTRY, getStatesByCountry);
    yield takeEvery(actionIds.CHANGE_COUNTRY_STARTED, changeCountry);
    yield takeEvery(actionIds.EDIT_STATE_STARTED, editState);
}

function* updateCountries(action: any) {
    yield put(countriesRequestCompletedAction(action.payload));
}

function* getStatesByCountry(action: any) {
    yield put(statesRequestCompletedAction(action.payload));
}

function* changeCountry(action: any) {
    yield put(countryChangeRequestCompletedAction(action.payload));
}

function* editState(action: any) {
    yield put(editStateRequestCompletedAction(action.payload));
}

