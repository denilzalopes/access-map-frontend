import {combineReducers} from 'redux';
import userReducer from './userSlice';
import mapReducer from './mapSlice';

const rootReducer = combineReducers({
  user: userReducer,
  map: mapReducer,
});

export default rootReducer;
