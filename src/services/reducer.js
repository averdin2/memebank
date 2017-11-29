import { combineReducers } from 'redux';
import { LOGIN_USER_SUCCESS } from './actionTypes.js';

const token = (state = '', action) => {
  switch (action.type) {

  case LOGIN_USER_SUCCESS:
    return action.token;

  default:
    return state;
  }
};

const User = combineReducers({
  token
});

export default User;
