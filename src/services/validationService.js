//@flow
import { RegExps } from '../utils/RegExps';

function assertErr(exp: boolean, msg: string, err: Array<string>) {
  if (!exp) {
    err.push(msg);
  }
}

export const validationService = (items: any) => {
  const { phoneNumber, firstName, lastName } = items;
  const err = [];

  assertErr(phoneNumber.match(RegExps.phoneNumberRegex), 'Phone Number is invalid!', err);

  return err[0];
};

export const validationCreation = (items: any) => {
  const { firstName, lastName } = items;
  const err = [];

  assertErr(firstName.match(RegExps.firstNameRegex), 'First Name is invalid!', err);
  assertErr(lastName.match(RegExps.lastNameRegex), 'First Name is invalid!', err);

  return err[0];
};
