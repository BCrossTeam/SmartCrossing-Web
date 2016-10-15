import {combineReducers} from 'redux';
import StatsReducer from './stats_reducer';

const rootReducer = combineReducers({
  stats: StatsReducer
});

export default rootReducer;
