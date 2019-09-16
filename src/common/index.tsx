export const actionIds = {
    GET_COUNTRIES_STARTED: 'Request For Countries',
    GET_COUNTRIES_COMPLETED: 'Request For Countries Completed',
    CHANGE_COUNTRY_STARTED: 'Request For changing Country',
    CHANGE_COUNTRY_COMPLETED: 'Request For changing Country Completed',
    EDIT_STATE_STARTED: 'Request For edit state start',
    EDIT_STATE_COMPLETED: 'Request For edit state  Completed',
    UPDATE_STATE_STARTED: 'Request For update state start',
    UPDATE_STATE_COMPLETED: 'Request For update state  Completed',
    GET_STATES_BY_COUNTRY: 'Request For States by Country',
    GET_STATES_BY_COUNTRY_COMPLETED: 'Request For States by Country completed'
  }
  
  export interface BaseAction {
    type: string;
    payload: any;
  }
  