import { combineReducers } from 'redux';
import {
  GET_CARD_DATA,
  GET_CARD_DATA_RECIEVED,
  ADD_CARD
} from './actionTypes.js';

/* Reducers */

const cards = (state = [], action) => {
  switch (action.type) {

  case GET_CARD_DATA_RECIEVED:
    return action.cards;

  case ADD_CARD:
    return [...state, { src: action.src, id: state.length + 1 }];

  default:
    return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {

  case ADD_CARD:
    return true;

  case GET_CARD_DATA:
    return false;

  default:
    return state;

  }
};

const Bank = combineReducers({
  cards,
  loading
});



export default Bank;
