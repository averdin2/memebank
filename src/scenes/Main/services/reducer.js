import { combineReducers } from 'redux';

import {
  GET_BANKS_SUCCESS,
  ADD_BANK_SUCCESS,
  UPDATE_ACTIVE_BANK
} from './actionTypes.js';

const banks = (state = null, action) => {
  switch (action.type) {

  case GET_BANKS_SUCCESS:
    return action.banks;

  case ADD_BANK_SUCCESS:
    return [...state, action.bank];

  default:
    return state;
  }
};

const active = (state = 0, action) => {
  switch (action.type) {

  case UPDATE_ACTIVE_BANK:
    console.log('UPDATE_ACTIVE_BANK success');
    return action.id;

  default:
    return state;
  }
};

const Bank = combineReducers({
  banks,
  active
});

export default Bank;
