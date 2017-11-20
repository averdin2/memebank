import { combineReducers } from 'redux';
import {
  ADD_CARD_SUCCESS,
  DELETE_CARD_SUCCESS,
  GET_CARD_DATA_RECIEVED
} from './actionTypes.js';

/* Reducers */

const cards = (state = [], action) => {
  switch (action.type) {

  case ADD_CARD_SUCCESS:
    return [...state, action.card];

  case DELETE_CARD_SUCCESS: {
    let nextState = [];
    for (const card in state) {
      if (state[card].id !== action.id) {
        nextState.push(state[card]);
      }
    }
    return nextState;
  }

  case GET_CARD_DATA_RECIEVED:
    return action.cards;

  default:
    return state;
  }
};

const Bank = combineReducers({
  cards
});



export default Bank;
