import { combineReducers } from 'redux';
import { ActionTypes } from './actions.js';

/* Reducers */

const cards = (state = [], action) => {
  switch (action.type) {

  // Add a card to the bank
  case ActionTypes.ADD_CARD:
    return [...state, { src: action.src }];

  // Default case: return current state
  default:
    return state;
  }
};

const Bank = combineReducers({
  cards
});

export default Bank;
