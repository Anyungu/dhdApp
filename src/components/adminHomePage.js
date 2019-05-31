import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, Text, Dimensions, TouchableOpacity, TextInput, Image} from 'react-native';
import {typedValueAdmin, saveAdmin, loggingOutUser, typedValueAdminModal} from '../actions';
import {connect} from 'react-redux';
import Modal from "react-native-modal";


class adminHomePage extends Component {


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

    onSaveButtonPress () {

        const {email, password} = this.props;
        this.props.saveAdmin({email, password});
    }

    onDeleteButtonPress () {

    }

    onHospitalButtonPress () {
        const {tok, emailer} = this.props;
        Actions.adminHospitalManagementPage({tok, emailer});
    }

    render () {

        var {width, height} = Dimensions.get('window');
        const {mainContainer,
                upperSection,
                lowerSection,
                profileNameText,
                serviceCard,
                serviceCardText,
                addAdminUserText,
                addAdminUserView,
                adminInputView,
                inputInputView,
                inputLabelView,
                labelText,
                textInput,
                saveDeleteView,
                deleteView,
                saveView,
                addAdminFieldsView,
                addAdminCard,
                profileNameContainer,
                profilePictureContainer,
                profilePictureView,
                profileSection,
                modalContainer,
                modalLowerSection,
                modalLowerSectionCancel,
                modalLowerSectionOut,
                modalLowerSectionSave,
                modalMiddleSection,
                modalUpperSection
                    } = styles;

        return(
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
                                            Email
                                        </Text>
                                    </View>
                                    <View style = {inputInputView}>
                                        <TextInput 
                                            secureTextEntry = {false}
                                            placeholder = "email@gmail.com"
                                            autoCorrect = {false}
                                            style = {textInput}
                                            value={this.props.uEmail} 
                                            onChangeText = {value => this.props.typedValueAdminModal({prop:'uEmail' , value})}
                                            placeholderTextColor = 'gray'
                                        />
                                    </View>
                                </View>

                                <View style = {{...adminInputView, ...{width:width*0.7}}}>
                                    <View style = {inputLabelView}>
                                        <Text style = {labelText}>
                                            Old Pass
                                        </Text>
                                    </View>
                                    <View style = {inputInputView}>
                                        <TextInput 
                                            secureTextEntry = {true}
                                            placeholder = "**********"
                                            autoCorrect = {false}
                                            style = {textInput}
                                            value={this.props.uOld} 
                                            onChangeText = {value => this.props.typedValueAdminModal({prop:'uOld' , value})}
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
                                            value={this.props.uPass} 
                                            onChangeText = {value => this.props.typedValueAdminModal({prop:'uPass' , value})}
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
                                            value={this.props.uConfirm} 
                                            onChangeText = {value => this.props.typedValueAdminModal({prop:'uConfirm' , value})}
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
                                    }}
                                >
                                <Image
                                    style = {profilePictureView}
                                    source={require('../images/secondimage.jpg')}
                                    // resizeMode = "contain"
                                />

                            </TouchableOpacity>


                            <View style = {profileNameContainer}>
                                <Text style={profileNameText}>
                                    {this.props.emailer}
                                </Text>
                                <Text style={{...profileNameText, ...{fontSize:18}}}>
                                    Admin
                                </Text>

                            </View>

                    </View>

                </View>

                <View style = {lowerSection}>

                      <TouchableOpacity style = {{...serviceCard, ...{width:width*0.8}}} 
                         onPress = {this.onHospitalButtonPress.bind(this)}
                        >
                        
                       
                            <Text style={serviceCardText}>
                                HOSPITAL MANAGEMENT
                            </Text>
                    

                    </TouchableOpacity>

                    <View style = {{...addAdminCard, ...{width:width*0.85}}} >
                        <View style = {{...addAdminUserView, ...{width:width*0.85, 
                                                paddingLeft:width*0.02, 
                                                paddingBottom:height*0.02, 
                                                paddingTop:height*0.03}}}>
                            <Text style = {addAdminUserText}>
                                Add New Admin
                            </Text>

                        </View>
                        <View style = {{...addAdminFieldsView, ...{width:width*0.85}}}>
                            <View style = {{...adminInputView, ...{width:width*0.7}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Name
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "Name"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.name} 
                                        onChangeText = {value => this.props.typedValueAdmin({prop:'name' , value})}
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
                                        onChangeText = {value => this.props.typedValueAdmin({prop:'email' , value})}
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
                                        onChangeText = {value => this.props.typedValueAdmin({prop:'password' , value})}
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
                                        onChangeText = {value => this.props.typedValueAdmin({prop:'confirm' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                            </View>

                            

                            
                            
                        </View>

                        <View style = {{...saveDeleteView, ...{width:width*0.85,
                                            paddingBottom:height*0.02, 
                                            paddingTop:height*0.01}}}>
                            <TouchableOpacity style = {saveView}
                                onPress = {this.onSaveButtonPress.bind(this)}
                                >
                                <Text style = {addAdminUserText}>
                                    SAVE
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {deleteView}
                                onPress = {this.onDeleteButtonPress.bind(this)}
                                >
                                <Text style = {addAdminUserText}>
                                    DELETE
                                </Text>

                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
        </View>
                 

        );
    }
}

const styles  = {
    mainContainer:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    upperSection: {
        flex: 1,   
        backgroundColor: '#555264',
        justifyContent: 'flex-end',
    },
    serviceCard: {
        borderWidth: 0.5,
        borderColor: '#76355B',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor : "#0000",
    },
    addAdminCard: {
        borderWidth: 0.5,
        borderColor: '#76355B',
       
        backgroundColor : "#0000",
        // flex:1
    },
    serviceCardText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        textAlign: 'center'
    }, 

    lowerSection:{
        flex: 2.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: Dimensions.get('window').height*0.03
        
    },
    addAdminUserView: {
        borderBottomWidth: 0.5,
        borderColor: '#76355B',
        backgroundColor : "#0000" ,
        // flex:1
    },
    addAdminUserText: {
        fontFamily: 'Roboto',
        fontSize:  20
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
    saveDeleteView: {
        flexDirection:'row',
        // flex:1
    },
    saveView: {
        flex:1,
        justifyContent: 'center',
        paddingLeft: 20
    },
    deleteView: {
        flex:1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
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
    profileNameContainer: {
        justifyContent: 'center',
        flex:1
     },
     profileNameText: {
         fontFamily: 'Roboto',
         fontSize: 25
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
      
}


const mapStateToProps = ({AdminHomePageAction}) => {

    const {loadingCreate,name, email, password, message, confirm, uEmail, uConfirm, uPass, uOld} =  AdminHomePageAction;

    return  {loadingCreate, name, email, password, message, confirm, uEmail, uConfirm, uPass, uOld};

};


export default connect (mapStateToProps, {typedValueAdmin, saveAdmin, loggingOutUser, typedValueAdminModal})(adminHomePage);