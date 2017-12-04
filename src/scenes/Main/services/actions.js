import {
  GET_BANKS,
  GET_BANKS_SUCCESS,
  ADD_BANK,
  ADD_BANK_SUCCESS
} from './actionTypes.js';

export const getBanks = (token) => {
  return {
    type: GET_BANKS,
    token: token,
  };
};

export const getBanksSuccess = (banks) => {
  return {
    type: GET_BANKS_SUCCESS,
    banks: banks,
  };
};

export const addBank = (token) => {
  return {
    type: ADD_BANK,
    title: 'new bank',
  };
};

export const addBankSuccess = (bank) => {
  return {
    type: ADD_BANK_SUCCESS,
    bank: bank,
  };
};
