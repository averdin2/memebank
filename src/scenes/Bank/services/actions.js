import {
  ADD_CARD,
  ADD_CARD_SUCCESS,
  GET_CARD_DATA,
  GET_CARD_DATA_RECIEVED
} from './actionTypes.js';

/* Actions */

export const addCard = (src) => {
  return {
    type: ADD_CARD,
    src: src,
  };
};

export const addCardSuccess = (src) => {
  return {
    type: ADD_CARD_SUCCESS,
    src: src,
  };
};

export const getCardData = () => {
  return {
    type: GET_CARD_DATA,
  };
};

export const getCardDataRecieved = (cards) => {
  return {
    type: GET_CARD_DATA_RECIEVED,
    cards: cards,
  };
};
