import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {hospitalFetching, typedValueModal,loggingOutUser} from '../actions';
import {connect} from 'react-redux';
import Modal from "react-native-modal";


class homePage extends Component {


    state = {
        modalVisible: false,
    };
    
    onSignOutButtonPress () {
      
      const {tok} = this.props;
      this.props.loggingOutUser({tok});
      this.setState({ modalVisible: false });

    }

    setModalVisible(visible) {
    this.setState({modalVisible: visible});
    }


    onPalliativePress () {
        const {tok} = this.props;
        this.props.hospitalFetching({prop:"palliative", tok});

    }

    onMortuaryPress () {
        const {tok} = this.props;
        this.props.hospitalFetching({prop:"mortuary", tok});

    }


    onSubstancePress () {
        const {tok} = this.props;
        this.props.hospitalFetching({prop:"mental", tok});

    }


    onMentalPress () {
        const {tok} = this.props;
        this.props.hospitalFetching({prop:"palliative", tok});

    }


    onLegalPress () {
        const {tok} = this.props;
        this.props.hospitalFetching({prop:"legal", tok}); 

    }


    

    render () {
        var {width, height} = Dimensions.get('window');
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
            profileSection,
            profilePictureContainer,
            modalContainer,
            modalLowerSection,
            modalLowerSectionCancel,
            modalLowerSectionOut,
            modalLowerSectionSave,
            modalMiddleSection,
            modalUpperSection,
            addAdminFieldsView,
            adminInputView,
            inputInputView,
            inputLabelView,
            labelText,
            textInput
        } = styles;
        
        
        return (
            <View style = {mainContainer}>

                <Modal
             
                  
                    isVisible={this.state.modalVisible}
                    // coverScreen = {false}
                    onBackdropPress={() => this.setState({ modalVisible: false })}
                  
                    >
                <View style = {{...modalContainer, ...{width:width*0.85, height:height*0.5}}}>
                    <View style = {{...modalUpperSection, ...{width:width*0.85}}}>
                        <Text style = {{fontFamily: 'Roboto', fontWeight:'bold', fontSize:22}}>
                            Profile
                        </Text>
                    </View>
                    <View style = {modalMiddleSection}>
                            <View style = {profilePictureContainer}>
                                <Image
                                    style = {profilePictureView}
                                    source={require('../images/secondimage.jpg')}
                                    // resizeMode = "contain"
                                />

                            </View>
                            <View style = {{...addAdminFieldsView, ...{width:width*0.85}}}>
                            <View style = {{...adminInputView, ...{width:width*0.7}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Insurance
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "insurance"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.insurance} 
                                        onChangeText = {value => this.props.typedValueModal({prop:'insurance' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                            </View>

                            <View style = {{...adminInputView, ...{width:width*0.7}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Email
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "email@gmail.com"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.email} 
                                        onChangeText = {value => this.props.typedValueModal({prop:'email' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                            </View>

                            <View style = {{...adminInputView, ...{width:width*0.7}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        password
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {true}
                                        placeholder = "**********"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.password} 
                                        onChangeText = {value => this.props.typedValueModal({prop:'password' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                            </View>

                            <View style = {{...adminInputView, ...{width:width*0.7}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        confirm 
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {true}
                                        placeholder = "**********"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.confirm} 
                                        onChangeText = {value => this.props.typedValueModal({prop:'confirm' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                            </View>

                            

                            
                            
                        </View>
                            
                    </View>
                    <View style = {modalLowerSection}>
                        <TouchableOpacity style = {modalLowerSectionOut}
                          
                            onPressIn = {this.onSignOutButtonPress.bind(this)}
                            >

                            <Text>
                                SIGN OUT
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style = {modalLowerSectionCancel}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                              }}>
                            
                            <Text>
                                CANCEL
                            </Text>
                        </TouchableOpacity>
                        <View style = {modalLowerSectionSave}>
                            <Text>
                                SAVE
                            </Text>

                        </View>

                    </View>
              
                    </View>
                </Modal>
                <View style = {{...upperSection, ...{width:width}}}>
                    <View style = {{...profileSection, ...{width:width}}}>

                           <TouchableOpacity style = {profilePictureContainer}
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        }}>
                                
                                <Image
                                    style = {profilePictureView}
                                    source={require('../images/secondimage.jpg')}
                                    // resizeMode = "contain"
                                />

                            </TouchableOpacity>

                    
                        <View style = {profileNameContainer}>
                            <Text style={profileNameText}>
                                John Doe
                            </Text>
                            <Text style={{...profileNameText, ...{fontSize:18}}}>
                                NHIF
                            </Text>

                        </View>
                        
                    </View>
                 
                    
                </View>

                <View style = {lowerSection} >
                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}} 
                        onPress = {this.onPalliativePress.bind(this)}>
                        <View style={iconSideView}>
                            <FontAwesome name="heartbeat" size={32} color="#76355B" />
                        </View>
                        <View style = {textSideView}>
                            <Text style={serviceCardText}>
                                Palliative Care
                            </Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}
                        onPress = {this.onMortuaryPress.bind(this)}>
                        <View style={iconSideView}>
                            <AntDesign name="gitlab" size={32} color="#76355B" />
                        </View>
                        <View style={textSideView}>
                            <Text style={serviceCardText}>
                                Mortuary Services
                            </Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}
                        onPress = {this.onSubstancePress.bind(this)}>
                        <View style={{...iconSideView, ...{paddingLeft: 9, paddingRight: 9}}}>
                            <Ionicons name="md-medical" size={32} color="#76355B" />
                        </View>
                        <View style = {textSideView}>
                            <Text style={serviceCardText}>
                                Substance Abuse
                            </Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}
                        onPress = {this.onMentalPress.bind(this)}>
                        <View style={iconSideView}>
                            <MaterialCommunityIcons name="brain" size={32} color="#76355B" />
                        </View>
                        <View style={textSideView}>
                            <Text style={serviceCardText}>
                                Mental Health
                            </Text>
                        </View>
                        

                    </TouchableOpacity>

                    <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}}
                        onPress = {this.onLegalPress.bind(this)}>
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
const {height, width} = Dimensions.get('screen');
const styles = {
    mainContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileSection: {
        flexDirection: 'row',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5

    },
    upperSection: {
        flex: 1,   
        backgroundColor: '#555264',
        justifyContent: 'flex-end',
    },
    lowerSection: {
        flex: 2.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    serviceCard: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#76355B',
        backgroundColor : "#0000" 
    },
    serviceCardText: {
        fontSize: 15,
        fontFamily: 'Roboto',
        textAlign: 'center'
    }, 

    profilePictureView: {
        flex: 1,
        height: 100,
        width: 100,
        borderRadius: 100/2,
    },
    profilePictureContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2,
        height: 100,
        width: 100,
        flex:1
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
       justifyContent: 'center',
       flex:1
    },
    profileNameText: {
        fontFamily: 'Roboto',
        fontSize: 25,
    },
    modalContainer: {
        alignItems:'center',
        justifyContent:'center',
        // marginTop: height*0.1,
        // marginLeft: width*0.075
    },
    modalUpperSection: {
        borderBottomWidth: 0.5,
        borderColor: '#76355B',
        paddingTop: 7,
        paddingBottom:7,
        paddingLeft: 10,
        // flex: 1
        backgroundColor: 'rgba(219, 225, 225, 0.97)'
    },
    modalMiddleSection: {
        // flex: 6,
        paddingTop: 7,
        paddingBottom: 7,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(219, 225, 225, 0.97)'
    },
    modalLowerSection: {
        // flex: 1.5,
        flexDirection: 'row',
        backgroundColor: 'rgba(219, 225, 225, 0.97)'
    },
    modalLowerSectionOut : {
        flex:1,
        alignItems:'center',
        paddingTop:7,
        paddingBottom: 7
    },
    modalLowerSectionCancel: {
        flex:1,
        alignItems:'center',
        paddingTop:7,
        paddingBottom: 7
    },
    modalLowerSectionSave: {
        flex:1,
        alignItems:'center',
        paddingTop:7,
        paddingBottom: 7
    },
    addAdminFieldsView: {
        borderBottomWidth: 0.5,
        borderColor: '#76355B',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // flex:4

    },
    adminInputView: {
        // flex:1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#76355B',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 7
    },
    inputLabelView: {
        flex:1,
        paddingLeft: 5
       
    },
    inputInputView:{
        flex:2,
        paddingLeft: 5
    },
    labelText: {
        fontFamily: 'Roboto',
        fontSize: 15,
    
    },
    textInput: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color: 'red'

    },

}

const mapStateToProps = ({homepageAction}) => {

  const {loading, hospitals, message, email, insurance, password, confirm} = homepageAction;

  return {loading, hospitals, message, email, insurance, password, confirm};

};

export default connect (mapStateToProps, {hospitalFetching, typedValueModal, loggingOutUser})(homePage);