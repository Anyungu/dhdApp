
import React, {Component} from 'react';
import {TextInput} from 'react-native';


const Input = ({value, onChangeText, placeholder, secureTextEntry, placeholderTextColor}) => {

   
   
    
    const {inputstyle } = styles;

    return (
        
            <TextInput 
                secureTextEntry = {secureTextEntry}
                placeholder = {placeholder}
                autoCorrect = {false}
                style = {inputstyle}
                value={value} 
                onChangeText ={onChangeText} 
                placeholderTextColor = {placeholderTextColor}
            />


    );

};




const styles = {
    inputstyle: {
        lineHeight: 23,
        fontSize: 15,
        fontFamily: 'Roboto',
    },
};

export {Input}; 