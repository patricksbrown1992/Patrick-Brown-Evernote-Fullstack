import usersReducer from './usersReducer';
import NotebooksReducer from './notebooksReducer';
import NotesReducer from './notesReducer';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
    user: usersReducer,
    notebooks: NotebooksReducer,
    notes: NotesReducer
});
export default entitiesReducer;

