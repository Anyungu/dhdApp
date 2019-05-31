import {Actions} from 'react-native-router-flux';
import axios from 'axios';

import {TYPEDVALUEADMIN, ADMINCREATED, ADMINCREATING, ADMINNOTCREATED, TYPEDVALUEADMINMODAL} from './types';


export const typedValueAdmin = ({prop, value}) => {
    return {
        type: TYPEDVALUEADMIN,
        payload: {prop, value}
    };
};


export const typedValueAdminModal = ({prop, value}) => {

    return {
        type: TYPEDVALUEADMINMODAL,
        payload: {prop, value}
    };

}


export const saveAdmin = ({email, password}) => {


    return (dispatch) => {

        dispatch ({
            type: ADMINCREATING
        });

        axios.post('https://nairobidhdheroku.herokuapp.com/auth/users', {
                
            "userEmail": email,
            "userPassword": password,
            "userRole": "admin",
            "userStatus": false
          
        })
        .then (response => {
        console.log(response.data)
            if (response.data.state == true) {
                adminRegisteredSuccessfuly(dispatch);
            }else {
                console.log(response.data);
                adminFailedToRegister(dispatch);
            }

        })
        .catch (error => {
            console.log(error);
            adminFailedToRegister(dispatch);
        });
    }


}

const adminRegisteredSuccessfuly = (dispatch ) => {
    dispatch ({
        type: ADMINCREATED
    }); 

};


const adminFailedToRegister = (dispatch) => {
    dispatch ({
        type: ADMINNOTCREATED
    }); 
};