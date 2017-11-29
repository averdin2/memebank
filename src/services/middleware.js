import request from 'superagent';

import {
  CREATE_USER,
  LOGIN_USER
} from './actionTypes.js';

import { loginUserSuccess } from './actions.js';

const api = 'https://api.memebank.life/';

const accountMiddleware = store => next => action => {
  next(action);

  switch (action.type) {

  case CREATE_USER:
    request.post(api + 'users')
      .send({ user: { email: action.email, username: action.username, password: action.password } })
      .end((err, res) => {
        if (err) {
          /* eslint-disable */
          console.log('CREATE_USER fail');
          /* eslint-enable */
          return;
        }
        /* eslint-disable */
        console.log('CREATE_USER success');
        /* eslint-enable */
        return;
      });
    break;

  case LOGIN_USER:
    request.post(api + 'user_token')
      .send({ auth: { email: action.email, password: action.password } })
      .end((err, res) => {
        if (err) {
          /* eslint-disable */
          console.log('LOGIN_USER fail');
          /* eslint-enable */
          return;
        }
        /* eslint-disable */
        console.log('LOGIN_USER success');
        /* eslint-enable */
        return next(loginUserSuccess(res.body.jwt));
      });
    break;

  default:
    break;
  }
};

export default accountMiddleware;
