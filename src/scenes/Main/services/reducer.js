import { combineReducers } from 'redux';

import {
  GET_BANKS_SUCCESS
} from './actionTypes.js';

const banks = (state = [], action) => {
  switch (action.type) {

  case GET_BANKS_SUCCESS:
    return action.banks;

  default:
    return state;
  }
};

const Bank = combineReducers({
  banks
});

export default Bank;
