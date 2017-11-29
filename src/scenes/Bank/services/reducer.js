import { combineReducers } from 'redux';
import {
  ADD_CARD_SUCCESS,
  DELETE_CARD_SUCCESS,
  GET_CARD_DATA_RECIEVED
} from './actionTypes.js';

const cards = (state = [], action) => {
  switch (action.type) {

  case ADD_CARD_SUCCESS:
    return [...state, action.card];

  case DELETE_CARD_SUCCESS:
    return state.filter(card => card.id !== action.id);

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
