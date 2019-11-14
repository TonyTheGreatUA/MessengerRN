import { validationService } from './validationService';

const callServerMock = (items: boolean): Promise<any> => {
  return new Promise((resolve, reject) => {
    const err = validationService(items);
    const response = () => {
      err ? reject(err) : resolve();
    };
    setTimeout(response, 200);
  });
};

const onServerValidation = (items: boolean) => {
  return callServerMock(items);
};

class CallAPIService {
  callServerValidation(items: boolean) {
    return onServerValidation(items);
  }
}

export { CallAPIService };
