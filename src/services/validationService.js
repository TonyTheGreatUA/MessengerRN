//@flow
import { RegExps } from '../utils/RegExps';

function assertErr(exp: boolean, msg: string, err: Array<string>) {
  if (!exp) {
    err.push(msg);
  }
}

export const validationService = (items: any) => {
  const { phoneNumber } = items;
  const err = [];

  assertErr(phoneNumber.match(RegExps.phoneNumberRegex), 'Phone Number is invalid!', err);

  return err[0];
};
