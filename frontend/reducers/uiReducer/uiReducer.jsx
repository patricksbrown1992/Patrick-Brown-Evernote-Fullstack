import { combineReducers } from 'redux';
import CheckUserReducer from '../checkUser/checkUserReducer';
import modalReducer from './modalReducer';
import ShortcutReducer from './ShortcutReducer';
import SearchReducer from './searchReducer';
import TagTriage from './tagTriageReducer';

const uiReducer = combineReducers({
    verified: CheckUserReducer,
    modal: modalReducer,
    shortcut: ShortcutReducer,
    search: SearchReducer,
    Triage: TagTriage
});
export default uiReducer;