import {HOSPITALCREATING, 
        HOSPITALCREATED, 
        HOSPITALNOTCREATED, 
        TYPEDVALUEADMIN, 
        CHECKEDLEGALSERVICE,
        CHECKEDMENTALSERVICE,
        CHECKEDMORTUARYSERVICE,
        CHECKEDPALLIATIVESERVICE,
        CHECKEDSUBSTANCESERVICE
    } from '../actions/types';



const INITIAL = {loadingCreate:false, 
                    message:'', 
                    name:'', 
                    email:'', 
                    box:'', 
                    code:'', 
                    phone:'',
                    lat:'',
                    long:'',
                    ambulance: true,
                    hours: '24',
                    days:'everyday',
                    palliativeCheck:false,
                    mortuaryCheck:false,
                    mentalCheck:false,
                    legalCheck:false,
                    loadingCreate:false,
                    substanceCheck:false,
                    level:''
                };



export default (state=INITIAL, action) => {
    switch (action.type) {

        case HOSPITALCREATED:
            return {...INITIAL, message: 'Hospital Created Successfully'};
        
        
        case HOSPITALCREATING:
            return {...state, loadingCreate: true};
        
        case HOSPITALNOTCREATED:
            return {...state, message: 'Hospital Could Not be created', loadingCreate: false};
        
        case TYPEDVALUEADMIN:
            return {...state, [action.payload.prop]:action.payload.value};
        
        case CHECKEDLEGALSERVICE:
            return { ...state, legalCheck:action.payload};

        case CHECKEDPALLIATIVESERVICE:
            return {...state, palliativeCheck:action.payload};

        case CHECKEDMENTALSERVICE:
            return { ...state, mentalCheck:action.payload};

        case CHECKEDMORTUARYSERVICE:
            return {...state, mortuaryCheck:action.payload};

        case CHECKEDSUBSTANCESERVICE:
            return { ...state, substanceCheck:action.payload};
        
        default:
            return INITIAL;
    }
}