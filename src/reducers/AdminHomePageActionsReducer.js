import {ADMINCREATED, ADMINNOTCREATED, ADMINCREATING, TYPEDVALUEADMIN, TYPEDVALUEADMINMODAL} from '../actions/types';



const INITIAL = {loadingCreate:false, message:'', name:'', email:'', password:'', confirm:'',
                        uEmail: '', uPass: '', uConfirm: '', uOld:''};



export default (state=INITIAL, action) => {
    switch (action.type) {

        case ADMINCREATED:
            return {...INITIAL, message: 'Hospital Created Successfully'};
        
        
        case ADMINCREATING:
            return {...state, loadingCreate: true};
        
        case ADMINNOTCREATED:
            return {...state, message: 'Hospital Could Not be created'};
        
        case TYPEDVALUEADMIN:
            return {...state, [action.payload.prop]:action.payload.value};

        case TYPEDVALUEADMINMODAL:
            return {...state, [action.payload.prop]: action.payload.value};
        
        default:
            return INITIAL;
    }
}