import { validationCreation } from './validationService';

const callServerMockCreation = (items: boolean): Promise<any> => {
  return new Promise((resolve, reject) => {
    const err = validationCreation(items);
    const response = () => {
      err ? reject(err) : resolve();
    };
    setTimeout(response, 2000);
  });
};

const onServerValidation = (items: boolean) => {
  return callServerMockCreation(items);
};

class CreationAPIService {
  callServerValidation(items: boolean) {
    return onServerValidation(items);
  }
}

export { CreationAPIService };
