
import React, {Component} from 'react';
import {typedValue, loggingInUser} from '../actions';
import {Spinner, Input} from '../components/reusable';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    ImageBackground, 
    Dimensions
    } from 'react-native';





class landingPage extends Component {

    onLogInButtonPress () {
        
        const {email, password} = this.props;

        this.props.loggingInUser({ email, password})

    }

    onSignUpButtonPress () {
        Actions.registerPage()
    }

    loginButtonOrSpinner () {

        var {width} = Dimensions.get('window');

        const {loginButton, loginButtonText, spinnerView} = styles;

        const {loading} = this.props;

        if (loading) {
            return (
            <View style= {{...spinnerView, ...{width:width*0.5}}}>
                <Spinner size = {40} color= '#008cff'/>
            </View>
            
            );
        }   
            return (
                <TouchableOpacity 
                style= {{...loginButton, ...{width:width*0.5}}}
                onPress = {this.onLogInButtonPress.bind(this)}
                >
                    <Text style= {loginButtonText}>
                        LOG IN
                    </Text>
                </TouchableOpacity>

            );
            
    }

    signUpButtonOrSpinner () {

    }

    
    render() {
        var {height, width} = Dimensions.get('window');
        const {mainContainer,
            logoContainer, 
            logoText, 
            belowLogoText, 
            textInputView, 
            forgotPasswordText,  
            loginButtonText,
            newToDhdText,
            signUpButton,
            newToDhdContainer,
            lineBreak} = styles;
        
        return (
            <ImageBackground source={require('../images/firstimage.jpg')} 
                style= {{...mainContainer, ...{height:height, width:width}}}
                blurRadius={5}
                    >
                <View style = {logoContainer}>
                    <Text style = {logoText}>
                        DHD
                    </Text>

                    <Text style = {belowLogoText}>
                        Access your health faster
                    </Text>
                </View>
                 
                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <Input 
                        secureTextEntry = {false}
                        placeholder = {"email@example.com"}
                        autoCorrect = {false}
                        value= {this.props.email}
                        onChangeText = {value => this.props.typedValue({prop: 'email' , value})}
                        placeholderTextColor = {'gray'}
                    />
                </View>

                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <Input 
                        secureTextEntry = {true}
                        placeholder = {"Password"}
                        autoCorrect = {false}
                        value={this.props.password} 
                        onChangeText = {value => this.props.typedValue({prop: 'password' , value})}
                        placeholderTextColor = {'gray'}
                    />
                </View>
                <TouchableOpacity style = {{width:width*0.7}}>
                    <Text style = {forgotPasswordText}>
                        Forgotten Password
                    </Text>
                </TouchableOpacity>
                
                {this.loginButtonOrSpinner()}
                
                <View style = {{...lineBreak, ...{width:width*0.8}}}/>
                <View style = {{...newToDhdContainer, ...{width:width*0.75}}}>
                    <Text style = {newToDhdText}>
                        New to DHD?
                    </Text>

                </View>
                

                <TouchableOpacity 
                        style= {{...signUpButton, ...{width:width*0.5}}}
                        onPress = {this.onSignUpButtonPress.bind(this)}
                >
                    <Text style={loginButtonText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
                    
            </ImageBackground>

                
        );
    }
}

const styles = {
    mainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 45,
    },
    logoContainer: {
        paddingBottom: 20,
    },
    logoText: {
        fontSize: 70,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F8F2F2'
    },
    belowLogoText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Roboto',
        color: '#FFFFFF'
    },
    textInputView: {
        borderBottomWidth: 2,
        borderColor: '#FFFFFF',
        padding: 10,
        paddingLeft: 5
    },
    forgotPasswordText: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'right',
        fontFamily: 'Roboto',
        fontStyle: 'italic'
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor: '#E68100',
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
    },
    spinnerView: {
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 20,
    },
    signUpButton: {
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 3,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
        borderColor: '#707070',
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    lineBreak: {
        borderBottomWidth: 5,
        borderColor: '#707070',
    },
    newToDhdContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    newToDhdText: {
        color: '#ffffff',
        fontSize: 15,
        fontFamily: 'Roboto'
    },
}

const mapStateToProps = ({loginAction}) => {

    const {email, password, loading, error} =  loginAction;

    return  {email, password, loading, error};

};

export default connect (mapStateToProps, {typedValue, loggingInUser})(landingPage);



