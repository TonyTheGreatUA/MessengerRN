import { RequestStatus } from '../../utils/RequestStatus';

import {
  CREATION_FORM_STATUS_FAILURE,
  CREATION_FORM_STATUS_REQUEST,
  CREATION_FORM_STATUS_SUCCESS,
  SAVE_CREATION_FORM_DATA,
} from './types';

const defaultState = {
  name: '',
  surname: '',
};

export const creationFormInfoReducer = (
  state: {
    name: string,
    surname: string,
  } = defaultState,
  action: {
    type: string,
    payload: {
      name: string,
      surname: string,
    },
  },
) => {
  switch (action.type) {
    case CREATION_FORM_STATUS_REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Request,
      };
    case CREATION_FORM_STATUS_SUCCESS:
      return {
        ...state,
        requestStatus: RequestStatus.Success,
      };
    case CREATION_FORM_STATUS_FAILURE:
      return {
        ...state,
        requestStatus: RequestStatus.Failure,
      };
    case SAVE_CREATION_FORM_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
