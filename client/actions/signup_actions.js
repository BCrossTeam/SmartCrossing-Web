import axios from 'axios';
import _ from 'lodash';

import {ROOT_URL, urls} from './index';

export const SIGN_UP_POST = 'SIGN_UP_POST';

export function signUpPost(values) {
  let postData = {
    user_email: values.email,
    user_password: values.passwordField,
    user_name: _.trim(values.username)
  };
  const req = axios.post(`${ROOT_URL}/${urls.signUp}`, JSON.stringify(postData));
  return {
    type: SIGN_UP_POST,
    payload: req
  };
}
