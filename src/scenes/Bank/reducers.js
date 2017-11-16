import { combineReducers } from 'redux';
import { ActionTypes } from './actions.js';

/* Reducers */

const cards = (state = [], action) => {
  switch (action.type) {

  // Add a card to the bank
  case ActionTypes.ADD_CARD:
    return [...state, { src: action.src }];

  // Recieve card data from API
  case ActionTypes.GET_CARD_DATA_RECIEVED:
    return action.cards;

  // TO DO: case for GET_CARD_DATA_ERROR

  // Default case: return current state
  default:
    return state;
  }
};

const Bank = combineReducers({
  cards
});

export default Bank;
