import { combineReducers } from 'redux';
import entitiesReducer from './entities/entitiesReducer';
import sessionReducer from './sessionReducer';
import errorsReducer from './errors/sessionErrorsReducer';

import CheckUserReducer from './checkUser/checkUserReducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: CheckUserReducer,
    errors: errorsReducer
});

export default rootReducer;