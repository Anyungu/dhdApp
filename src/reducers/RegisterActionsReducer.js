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
        return {...state, loading:false, name:'', email: '', password: '', confirm:'', error:'', checked: action.payload, insurance:'', phone };

        case REGISTERINGUSER:
            return {...state, loading:true, error:'' };

        case REGISTERSUCCESS:
            return {...state, user: action.payload, loading:false, name:'', email: '', password: '', confirm:'', error:'', checked:'', insurance:'', phone };

        case REGISTERFAIL:
            return {...state, loading:false, name:'', email: '', password: '', confirm:'', phone:'', insurance:'', error:'Registration Failed.' };

        default:
            return state;
    }


};