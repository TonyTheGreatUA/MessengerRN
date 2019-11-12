//@flow

import {
  CREATION_FORM_STATUS_FAILURE,
  CREATION_FORM_STATUS_REQUEST,
  CREATION_FORM_STATUS_SUCCESS,
  SAVE_CREATION_FORM_DATA,
} from './types';
import { CallAPIService } from '../../services/callAPIService';

export const saveRegistrationData = (name: string, surname: string, avatar: string) => {
  return {
    type: SAVE_CREATION_FORM_DATA,
    payload: {
      name,
      surname,
      avatar,
    },
  };
};

export const validateRegistrationData = (items: any) => (dispatch: any) => {
  dispatch({ type: CREATION_FORM_STATUS_REQUEST });

  new CallAPIService()
    .callServerValidation(items)
    .then(data => {
      dispatch({ type: CREATION_FORM_STATUS_SUCCESS, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: CREATION_FORM_STATUS_FAILURE, err });
    });
};
