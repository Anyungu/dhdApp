import {Actions} from 'react-native-router-flux';

import {CHECKEDREGISTER, TYPEDVALUEREGISTER, REGISTERFAIL, REGISTERINGUSER, REGISTERSUCCESS} from './types';

export const typedValueRegister = ({prop, value}) => {
    return {
        type: TYPEDVALUEREGISTER,
        payload: {prop, value}
    };
};

export const checkedRegister = ({checked}) => {
    return {
        type: CHECKEDREGISTER,
        payload: !checked
    }

};


export const registeringUser = ({email, password, confirm, checked, name, phone, insurance}) => {


    if ( 1 == 1) {

        return (dispatch) => {

            dispatch ({
                type: REGISTERINGUSER
            })
    
            // firebase.auth().createUserWithEmailAndPassword(email, password)
            //     .then(
            //         (user)=>{
            //             if(user){
            //                 user.updateProfile({
            //                     displayName: name
                                
            //                 }).then(
            //                     user => userRegisteredSuccessfuly(dispatch,user)
            //                     )
            //             }
            //     })
            //     .catch(function(error) {
                
            //         var errorCode = error.code;
            //         var errorMessage = error.message;
            //         () => userFailedToRegister (dispatch)
                
            //     });
            setTimeout( () => {userRegisteredSuccessfuly (dispatch)}, 4000);
            
        };

    }
    
    else {

        return {
            type: REGISTERFAIL

        };
        

    }

   
    
};


const userRegisteredSuccessfuly = (dispatch ) => {
    dispatch ({
        type: REGISTERSUCCESS,
        // payload: user
    }); 
 //   Actions.main().employeeList();
    Actions.homePage();
};


const userFailedToRegister = (dispatch) => {
    dispatch ({
        type: REGISTERFAIL
    }); 
};