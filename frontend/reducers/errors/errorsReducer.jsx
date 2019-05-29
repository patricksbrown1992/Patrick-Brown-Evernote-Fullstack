import sessionErrorsReducer from './sessionErrorsReducer';
import {combineReducers} from 'redux';

const errorsReducer = combineReducers({
    errors: sessionErrorsReducer
});
export default errorsReducer;