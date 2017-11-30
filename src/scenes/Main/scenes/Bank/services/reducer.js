import {
  ADD_CARD_SUCCESS,
  DELETE_CARD_SUCCESS,
  GET_CARDS_SUCCESS
} from './actionTypes.js';

const cards = (state = [], action) => {
  switch (action.type) {

  case ADD_CARD_SUCCESS:
    return [...state, action.card];

  case DELETE_CARD_SUCCESS:
    return state.filter(card => card.id !== action.id);

  case GET_CARDS_SUCCESS:
    return action.cards;

  default:
    return state;
  }
};

export default cards;
