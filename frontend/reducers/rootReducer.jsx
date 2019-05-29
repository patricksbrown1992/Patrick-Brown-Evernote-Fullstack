import { combineReducers } from 'redux';
import entitiesReducer from './entities/entitiesReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer
});

export default rootReducer;