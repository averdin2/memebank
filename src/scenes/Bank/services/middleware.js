import request from 'superagent';

// Action Types
import {
  GET_CARD_DATA,
  ADD_CARD
} from './actionTypes.js';

// Actions
import {
  getCardDataRecieved,
  addCardSuccess,
} from './actions.js';

const api = 'https://api.memebank.life/banks/1/cards';
const validTypes = ['image/jpeg', 'image/png', 'image/gif'];

const bankMiddleware = store => next => action => {
  next(action);

  switch (action.type) {

  case GET_CARD_DATA:
    request.get(api)
      .end((err, res) => {
        if (err) {
          /* eslint-disable */
          console.log('GET_CARD_DATA fail');
          console.log(err);
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
              console.log(err);
              console.log('ADD_CARD fail');
              /* eslint-enable */

              // Change this
              return next(addCardSuccess(action.src));
            }
            /* eslint-disable */
            console.log('ADD_CARD success');
            /* eslint-enable */
            next(addCardSuccess(action.src));
          });
      });
    break;

  default:
    break;
  }
};

export default bankMiddleware;
