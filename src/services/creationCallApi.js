import { validationCreation } from './validationService';

const callServerMockCreation = (items: boolean): Promise<any> => {
  return new Promise((resolve, reject) => {
    const err = validationCreation(items);
    const response = () => {
      err ? reject(err) : resolve();
    };
    setTimeout(response, 200);
  });
};

const onServerValidationC = (items: boolean) => {
  return callServerMockCreation(items);
};

class CreationAPIService {
  callServerValidationC(items: boolean) {
    return onServerValidationC(items);
  }
}

export { CreationAPIService };
