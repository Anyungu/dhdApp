import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {MapView} from 'expo';



class homePage extends Component () {

    render () {
        const {mainContainer, upperSection, lowerSection} = styles;
        return (
            <View style = {mainContainer}>
                <View style = {upperSection}>
                    <Text>
                        Kindly Provide terms and conditions
                    </Text>
                </View>

                <View style={lowerSection}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                
            </View>

        );
    }
}

const styles = {
    mainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    upperSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lowerSection: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default homePage;