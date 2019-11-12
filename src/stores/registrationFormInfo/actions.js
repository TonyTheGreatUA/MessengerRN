//@flow
/*eslint-disable*/
import {
  SAVE_REGISTRATION_FORM_DATA,
  REGISTRATION_FORM_STATUS_FAILURE,
  REGISTRATION_FORM_STATUS_REQUEST,
  REGISTRATION_FORM_STATUS_SUCCESS,
} from './types';
import { CallAPIService } from '../../services/callAPIService';

export const saveRegistrationData = (phoneNumber: string) => {
  return {
    type: SAVE_REGISTRATION_FORM_DATA,
    payload: {
      phoneNumber,
    },
  };
};

export const validateRegistrationData = (items: any) => (dispatch: any) => {
  dispatch({ type: REGISTRATION_FORM_STATUS_REQUEST });

  new CallAPIService()
    .callServerValidation(items)
    .then(data => {
      dispatch({ type: REGISTRATION_FORM_STATUS_SUCCESS, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTRATION_FORM_STATUS_FAILURE, err });
    });
};
