//@flow

import { RequestStatus } from '../../utils/RequestStatus';

import {
  REGISTRATION_FORM_STATUS_SUCCESS,
  REGISTRATION_FORM_STATUS_FAILURE,
  REGISTRATION_FORM_STATUS_REQUEST,
  SAVE_REGISTRATION_FORM_DATA,
} from './types';

const defaultState = {
  phoneNumber: '',
  photo: '',
  name: '',
  surname: '',
};

export const registrationFormInfoReducer = (
  state: {
    phoneNumber: string,
    photo: string,
    name: string,
    surname: string,
  } = defaultState,
  action: {
    type: string,
    payload: {
      phoneNumber: string,
      photo: string,
      name: string,
      surname: string,
    },
  },
) => {
  switch (action.type) {
    case REGISTRATION_FORM_STATUS_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
      };
    case REGISTRATION_FORM_STATUS_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
      };
    case REGISTRATION_FORM_STATUS_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
      };
    case SAVE_REGISTRATION_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
