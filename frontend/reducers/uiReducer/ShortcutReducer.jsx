import { merge } from "lodash";
import {
  RECEIVE_SHORTCUTS,
  CLEAR_SHORTCUTS,
  RECEIVE_SHORTCUT,
  DESTROY_SHORTCUT,
} from "../../actions/shortcutActions";

const ShortcutReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SHORTCUTS:
      const shortcuts = {};
      action.shortcuts.forEach((shortcut) => {
        shortcuts[shortcut.id] = shortcut;
      });
      return merge({}, state, shortcuts);
    case RECEIVE_SHORTCUT:
      return merge({}, state, { [action.shortcut.id]: action.shortcut });
    case DESTROY_SHORTCUT:
      const newState = merge({}, state);
      delete newState[action.entity.id];
      return newState;
    case CLEAR_SHORTCUTS:
      return {};
    default:
      return state;
  }
};

export default ShortcutReducer;
