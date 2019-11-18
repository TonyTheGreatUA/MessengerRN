//@flow

import {
  CREATION_FORM_STATUS_FAILURE,
  CREATION_FORM_STATUS_REQUEST,
  CREATION_FORM_STATUS_SUCCESS,
  SAVE_CREATION_FORM_DATA,
} from './types';
import { CreationAPIService } from '../../services/creationCallApi';

export const saveCreationData = (name: string, surname: string, phone: string) => {
  return {
    type: SAVE_CREATION_FORM_DATA,
    payload: {
      name,
      surname,
      phone,
    },
  };
};

export const validateCreationData = (items: any) => (dispatch: any) => {
  dispatch({ type: CREATION_FORM_STATUS_REQUEST });

  new CreationAPIService()
    .callServerValidationC(items)
    .then(data => {
      dispatch({ type: CREATION_FORM_STATUS_SUCCESS, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: CREATION_FORM_STATUS_FAILURE, err });
    });
};
