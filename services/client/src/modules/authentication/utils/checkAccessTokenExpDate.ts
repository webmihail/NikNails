import { Dispatch } from 'redux';
import { refresh } from '../../../api/authentication';
import { localStorageUtil } from '../../common/utils';

export const checkAccessTokenExpDate = () => {
  const currentTime = new Date().getTime();
  const tokenExpirationDate = localStorageUtil.getStorage('authData')?.expirationDate * 1000;
  return (dispatch: Dispatch<any>) => {
    if (currentTime > tokenExpirationDate) {
      localStorageUtil.clearStorage();
    }
    if (currentTime > tokenExpirationDate - 9000) {
      dispatch(refresh());
    }
  };
};
