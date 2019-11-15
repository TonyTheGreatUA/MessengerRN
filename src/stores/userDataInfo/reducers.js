//@flow
import { STORE_USER_DATA } from './types';

const defaultState = {
  userData: [],
};

export const userDataReducer = (
  state: {
    userData: [],
  } = defaultState,
  action: {
    type: string,
    payload: {
      userData: [],
    },
  },
) => {
  switch (action.type) {
    case STORE_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
