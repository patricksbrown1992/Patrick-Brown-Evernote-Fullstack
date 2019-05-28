import { combineReducers } from 'redux';
import entitiesReducer from './entities/entitiesReducer';

const rootReducer = combineReducers({
    entities: entitiesReducer
});

export default rootReducer;