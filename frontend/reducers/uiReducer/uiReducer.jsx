import { combineReducers } from 'redux';
import CheckUserReducer from '../checkUser/checkUserReducer';
import modalReducer from './modalReducer';
import ShortcutReducer from './ShortcutReducer';
import SearchReducer from './searchReducer';

const uiReducer = combineReducers({
    verified: CheckUserReducer,
    modal: modalReducer,
    shortcut: ShortcutReducer,
    search: SearchReducer
});
export default uiReducer;