
import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import landingPage from './components/landingPage';
import registerPage from './components/registerPage';
import termsPage from './components/termsPage'


const RouterComponent = () => {

    return(
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="auth">
                    
                    <Scene 
                    key = "landingPage" 
                    component= {landingPage}
                    hideNavBar
                    initial
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

               </Scene>


                
                
            </Scene>
        </Router>
    );

};

export default RouterComponent;
