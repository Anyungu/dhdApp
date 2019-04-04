
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, ImageBackground, TextInput } from 'react-native';
import {Spinner} from '../components/reusable';
import AntDesign from '@expo/vector-icons/AntDesign';


class forgortPasswordPage extends Component {

    sendLinkButtonOrSpinner () {

        var {width} = Dimensions.get('window');

        const {sendLinkButton, sendLinkButtonText, spinnerView} = styles;

        // const {loading} = this.props;

        if (1 != 1) {
            return (
            <View style= {{...spinnerView, ...{width:width*0.7}}}>
                <Spinner size = {40} color= '#008cff'/>
            </View>
            
            );
        }   
            return (
                <TouchableOpacity 
                        style= {{...sendLinkButton, ...{width:width*0.7}}}
                        // onPress = {this.onSignUpButtonPress.bind(this)}
                >
                    <Text style={sendLinkButtonText}>
                        SEND RESET LINK
                    </Text>
                </TouchableOpacity>

            );
            
    }

    render () {
        var {height, width} = Dimensions.get('window');
        const {mainContainer,iconView, textInput, textInputView} = styles;
        return (
            <ImageBackground source={require('../images/firstimage.jpg')} 
                style= {{...mainContainer, ...{height:height, width:width}}}
                blurRadius={5}
                    >
            
                <View style={iconView}>
                            <AntDesign name="unlock" size={122} color="#76355B" />
                </View>
                <View>
                    <Text style = {{fontSize: 25, textAlign: "center", fontWeight: 'bold', color: 'white'}}>
                        Forgot Your Password
                    </Text>
                    <Text style = {{fontSize: 15, textAlign: "center", color:'white'}}>
                        To recover your password,
                    </Text>
                    <Text style = {{fontSize: 15, textAlign: "center", color: 'white'}}>
                        you need to enter your registered email
                    </Text>
                </View>
                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <TextInput 
                        secureTextEntry = {false}
                        placeholder = "Email"
                        autoCorrect = {false}
                        style = {textInput}
                        // value={this.props.email} 
                        // onChangeText = {value => this.props.typedValueRegister({prop:'email' , value})}
                        placeholderTextColor = 'gray'
                    />
                </View>
                {this.sendLinkButtonOrSpinner()}
                </ImageBackground>

        );
    }
}

const styles = {
    mainContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex:1,
        paddingBottom: 60,
        paddingTop: 40
    },
    iconView: {
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 75,
        padding: 12,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
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
    spinnerView: {
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 20,
    },
    sendLinkButton: {
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 3,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
        borderColor: '#707070',
    },
    sendLinkButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
}

export default forgortPasswordPage;