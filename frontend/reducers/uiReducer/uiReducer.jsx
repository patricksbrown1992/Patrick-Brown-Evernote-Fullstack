import { combineReducers } from 'redux';
import CheckUserReducer from '../checkUser/checkUserReducer';
import modalReducer from './modalReducer';


const uiReducer = combineReducers({
    verified: CheckUserReducer,
    modal: modalReducer
});
export default uiReducer;