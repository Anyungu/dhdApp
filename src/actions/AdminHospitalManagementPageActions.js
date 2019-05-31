
import {HOSPITALCREATED, 
            HOSPITALCREATING, 
            HOSPITALNOTCREATED, 
            TYPEDVALUEADMIN, 
            CHECKEDLEGALSERVICE, 
            CHECKEDMENTALSERVICE,
            CHECKEDMORTUARYSERVICE,
            CHECKEDPALLIATIVESERVICE,
            CHECKEDSUBSTANCESERVICE
        } from './types';

import axios from 'axios';

export const typedValueAdminHospital = ({prop, value}) => {

    return {
        type: TYPEDVALUEADMIN,
        payload: {prop, value}
    };
};


export const checkedPalliativeRegister = ({palliativeCheck}) => {
    return {
        type: CHECKEDPALLIATIVESERVICE,
        payload: !palliativeCheck
    }

};


export const checkedLegalRegister = ({legalCheck}) => {
    return {
        type: CHECKEDLEGALSERVICE,
        payload:!legalCheck
    }

};

export const checkedMortuaryRegister = ({mortuaryCheck}) => {
    return {
        type: CHECKEDMORTUARYSERVICE,
        payload: !mortuaryCheck
    }

};

export const checkedSubstanceRegister = ({substanceCheck}) => {
    return {
        type: CHECKEDSUBSTANCESERVICE,
        payload:!substanceCheck
    };

};

export const checkedMentalRegister = ({mentalCheck}) => {
    return {
        type: CHECKEDMENTALSERVICE,
        payload: !mentalCheck
    };

};

export const saveHospital = ({ambulance, 
                                box, 
                                code, 
                                level, 
                                name, 
                                lat, 
                                long, 
                                phone, 
                                days, 
                                hours,
                                palliativeCheck,
                                mortuaryCheck,
                                mentalCheck,
                                legalCheck,
                                substanceCheck,
                                tok
                            }) => {

    
    return (dispatch) => {

        dispatch ({
            type: HOSPITALCREATING
        });

        console.log(tok);

        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tok
        }

        console.log(headers);

        var data = {
                
            "ambulance": ambulance,
            "boxOffice": box,
            "hospitalCode": code,
            "hospitalLevel": level,
            "hospitalName": name,
            "latitude": lat,
            "longitude": long,
            "phoneContact": phone
          
            }

        axios.post('https://nairobidhdheroku.herokuapp.com/faculties', data , { headers: headers

        })
        .then (response => {
           
        console.log(JSON.stringify(response));
           
            if (response.data.code == 200) {

                axios.post(`https://nairobidhdheroku.herokuapp.com/faculties/${code}/periodday`, {

                    "day": days,
                    "hospitalCode": code
                }, { headers : headers

                })
                .then (response => {
                    if (response.data.code == 200) {

                        axios.post(`https://nairobidhdheroku.herokuapp.com/faculties/${code}/periodtime`, {

                            "hospitalCode": code,
                            "time": hours
                            
                        }, { headers: headers

                        })
                        .then (response => {
                            if (response.data.code == 200) {

                                if (palliativeCheck == true) {

                                    axios.post(`https://nairobidhdheroku.herokuapp.com/faculties/${code}/service`, {

                                        "hospitalCode": code,
                                        "name": 'palliative'
                                    }, { headers: headers

                                    })
                                    .then (response => {
                                        if (response.data.code != 200) {
                                           
                                        
                                            hospitalFailedToRegister(dispatch);
                                        }
    
                                    })
                                    .catch (error => {
                                        hospitalFailedToRegister(dispatch);
                                    });

                                }

                                if (mortuaryCheck == true) {

                                    axios.post(`https://nairobidhdheroku.herokuapp.com/faculties/${code}/service`, {

                                        "hospitalCode": code,
                                        "name": 'mortuary'
                                    }, { headers: headers

                                    })
                                    .then (response => {
                                        if (response.data.code != 200) {
                                           
                                       
                                            hospitalFailedToRegister(dispatch);
                                        }
    
                                    })
                                    .catch (error => {
                                        hospitalFailedToRegister(dispatch);
                                    });

                                }

                                if (mentalCheck == true) {

                                    axios.post(`https://nairobidhdheroku.herokuapp.com/faculties/${code}/service`, {

                                        "hospitalCode": code,
                                        "name": 'mental'
                                    }, { headers: headers
                                    })
                                    .then (response => {
                                        if (response.data.code != 200) {
                                           
                                     
                                            hospitalFailedToRegister(dispatch);
                                        }
    
                                    })
                                    .catch (error => {
                                        hospitalFailedToRegister(dispatch);
                                    });

                                }

                               

                                if (legalCheck == true) {

                                    axios.post(`https://nairobidhdheroku.herokuapp.com/faculties/${code}/service`, {

                                        "hospitalCode": code,
                                        "name": 'legal'
                                    }, { headers: headers

                                    })
                                    .then (response => {
                                        if (response.data.code != 200) {
                                           
                                       
                                            hospitalFailedToRegister(dispatch);
                                        }
    
                                    })
                                    .catch (error => {
                                        hospitalFailedToRegister(dispatch);
                                    });

                                }

                                if (substanceCheck == true) {

                                    axios.post(`https://nairobidhdheroku.herokuapp.com/faculties/${code}/service`, {

                                        "hospitalCode": code,
                                        "name": 'substance'
                                    }, { headers: headers

                                    })
                                    .then (response => {
                                        if (response.data.code != 200) {
                                      
                                            hospitalFailedToRegister(dispatch);
                                        }
    
                                    })
                                    .catch (error => {
                                        hospitalFailedToRegister(dispatch);
                                    });

                                }

                                

                            hospitalRegisteredSuccessfuly(dispatch);

                            }else {
                                hospitalFailedToRegister(dispatch);
                            }
                        })
                        .catch (error => {
                            hospitalFailedToRegister(dispatch);
                        });

                    }else {
                        hospitalFailedToRegister(dispatch);
                    }

                })
                .catch (error => {
                    hospitalFailedToRegister(dispatch);
                });
             
            }else {
                hospitalFailedToRegister(dispatch);
            }

        })
        .catch (error => {
            console.log("error");
            hospitalFailedToRegister(dispatch);
        });


    }
};


const hospitalRegisteredSuccessfuly = (dispatch ) => {
    dispatch ({
        type: HOSPITALCREATED,
        // payload: user
    }); 
};


const hospitalFailedToRegister = (dispatch) => {
    dispatch ({
        type: HOSPITALNOTCREATED
    }); 
};