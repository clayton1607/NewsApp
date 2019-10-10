import { createStore, combineReducers } from 'redux';
import reducer from './reducers/settings';
const rootReducer = combineReducers({
    setting : reducer
});

cp