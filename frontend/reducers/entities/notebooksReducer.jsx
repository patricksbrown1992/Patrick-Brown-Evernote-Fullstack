import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  DESTROY_NOTEBOOK,
  CLEAR_NOTEBOOKS,
} from "../../actions/notebookActions";
import { REMOVE_USER } from "../../actions/sessionActions";
import { merge } from "lodash";

const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      const notebooks = {};
      action.notebooks.forEach((notebook) => {
        notebooks[notebook.id] = notebook;
      });

      return merge({}, state, notebooks);
    case RECEIVE_NOTEBOOK:
      return merge({}, state, { [action.notebook.id]: action.notebook });
    case CLEAR_NOTEBOOKS:
      return {};
    case DESTROY_NOTEBOOK:
      const newState = merge({}, state);
      delete newState[action.notebook.id];
      return newState;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};
export default notebooksReducer;
