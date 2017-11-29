import {
  GET_BANKS,
  GET_BANKS_SUCCESS
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
