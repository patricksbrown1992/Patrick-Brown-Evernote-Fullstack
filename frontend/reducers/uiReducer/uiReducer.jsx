import { combineReducers } from 'redux';
import CheckUserReducer from '../checkUser/checkUserReducer';
import modalReducer from './modalReducer';
import ShortcutReducer from './ShortcutReducer';

const uiReducer = combineReducers({
    verified: CheckUserReducer,
    modal: modalReducer,
    shortcut: ShortcutReducer
});
export default uiReducer;