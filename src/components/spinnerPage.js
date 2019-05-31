import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, AsyncStorage} from 'react-native';
import {Spinner} from '../components/reusable';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {setTokenn} from '../actions';



class spinnerPage extends Component {

    async autoLoginF () {
        console.log('here');
        try {
            // Retreive the credentials
            console.log ('and here');
            let emailer = await AsyncStorage.getItem('userEmail');
            let pass = await AsyncStorage.getItem('userPassword');
            let tok = await AsyncStorage.getItem('userToken');
            let role = await AsyncStorage.getItem('userRole');

            //   await AsyncStorage.removeItem('userToken');


            if (tok !== null && tok !== "" && role === "client") {
                console.log('Credentials successfully loaded for user ' + tok);
                Actions.homePage({tok, emailer});
            } else if (tok !== null && tok !== "" && role === "admin") {
                console.log('Credentials successfully loaded for user ' + tok);
                Actions.adminHomePage({tok, emailer});
            }
            else {      
              console.log('No credentials stored')
              Actions.landingPage();
            }
          } catch (error) {
            console.log('Keychain couldn\'t be accessed!', error);
            Actions.landingPage();
          }
    }

    componentDidMount () {
        console.log('before f');
        this.autoLoginF();
    }

    render () {

        const {width} = Dimensions.get("screen");
        const {mainContiner, spinnerView} = styles;
        return (
            <View style = {mainContiner}>
                <View style= {{...spinnerView, ...{width:width*0.8}}}>
                    <Spinner size = {90} color= '#E68100'/>
                </View>

            </View>
            
        );
    }
}



const styles = StyleSheet.create ({

    mainContiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinnerView: {
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 20,
    },

});

const mapStateToProps = ({loginAction}) => {

    const {email, password, loading, error} =  loginAction;

    return  {email, password, loading, error};

};


export default connect (mapStateToProps, {setTokenn})(spinnerPage);