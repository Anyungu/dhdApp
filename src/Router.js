
import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import landingPage from './components/landingPage';
import registerPage from './components/registerPage';
import termsPage from './components/termsPage';
import homePage from './components/homePage';
import mapPage from './components/mapPage';
import forgortPasswordPage from './components/forgortPasswordPage';
import serviceFacultiesPage from './components/serviceFacultiesPage';
import adminHomePage from './components/adminHomePage';
import adminHospitalManagementPage from './components/adminHospitalManagementPage';
import spinnerPage from'./components/spinnerPage';


const RouterComponent = () => {

    return(
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="auth">
                    
                    <Scene 
                    key = "landingPage" 
                    component= {landingPage}
                    hideNavBar
                    /> 

                    <Scene
                    key = "registerPage"
                    component = {registerPage}
                    hideNavBar
                    />

                    <Scene
                    key = "termsPage"
                    component = {termsPage}
                    hideNavBar
                    />

                    <Scene
                    key = "homePage"
                    component = {homePage}
                    hideNavBar
                    />

                    <Scene
                    key = "mapPage"
                    component = {mapPage}
                    hideNavBar
                    />

                    <Scene
                    key = "forgortPasswordPage"
                    component = {forgortPasswordPage}
                    hideNavBar 
                    />

                    <Scene 
                    key =  "serviceFacultiesPage"
                    component = {serviceFacultiesPage}
                    hideNavBar 
                    />

                    <Scene
                    key = "adminHomePage"
                    component = {adminHomePage}
                    hideNavBar
                    />

                    <Scene
                    key = "adminHospitalManagementPage" 
                    component = {adminHospitalManagementPage}
                    hideNavBar
                    />

                    <Scene
                    key = "spinnerPage"
                    component = {spinnerPage}
                    hideNavBar
                    initial
                 
                    />
               </Scene>


                
                
            </Scene>
        </Router>
    );

};

export default RouterComponent;
