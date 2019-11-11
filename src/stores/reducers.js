//@flow
/*eslint-disable*/
import { combineReducers } from 'redux';
import { registrationFormInfoReducer } from './registrationFormInfo/reducers';

export default combineReducers({
  registrationFormInfo: registrationFormInfoReducer,
});
