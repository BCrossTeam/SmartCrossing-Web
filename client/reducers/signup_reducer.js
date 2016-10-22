import _ from 'lodash';
import {SIGN_UP_POST} from '../actions/signup_actions';

const INITIAL_STATE = {
  signError: {
    num: null,
    content: undefined
  },
  signSuccess: null
};

export default function(state = INITIAL_STATE, action) {
  const content = ['Coś poszło nie tak, proszę spróbować ponownie ;)', 'Użytkownik jest już zarejestrowany'];
  switch (action.type) {
    case SIGN_UP_POST:
      if(action.payload.data.success) {
        return {...state, signSuccess: true, signError: {num: null, content: null}};
      } else if (action.payload.data.error == 3) {
        return {...state, signError: {num: 3, content: content[1]}, signSuccess: null};
      } else {
        return {...state, signError: {num: 1, content: content[0]}, signSuccess: null};
      }
    default:
      return state;
  }
}
