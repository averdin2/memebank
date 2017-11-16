import request from 'superagent';
import { test_cards } from './test.js';

const api = 'http://api.memebank.life/banks/1';

const bankService = store => next => action => {
  next(action);

  switch (action.type) {

  case 'GET_CARD_DATA':

    request
      .get(api + '/cards')

      // Callback
      .end((err, res) => {

        // Error: dispatch error action
        if (err) {
          return next({ type: 'GET_CARD_DATA_RECIEVED', cards: test_cards });
        }

        const data = res;

        // Success: dispatch success action
        next({ type: 'GET_CARD_DATA_RECIEVED', cards: data });

      });
    break;

  // Do nothing if action doesn't make api call
  default:
    break;

  }
};

export default bankService;
