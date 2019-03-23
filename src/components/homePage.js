import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';


class homePage extends Component {

    

    render () {
        var {width} = Dimensions.get('window');
        const {mainContainer, 
            iconSideView, 
            textSideView, 
            upperSection, 
            lowerSection, 
            serviceCard, 
            serviceCardText, 
            profilePictureView,
            profileNameContainer,
            profileNameText, 
            profilePictureContainer} = styles;
        return (
            <View style = {mainContainer}>
                <View style = {{...upperSection, ...{width:width, paddingLeft: width*0.2}}}>
                    <View style = {profilePictureContainer}>
                        <Image
                            style = {profilePictureView}
                            source={require('../images/secondimage.jpg')}
                            // resizeMode = "contain"
                        />

                    </View>

                    
                    <View style = {profileNameContainer}>
                        <Text style={profileNameText}>
                            John Doe
                        </Text>
                        <Text style={{...profileNameText, ...{fontSize:18}}}>
                            NHIF-1738
                        </Text>

                    </View>
                    
                </View>

                <View style = {lowerSection} >
                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}>
                        <View style={iconSideView}>
                            <FontAwesome name="heartbeat" size={32} color="#76355B" />
                        </View>
                        <View style = {textSideView}>
                            <Text style={serviceCardText}>
                                Palliative Care
                            </Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}>
                        <View style={iconSideView}>
                            <AntDesign name="gitlab" size={32} color="#76355B" />
                        </View>
                        <View style={textSideView}>
                            <Text style={serviceCardText}>
                                Mortuary Services
                            </Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}>
                        <View style={{...iconSideView, ...{paddingLeft: 9, paddingRight: 9}}}>
                            <Ionicons name="md-medical" size={32} color="#76355B" />
                        </View>
                        <View style = {textSideView}>
                            <Text style={serviceCardText}>
                                Substance Abuse
                            </Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}>
                        <View style={iconSideView}>
                            <MaterialCommunityIcons name="brain" size={32} color="#76355B" />
                        </View>
                        <View style={textSideView}>
                            <Text style={serviceCardText}>
                                Mental Health
                            </Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}>
                        <View style={{...iconSideView, ...{paddingLeft: 9, paddingRight: 9}}}>
                            <Octicons name="law" size={32} color="#76355B" />
                        </View>
                        <View style={textSideView}>
                            <Text style={serviceCardText}>
                                Legal Support
                            </Text>
                        </View>
                        

                    </TouchableOpacity>
                   
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
        alignItems: 'flex-end',
        backgroundColor: '#555264',
        flexDirection: 'row',
        paddingBottom: 15
    },
    lowerSection: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 40
    },
    serviceCard: {
        flexDirection: 'row',
        borderWidth: 0.1,
        borderColor: '#76355B',
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: 'black',
        shadowOpacity: 3,
        elevation: 3,
        backgroundColor : "#0000" 
    },
    serviceCardText: {
        fontSize: 15,
        fontFamily: 'Roboto',
        textAlign: 'center'
    }, 

    profilePictureView: {
        flex: 1,
        height: 80,
        width: 80,
        borderWidth: 4,
        borderRadius: 80/2,
    },
    profilePictureContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderRadius: 80/2,
        height: 80,
        width: 80,
        borderColor: 'white'
    },
    iconSideView: {

        borderColor: '#76355B',
        borderWidth: 1,
        borderRadius: 75,
        padding: 7,
        margin: 5,
        marginLeft: 15,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textSideView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileNameContainer: {
        paddingLeft: 10
    },
    profileNameText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 22,
        paddingTop: 10,
    }
}

export default homePage;