import {combineReducers} from 'redux';
import StatsReducer from './stats_reducer';
import MapReducer from './map_reducer';
import SignUpReducer from './signup_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  stats: StatsReducer,
  map: MapReducer,
  signup: SignUpReducer,
  form: formReducer
});

export default rootReducer;
