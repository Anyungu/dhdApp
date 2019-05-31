import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import {AsyncStorage} from 'react-native'

import {TYPEDVALUE, LOGGINGINUSER, LOGINSUCCESS, LOGINFAIL, SETTOKEN} from './types'

export const typedValue = ({prop, value}) => {
    return {
        type: TYPEDVALUE,
        payload: {prop, value}
    };
};


export const setTokenn = ({tok}) => {

    console.log("set");
    console.log(tok);
    return {
        type: SETTOKEN,
        payload:tok
    };
}

export const loggingOutUser = ({tok}) => {

    console.log("logging out");
    console.log(tok);
    return (dispatch) => {

        dispatch ({
            type: LOGGINGINUSER
        })
        var bodyFormData = new FormData();
        
        bodyFormData.append('token', tok);
        

        axios({
            method: 'post',
            url: 'https://nairobidhdheroku.herokuapp.com/user/logOut',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' , 'Authorization': 'Bearer ' + tok }
            })
            .then(function (response) {
                console.log(response.data);
              if (response.data.code == 200) {

                remo().then(userLoggedOut(dispatch))

              } else {
                  userFailedToLogOut(dispatch);
              }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

}
}

export const loggingInUser = ({email,password}) => {

        return (dispatch) => {

            dispatch ({
                type: LOGGINGINUSER
            })
    
            console.log(email);
            console.log(password);
            axios.post('https://nairobidhdheroku.herokuapp.com/auth/login', {
                
                    "userEmail": email,
                    "userPassword": password
                  
              })
              .then (response => {
              console.log(response.data)
                if (response.data.state == true) {
                    cred(email, password, response.data.accessToken, response.data.userRole)
                        .then(token => {userSignedInSuccessfuly(dispatch, response.data.userRole, token, email)});
                   
                }else {
                    userFailedToSignIn(dispatch);
                }
    
              })
              .catch (error => {
                userFailedToSignIn(dispatch);
              });

            
            
        };

    
    
    

   
    
};

const userLoggedOut= (dispatch) => {

    dispatch ({
        type: LOGINSUCCESS,
    });
    Actions.landingPage();

}

const userFailedToLogOut = (dispatch) => {

    dispatch ({
        type: LOGINFAIL,
    });

}

const userSignedInSuccessfuly = (dispatch, type, tok, emailer) => {

    console.log(tok)
    console.log(type);
    dispatch ({
        type: LOGINSUCCESS,
    }); 

    if (type && type == "admin") {
        Actions.adminHomePage({tok, emailer});
    }
    else if (type && type == "client"){
        Actions.homePage({tok, emailer});
    }
   
};


const userFailedToSignIn = (dispatch) => {
    dispatch ({
        type: LOGINFAIL
    }); 
  
};

async function remo() {

    try{
     
        await AsyncStorage.removeItem('userEmail');
        await AsyncStorage.removeItem('userPassword');
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userRole');
        
    } catch (error){
        console.log(error);

    }
}

async function cred(email, pass, tok, role) {
  
   
    // Store the credentials
    // await Keychain.resetGenericPassword();
    // await Keychain.setGenericPassword(email, pass, tok);
    try{
     
        await AsyncStorage.setItem('userEmail', email);
        await AsyncStorage.setItem('userPassword', pass);
        await AsyncStorage.setItem('userToken', tok);
        await AsyncStorage.setItem('userRole', role);
       
        
    } catch (error){
        console.log(error);

    }

    let token = await AsyncStorage.getItem('userToken');
    console.log("in async functions");
    console.log(token);
    return token;

   
    
  }
