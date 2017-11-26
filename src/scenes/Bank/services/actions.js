import {
  ADD_CARD,
  ADD_CARD_SUCCESS,
  DELETE_CARD,
  DELETE_CARD_SUCCESS,
  GET_CARD_DATA,
  GET_CARD_DATA_RECIEVED
} from './actionTypes.js';

export const addCard = (src) => {
  return {
    type: ADD_CARD,
    src: src,
  };
};

export const addCardSuccess = (card) => {
  return {
    type: ADD_CARD_SUCCESS,
    card: card,
  };
};

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    id: id,
  };
};

export const deleteCardSuccess = (id) => {
  return {
    type: DELETE_CARD_SUCCESS,
    id: id,
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
