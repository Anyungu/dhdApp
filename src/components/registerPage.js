
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class registerPage extends Component {

    
    render () {
        const {mainContainer} = styles;
        return (
            <View style = {mainContainer}>
                <Text>
                    Register...
                </Text>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

}

export default registerPage;