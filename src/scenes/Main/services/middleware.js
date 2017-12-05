import request from 'superagent';

import {
  GET_BANKS,
  ADD_BANK,
  DELETE_BANK,
  UPDATE_ACTIVE_BANK,
} from './actionTypes';

import {
  getBanksSuccess,
  addBankSuccess,
  deleteBankSuccess,
  updateActiveBank
} from './actions.js';

import { getCards } from './../scenes/Bank/services/actions.js';

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

  case ADD_BANK:
    request.post(api + 'banks')
      .send({ bank: { title: action.title } })
      .set('Authorization', `Bearer ${action.token}`)
      .end((err, res) => {
        if (err) {
          /* eslint-disable */
          console.log('ADD_BANK fail');
          /* eslint-enable */
          return;
        }
        /* eslint-disable */
        console.log('ADD_BANK success');
        /* eslint-enable */
        const bank = res.body;
        next(addBankSuccess(bank));
        return store.dispatch(updateActiveBank(bank.id));
      });
    break;

  case DELETE_BANK:
    request.del(api + `banks/${action.id}`)
      .set('Authorization', `Bearer ${action.token}`)
      .end((err, res) => {
        if (err) {
          /* eslint-disable */
          console.log('DELETE_BANK fail');
          /* eslint-enable */
          return;
        }
        /* eslint-disable */
        console.log('DELETE_BANK success');
        /* eslint-enable */
        next(deleteBankSuccess(action.id));
        const lastBank = store.getState().Bank.banks[store.getState().Bank.banks.length - 1];
        return store.dispatch(updateActiveBank(lastBank.id));
      });
    break;

  case UPDATE_ACTIVE_BANK:
    return next(getCards(action.id));

  default:
    break;
  }
};

export default bankMiddleware;
