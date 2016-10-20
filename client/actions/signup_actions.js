import axios from 'axios';

export const SIGN_UP_POST = 'SIGN_UP_POST';

export function signUpPost() {
  return {
    type: SIGN_UP_POST,
    payload: true
  };
}
