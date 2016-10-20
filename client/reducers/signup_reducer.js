import _ from 'lodash';
import {SIGN_UP_POST} from '../actions/signup_actions.js';

const INITIAL_STATE = {
  hasSigned: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_UP_POST:
      console.log(action.payload);
      return {...state, hasSigned: action.payload};
    default:
      return state;
  }
}
