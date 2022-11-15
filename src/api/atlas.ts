import {IAuth} from '../context/AuthContext';

export const filterAuth = (newAuth: IAuth): IAuth => {
  if (newAuth.username === '') {
    return {
      token: '',
      username: '',
      name: '',
    };
  }
  return newAuth;
};
