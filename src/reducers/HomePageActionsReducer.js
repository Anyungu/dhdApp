import {HOSPITALFAIL, HOSPITALFETCHING, HOSPITALSUCCESS, TYPEDVALUEMODAL} from '../actions/types';


const INITIAL = {loading:false, hospitals:[], message:'', insurance:'', email:'',password:'',confirm:''};


export default (state=INITIAL, action) => {

     
    switch (action.type) {


        case HOSPITALFETCHING:
            return {...state, loading:true, message:'Searching...' };

        case HOSPITALSUCCESS:
            return {...state, loading:false, hospitals: action.payload };

        case HOSPITALFAIL:
            return {...state, loading:false, message:'No Hospitals Found'};

        case TYPEDVALUEMODAL:
            return {...state, [action.payload.prop]:action.payload.value};
        
        default:
            return INITIAL;

    }

};