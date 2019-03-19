

import {TYPEDVALUE, LOGGINGINUSER, LOGINFAIL, LOGINSUCCESS} from '../actions/types';

const INITIAL = {email: '', password: '', loading:false, user:null, error:'' };


export default (state=INITIAL, action) => {

     
    switch (action.type) {

        case TYPEDVALUE:
            return {...state, [action.payload.prop]:action.payload.value , loading:false, error:''};

        case LOGGINGINUSER:
            return {...state, loading:true, name:'', email: '', password: '', error:'' };

        case LOGINSUCCESS:
            return {...state, user: action.payload, loading:false, email: '', password: '', error:'' };

        case LOGINFAIL:
            return {...state, loading:false, email: '', password: '', error:'Authentication Failed. Try Again.' };

        default:
            return state;
    }


};
