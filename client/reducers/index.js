import {combineReducers} from 'redux';
import StatsReducer from './stats_reducer';
import MapReducer from './map_reducer';

const rootReducer = combineReducers({
  stats: StatsReducer,
  map: MapReducer
});

export default rootReducer;
