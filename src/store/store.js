import { combineReducers } from 'redux';
import { CHANGE_NAME } from '../actions';
import Reducers from '../reducers';

export const store = createStore(Reducers, {
  name: 'Charles Browne'
});