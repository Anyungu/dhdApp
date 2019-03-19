

import {Actions} from 'react-native-router-flux';

import {TYPEDVALUE, LOGGINGINUSER, LOGINSUCCESS, LOGINFAIL} from './types'

export const typedValue = ({prop, value}) => {
    return {
        type: TYPEDVALUE,
        payload: {prop, value}
    };
};


export const loggingInUser = ({email,password}) => {


    

        return (dispatch) => {

            dispatch ({
                type: LOGGINGINUSER
            })
    
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(
                    (user)=>{ userSignedInSuccessfuly(dispatch,user)}
                        
                        
                    )
                .catch(function(error) {
                
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    () => userFailedToSignIn (dispatch)
                
                });
            
        };

    
    
    

   
    
};


const userSignedInSuccessfuly = (dispatch , user) => {
    dispatch ({
        type: LOGINSUCCESS,
        payload: user
    }); 
 //   Actions.main().employeeList();
};


const userFailedToSignIn = (dispatch) => {
    dispatch ({
        type: LOGINFAIL
    }); 
};
