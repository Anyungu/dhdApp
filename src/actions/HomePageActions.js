import {Actions} from 'react-native-router-flux';
import axios from 'axios';

import {HOSPITALFAIL, HOSPITALSUCCESS, HOSPITALFETCHING, TYPEDVALUEMODAL} from './types';


export const typedValueModal = ({prop, value}) => {
    return {
        type: TYPEDVALUEMODAL,
        payload: {prop, value}
    };
};

export const hospitalFetching = ({prop, tok}) => {
    console.log({prop});
    console.log("in action")
    return (dispatch) => {

        dispatch ({
            type: HOSPITALFETCHING
        });

        console.log({tok});
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tok
        }

        console.log(headers);

        console.log("before geting")
        axios.get('https://nairobidhdheroku.herokuapp.com/faculties', { headers: headers})
            .then(response=> {
                
                if (response.data.code == 200) {

                    var hospitals = response.data.data;
                    hospitalFound(dispatch, hospitals);

                }else {
                    hospitalNotFound(dispatch);
                }
               
                
            })
            .catch(error => {

                hospitalNotFound(dispatch);
              });
    }
}


const hospitalFound = (dispatch, hospitals) => {
    dispatch ({
        type: HOSPITALSUCCESS,
         payload: hospitals
    }); 
 
    Actions.serviceFacultiesPage();
};


const hospitalNotFound = (dispatch) => {

    console.log("Fail??")
    dispatch ({
        type: HOSPITALFAIL
    }); 
    Actions.registerPage();
};