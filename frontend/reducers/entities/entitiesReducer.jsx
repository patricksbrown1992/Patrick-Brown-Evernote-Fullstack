import usersReducer from "./usersReducer";
import NotebooksReducer from "./notebooksReducer";
import NotesReducer from "./notesReducer";
import TagsReducer from "./tagsReducer";
import TaggingsReducer from "./taggingsReducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
  user: usersReducer,
  notebooks: NotebooksReducer,
  notes: NotesReducer,
  tags: TagsReducer,
  taggings: TaggingsReducer,
});
export default entitiesReducer;
