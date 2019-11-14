//@flow
import { combineReducers } from 'redux';
import { registrationFormInfoReducer } from './registrationFormInfo/reducers';
import { creationFormInfoReducer } from './creationFormInfo/reducers';

export default combineReducers({
  registrationFormInfo: registrationFormInfoReducer,
  creationFormInfo: creationFormInfoReducer,
});
