
import {combineReducers} from 'redux';
import LoginActionsReducer from './LoginActionsReducer';
import RegisterActionsReducer from './RegisterActionsReducer';
import HomePageActionsReducer from './HomePageActionsReducer';
import AdminHomePageActionsReducer from './AdminHomePageActionsReducer';
import AdminHospitalManagementActionsReducer from './AdminHospitalManagementActionsReducer'



export default combineReducers ({

    loginAction: LoginActionsReducer,
    registerAction: RegisterActionsReducer,
    homepageAction: HomePageActionsReducer,
    AdminHomePageAction: AdminHomePageActionsReducer,
    AdminHospitalManagementAction: AdminHospitalManagementActionsReducer
});
