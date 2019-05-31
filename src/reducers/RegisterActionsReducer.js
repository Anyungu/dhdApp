import {CHECKEDREGISTER, TYPEDVALUEREGISTER, REGISTERINGUSER, REGISTERSUCCESS, REGISTERFAIL} from '../actions/types';

const INITIAL = { name:'', 
            email: '', 
            password: '', 
            confirm:'', 
            loading:false, 
            user:null, 
            error:'', 
            checked:true, 
            insurance:'',
            phone:''};


export default (state=INITIAL, action) => {

     
    switch (action.type) {

        case TYPEDVALUEREGISTER:
            return {...state, [action.payload.prop]:action.payload.value , loading:false, error:''};

        case CHECKEDREGISTER:
        return {...state, loading:false, error:'', checked: action.payload };

        case REGISTERINGUSER:
            return {...state, loading:true, error:'' };

        case REGISTERSUCCESS:
            return {...state, user: action.payload, loading:false, name:'', email: '', password: '', confirm:'', error:'', insurance:'', phone:'', checked:'true' };

        case REGISTERFAIL:
            return {...state, loading:false, password: '', confirm:'', error:'Registration Failed.' };

        default:
            return INITIAL;
    }


};