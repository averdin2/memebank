import request from 'superagent';

// Action Types
import {
  GET_CARD_DATA,
  ADD_CARD,
  DELETE_CARD
} from './actionTypes.js';

// Actions
import {
  getCardDataRecieved,
  addCardSuccess,
  deleteCardSuccess
} from './actions.js';

const api = 'https://api.memebank.life/';
const validTypes = ['image/jpeg', 'image/png', 'image/gif'];

const bankMiddleware = store => next => action => {
  next(action);

  switch (action.type) {

  case GET_CARD_DATA:
    request.get(api + 'banks/1/cards')
      .end((err, res) => {
        if (err) {
          /* eslint-disable */
          console.log('GET_CARD_DATA fail');
          /* eslint-enable */
          return;
        }
        /* eslint-disable */
        console.log('GET_CARD_DATA success');
        /* eslint-enable */
        next(getCardDataRecieved(res.body));
      });
    break;

  case ADD_CARD:

    // VALIDATE_ADD_CARD
    request.head(action.src)
      .end((err, res) => {
        if (err || !validTypes.includes(res.type)) {
          /* eslint-disable */
          console.log('VALIDATE_ADD_CARD fail');
          /* eslint-enable */
          return;
        }
        /* eslint-disable */
        console.log('VALIDATE_ADD_CARD success');
        /* eslint-enable */

        // ADD_CARD
        /* Middleware actions don't chain */
        request.post(api)
          .send({ card: { src: action.src } })
          .end((err, res) => {
            if (err) {
              /* eslint-disable */
              console.log('ADD_CARD fail');
              /* eslint-enable */
              return;
            }
            /* eslint-disable */
            console.log('ADD_CARD success');
            /* eslint-enable */
            next(addCardSuccess(res.body));
          });
      });
    break;

  case DELETE_CARD:
    request.del(api + `cards/${action.id}`)
      .end((err, res) => {
        if (err) {
          /* eslint-disable */
          console.log('DELETE_CARD fail');
          /* eslint-enable */
          return;
        }
        /* eslint-disable */
        console.log('DELETE_CARD success');
        /* eslint-enable */
        next(deleteCardSuccess(action.id));
      });
    break;

  default:
    break;
  }
};

export default bankMiddleware;
