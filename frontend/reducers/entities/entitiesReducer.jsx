import usersReducer from './usersReducer';
import NotebooksReducer from './notebooksReducer';
import NotesReducer from './notesReducer';
import TagsReducer from './tagsReducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    user: usersReducer,
    notebooks: NotebooksReducer,
    notes: NotesReducer,
    tags: TagsReducer
});
export default entitiesReducer;
