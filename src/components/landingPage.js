
import React, {Component} from 'react';
import {View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    ImageBackground, 
    Dimensions} from 'react-native';




class landingPage extends Component {

    
    render() {
        var {height, width} = Dimensions.get('window');
        const {mainContainer,
            logoContainer, 
            logoText, 
            belowLogoText, 
            textInputView, 
            textInput, 
            forgotPasswordText, 
            loginButton, 
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
                    <TextInput 
                        secureTextEntry = {false}
                        placeholder = "email@example.com"
                        autoCorrect = {false}
                        style = {textInput}
                        // value={value} 
                        // onChangeText ={onChangeText} 
                        placeholderTextColor = 'gray'
                    />
                </View>

                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <TextInput 
                        secureTextEntry = {true}
                        placeholder = "Password"
                        autoCorrect = {false}
                        style = {textInput}
                        // value={value} 
                        // onChangeText ={onChangeText} 
                        placeholderTextColor = 'gray'
                    />
                </View>
                <TouchableOpacity style = {{width:width*0.7}}>
                    <Text style = {forgotPasswordText}>
                        Forgotten Password
                    </Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity 
                    style= {{...loginButton, ...{width:width*0.5}}}
                    // onPress
                >
                    <Text style= {loginButtonText}>
                        LOG IN
                    </Text>
                </TouchableOpacity>

                <View style = {{...lineBreak, ...{width:width*0.8}}}/>
                <View style = {{...newToDhdContainer, ...{width:width*0.75}}}>
                    <Text style = {newToDhdText}>
                        New to DHD?
                    </Text>

                </View>
                

                <TouchableOpacity 
                        style= {{...signUpButton, ...{width:width*0.5}}}
                    // onPress
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
    textInput: {
        fontSize: 15,
        fontFamily: 'Roboto',

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
    }
}



export default landingPage;

