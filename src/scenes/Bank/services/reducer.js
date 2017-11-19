import { combineReducers } from 'redux';
import {
  GET_CARD_DATA_RECIEVED,
  ADD_CARD_SUCCESS
} from './actionTypes.js';

/* Reducers */

const cards = (state = [], action) => {
  switch (action.type) {

  case GET_CARD_DATA_RECIEVED:
    return action.cards;

  case ADD_CARD_SUCCESS:
    return [...state, { src: action.src }];

  default:
    return state;
  }
};

const Bank = combineReducers({
  cards
});



export default Bank;
