import request from 'superagent';

import {
  GET_BANKS
} from './actionTypes';

import {
  getBanksSuccess
} from './actions.js';

const api = 'https://api.memebank.life/';

const bankMiddleware = store => next => action => {
  next(action);

  switch (action.type) {

  case GET_BANKS:
    request.get(api + 'banks')
      .set('Authorization', `Bearer ${action.token}`)
      .end((err, res) => {
        if (err) {
          /* eslint-disable */
          console.log('GET_BANKS fail');
          /* eslint-enable */
          return;
        }
        /* eslint-disable */
        console.log('GET_BANKS success');
        /* eslint-enable */
        return next(getBanksSuccess(res.body));
      });
    break;

  default:
    break;
  }
};

export default bankMiddleware;
