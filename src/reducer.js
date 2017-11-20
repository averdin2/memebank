import { combineReducers } from 'redux';
import Bank from './scenes/Bank/services/reducer.js';

const Root = combineReducers({
  Bank
});

export default Root;
