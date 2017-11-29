import { combineReducers } from 'redux';
import token from './services/reducer.js';
import Bank from './scenes/Main/services/reducer.js';
import cards from './scenes/Main/scenes/Bank/services/reducer.js';

const Root = combineReducers({
  token,
  Bank,
  cards
});

export default Root;
