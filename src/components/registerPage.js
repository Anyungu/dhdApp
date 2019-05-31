

import React, {Component} from 'react';
import {typedValueRegister, registeringUser, checkedRegister} from '../actions';
import {Spinner} from '../components/reusable';
import {connect} from 'react-redux';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
//import {KeyboardAwareScrollView} from'react-native-keyboard-aware-scroll-view';



import {View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    ImageBackground, 
    Dimensions,
    KeyboardAvoidingView
    } from 'react-native';





class registerPage extends Component {

    onSignUpButtonPress () {
        const {email, password, confirm, phone, name, insurance, checked} = this.props;

        this.props.registeringUser({ email, password, confirm, phone, name, insurance, checked})
    }

    onCheckBoxCheck () {

        const {checked} = this.props;
    
        this.props.checkedRegister({checked})
    }

    onTermsTextPress () {
        Actions.termsPage();
    }

    signUpButtonOrSpinner () {

        var {width} = Dimensions.get('window');

        const {signUpButton, signUpButtonText, spinnerView} = styles;

        const {loading} = this.props;

        if (loading) {
            return (
            <View style= {{...spinnerView, ...{width:width*0.5}}}>
                <Spinner size = {40} color= '#E68100'/>
            </View>
            
            );
        }   
            return (
                <TouchableOpacity 
                        style= {{...signUpButton, ...{width:width*0.5}}}
                        onPress = {this.onSignUpButtonPress.bind(this)}
                >
                    <Text style={signUpButtonText}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>

            );
            
    }


    
    render() {
        var {height, width} = Dimensions.get('window');
        const {mainContainer,
            headerContainer, 
            headerText, 
            textInputView,
            forgotPasswordText, 
            termsView,
            textInput,  
                } = styles;
        
        return (

           

            <ImageBackground source={require('../images/firstimage.jpg')} 
                style= {{...mainContainer, ...{height:height, width:width}}}
                blurRadius={3}
                    >

                <KeyboardAvoidingView behavior="padding">

                <View style = {headerContainer}>

                    {/* <FontAwesome5 name={'capsules'} size={30} color="#008cff"/>  */}
                    <Text style = {headerText}>
                        Sign Up
                    </Text>

                   
                </View> 
                 
                
               
                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <TextInput 
                        secureTextEntry = {false}
                        placeholder = "Name"
                        autoCorrect = {false}
                        style = {textInput}
                        value={this.props.name} 
                        onChangeText = {value => this.props.typedValueRegister({prop:'name' , value})}
                        placeholderTextColor = 'gray'
                    />
                </View>
     
                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <TextInput 
                        secureTextEntry = {false}
                        placeholder = "Phone"
                        autoCorrect = {false}
                        style = {textInput}
                        value={this.props.phone} 
                        onChangeText = {value => this.props.typedValueRegister({prop:'phone' , value})}
                        placeholderTextColor = 'gray'
                    />
                </View>
           

                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <TextInput 
                        secureTextEntry = {false}
                        placeholder = "email@example.com"
                        autoCorrect = {false}
                        style = {textInput}
                        value={this.props.email} 
                        onChangeText = {value => this.props.typedValueRegister({prop:'email' , value})}
                        placeholderTextColor = 'gray'
                    />
                </View>

              
                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <TextInput 
                        secureTextEntry = {false}
                        placeholder = "Insurance"
                        autoCorrect = {false}
                        style = {textInput}
                        value={this.props.insurance} 
                        onChangeText = {value => this.props.typedValueRegister({prop:'insurance' , value})}
                        placeholderTextColor = 'gray'
                    />
                </View>
           
                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <TextInput 
                        secureTextEntry = {true}
                        placeholder = "Password"
                        autoCorrect = {false}
                        style = {textInput}
                        value={this.props.password} 
                        onChangeText = {value => this.props.typedValueRegister({prop:'password' , value})}
                        placeholderTextColor = 'gray'
                    />
                </View>
          
                <View style = {{...textInputView, ...{width:width*0.7}}}>
                    <TextInput 
                        secureTextEntry = {true}
                        placeholder = "Confirm Password"
                        autoCorrect = {false}
                        style = {textInput}
                        value={this.props.confirm} 
                        onChangeText = {value => this.props.typedValueRegister({prop:'confirm' , value})}
                        placeholderTextColor = 'gray'
                    />
          
                </View>
                <View style = {{...termsView, ...{width:width*0.7}}}>
                    <CheckBox
                        right
                        checked = {this.props.checked}
                        size = {30}
                        checkedColor = 'red'
                        onPress = {this.onCheckBoxCheck.bind(this)}

                    />
                    <TouchableOpacity
                        onPress = {this.onTermsTextPress.bind(this)}
                    >
                        <Text style = {forgotPasswordText}>
                            Terms & Conditions
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                
                  
                {this.signUpButtonOrSpinner()}
                
              
      
                </KeyboardAvoidingView>
                
            </ImageBackground>

          

                
        );
    }
}

const styles = {
    mainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10,
        opacity: 150,
        // tintColor: '#2d1b1b',
        tintColor: 'black',
    },
    headerContainer: {
        paddingBottom: 20,
        paddingTop: 20,
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F8F2F2'
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
        color: 'red'

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
    signUpButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    forgotPasswordText: {
        color: 'blue',
        fontSize: 12,
        textAlign: 'right',
        fontFamily: 'Roboto',
        fontStyle: 'italic'
    },
    termsView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}

const mapStateToProps = ({registerAction}) => {

    const {email, password, loading, error, confirm, checked, name, phone, insurance} =  registerAction;

    return  {email, password, loading, error, confirm, checked, name, phone, insurance};

};

export default connect (mapStateToProps, {typedValueRegister, registeringUser, checkedRegister})(registerPage);



