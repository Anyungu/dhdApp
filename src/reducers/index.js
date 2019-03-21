
import {combineReducers} from 'redux';
import LoginActionsReducer from './LoginActionsReducer';
import RegisterActionsReducer from './RegisterActionsReducer';




export default combineReducers ({

    loginAction: LoginActionsReducer,
    registerAction: RegisterActionsReducer,
});
