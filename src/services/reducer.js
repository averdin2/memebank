import { LOGIN_USER_SUCCESS } from './actionTypes.js';

const token = (state = null, action) => {
  switch (action.type) {

  case LOGIN_USER_SUCCESS:
    return action.token;

  default:
    return state;
  }
};

export default token;
