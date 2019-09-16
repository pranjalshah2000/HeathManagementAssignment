import { BaseAction, actionIds } from '../common';
import { CountryData, StateData } from '../models/countryData';

export const countriesRequestStartAction: (p: Array<CountryData>) => BaseAction = (countriesReceived) => ({
  type: actionIds.GET_COUNTRIES_STARTED,
  payload: countriesReceived,
});

export const countriesRequestCompletedAction: (p: Array<CountryData>) => BaseAction = (countriesReceived) => (
  {
    type: actionIds.GET_COUNTRIES_COMPLETED,
    payload: countriesReceived
  });

export const countryChangeRequestStartAction: (p: string) => BaseAction = (countryName) => ({
  type: actionIds.CHANGE_COUNTRY_STARTED,
  payload: countryName,
});

export const countryChangeRequestCompletedAction: (p: string) => BaseAction = (countryName) => (
  {
    type: actionIds.CHANGE_COUNTRY_COMPLETED,
    payload: countryName
  });

export const statesRequestStartAction: (p: Array<StateData>) => BaseAction = (statesReceived) => (
  {
    type: actionIds.GET_STATES_BY_COUNTRY,
    payload: statesReceived,
  });

export const statesRequestCompletedAction: (p: Array<StateData>) => BaseAction = (statesReceived) => (
  {
    type: actionIds.GET_STATES_BY_COUNTRY_COMPLETED,
    payload: statesReceived,
  });

export const editStateRequestStartAction: (stateData: StateData) => BaseAction = (stateData) => (
  {
    type: actionIds.EDIT_STATE_STARTED,
    payload: stateData,
  });

export const editStateRequestCompletedAction: (stateData: StateData) => BaseAction = (stateData) => (
  {
    type: actionIds.EDIT_STATE_COMPLETED,
    payload: stateData,
  });

export const updateStateRequestStartAction: (stateData: StateData, countryName: string, countries: Array<CountryData>) => BaseAction = (stateData, countryName, countries) => (
  {
    type: actionIds.UPDATE_STATE_STARTED,
    payload: { stateData, countryName, countries },
  });

export const updateStateRequestCompletedAction: (stateData: StateData) => BaseAction = (stateData) => (
  {
    type: actionIds.UPDATE_STATE_COMPLETED,
    payload: stateData,
  });



