

import {TYPEDVALUE, LOGGINGINUSER, LOGINFAIL, LOGINSUCCESS, SETTOKEN} from '../actions/types';

const INITIAL = {email: '', password: '', loading:false, token:'', error:'' };


export default (state=INITIAL, action) => {

     
    switch (action.type) {

        case TYPEDVALUE:
            return {...state, [action.payload.prop]:action.payload.value , loading:false, error:''};

        case LOGGINGINUSER:
            return {...state, loading:true,  error:'' };

        case LOGINSUCCESS:
            return INITIAL;

        case LOGINFAIL:
            return {...state, loading:false, password: '', error:'Authentication Failed. Try Again.' };

        case SETTOKEN:
            return {...state, token: action.payload};

        default:
            return INITIAL;
    }


};
