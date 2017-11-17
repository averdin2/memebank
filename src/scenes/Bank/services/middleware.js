import request from 'superagent';

import {
  GET_CARD_DATA,
  GET_CARD_DATA_RECIEVED,
  VALIDATE_ADD_CARD,
  ADD_CARD
} from './actionTypes.js';

const api = 'http://api.memebank.life/banks/1/cards';
const validTypes = ['image/jpeg', 'image/png', 'image/gif'];

const bankMiddleware = store => next => action => {
  next(action);

  switch (action.type) {

  case VALIDATE_ADD_CARD:
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
        next({ type: ADD_CARD, src: action.src });
      });
    break;

  // // NOT WORKING
  // case ADD_CARD:
  //   request.post(api)
  //     .send({ card: { src: action.src, bank_id: 1 } })
  //     .end((err, res) => {
  //       if (err) {
  //         /* eslint-disable */
  //         console.log('ADD_CARD fail');
  //         /* eslint-enable */
  //         return;
  //       }
  //       /* eslint-disable */
  //       console.log('ADD_CARD success');
  //       /* eslint-enable */
  //       next({ type: GET_CARD_DATA });
  //     });
  //   break;

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
        const data = res.body;
        /* eslint-disable */
        console.log('GET_CARD_DATA success');
        /* eslint-enable */
        next({ type: GET_CARD_DATA_RECIEVED, cards: data });
      });
    break;

  default:
    break;
  }
};

export default bankMiddleware;
