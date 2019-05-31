import usersReducer from './usersReducer';
import NotebooksReducer from './notebooksReducer';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
    user: usersReducer,
    notebooks: NotebooksReducer
});
export default entitiesReducer;

