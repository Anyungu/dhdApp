import {Actions} from 'react-native-router-flux';
import axios from 'axios';


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


    

        return (dispatch) => {

            dispatch ({
                type: REGISTERINGUSER
            })
    
            axios.post('https://nairobidhdheroku.herokuapp.com/auth/clients', {
                
                "email": email,
                "firstName": name,
                "insuranceCover": insurance,
                "lastName": name,
                "phone": phone
                  
              })
              .then (response => {
                console.log("response?")
                console.log(JSON.stringify(response.data));
                if (JSON.stringify(response.data.code ) == 200) {
                   axios.post('https://nairobidhdheroku.herokuapp.com/auth/users', {
                    "userEmail": email,
                    "userPassword": password,
                    "userRole": "client",
                    "userStatus": false

                   })
                   .then ( response => {
                    console.log("response???")
                    console.log(JSON.stringify(response.data));
                    if (JSON.stringify(response.data.code ) == 200) {
                        userRegisteredSuccessfuly(dispatch);
                    }else {
                        userFailedToRegister(dispatch);
                    }

                   })
                   .catch (error => {
                     console.log("error?")
                     console.log(JSON.stringify(error));
                     userFailedToSignIn(dispatch);
                   });
                }else {
                    userFailedToRegister(dispatch);
                }
    
              })
              .catch (error => {
                console.log("error?")
                console.log(JSON.stringify(error));
                userFailedToSignIn(dispatch);
              });
            
        };
  
};


const userRegisteredSuccessfuly = (dispatch ) => {
    dispatch ({
        type: REGISTERSUCCESS,
        // payload: user
    }); 
    Actions.landingPage();
};


const userFailedToRegister = (dispatch) => {
    dispatch ({
        type: REGISTERFAIL
    }); 
};