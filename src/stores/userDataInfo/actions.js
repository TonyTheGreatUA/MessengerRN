//@flow
import { STORE_USER_DATA } from './types';

export const storeUserData = (userData: []) => {
  return {
    type: STORE_USER_DATA,
    payload: {
      userData,
    },
  };
};
