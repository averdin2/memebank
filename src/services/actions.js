import {
  CREATE_USER,
  LOGIN_USER,
  LOGIN_USER_SUCCESS
} from './actionTypes.js';

export const createUser = (email, username, password) => {
  return {
    type: CREATE_USER,
    email: email,
    username: username,
    password: password,
  };
};

export const loginUser = (email, password) => {
  return {
    type: LOGIN_USER,
    email: email,
    password: password,
  };
};

export const loginUserSuccess = (token) => {
  return {
    type: LOGIN_USER_SUCCESS,
    token: token,
  };
};
