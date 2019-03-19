
import React, {Component} from 'react';
import {View, Text} from 'react-native';




class landingPage extends Component {

    
    render() {

        const {MainContainer, logoText, belowLogoText} = styles;
        
        return (
            <View style= {MainContainer}>

                 <Text style = {logoText}>
                     DHD
                 </Text>

                 <Text style = {belowLogoText}>
                     Access your health faster
                 </Text>

            </View>

                
        );
    }
}

const styles = {
    MainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    belowLogoText: {
        fontSize: 26,
        textAlign: 'center',
    },
}



export default landingPage;

