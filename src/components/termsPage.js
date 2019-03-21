import React, {Component} from 'react';
import {View, Text} from 'react-native';



class termsPage extends Component () {

    render () {
        return (
            <View>
                <Text>
                    Kindly Provide terms and conditions
                </Text>
            </View>

        );
    }
}

const styles = {
    mainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default termsPage;