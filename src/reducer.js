import { combineReducers } from 'redux';
import User from './services/reducer.js';
import Bank from './scenes/Bank/services/reducer.js';

const Root = combineReducers({
  User,
  Bank
});

export default Root;
