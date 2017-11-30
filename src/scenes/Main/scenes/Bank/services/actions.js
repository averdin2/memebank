import {
  ADD_CARD,
  ADD_CARD_SUCCESS,
  DELETE_CARD,
  DELETE_CARD_SUCCESS,
  GET_CARDS,
  GET_CARDS_SUCCESS
} from './actionTypes.js';

export const addCard = (src, bank, token) => {
  return {
    type: ADD_CARD,
    src: src,
    bank: bank,
    token: token,
  };
};

export const addCardSuccess = (card) => {
  return {
    type: ADD_CARD_SUCCESS,
    card: card,
  };
};

export const deleteCard = (id, bank, token) => {
  return {
    type: DELETE_CARD,
    id: id,
    bank: bank,
    token: token,
  };
};

export const deleteCardSuccess = (id) => {
  return {
    type: DELETE_CARD_SUCCESS,
    id: id,
  };
};

export const getCards = (bank) => {
  return {
    type: GET_CARDS,
    bank: bank
  };
};

export const getCardsSuccess = (cards) => {
  return {
    type: GET_CARDS_SUCCESS,
    cards: cards,
  };
};
