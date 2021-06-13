import authReducer from '../reducer/auth/auth.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth:authReducer
});

export default rootReducer;