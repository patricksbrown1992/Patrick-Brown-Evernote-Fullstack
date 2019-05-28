import usersReducer from './usersReducer';
import sessionReducer from './session_reducer';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
    users: usersReducer,
    session: sessionReducer
});
export default entitiesReducer;

