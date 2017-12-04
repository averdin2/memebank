import { combineReducers } from 'redux';

import {
  GET_BANKS_SUCCESS,
  ADD_BANK_SUCCESS
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

const Bank = combineReducers({
  banks
});

export default Bank;
