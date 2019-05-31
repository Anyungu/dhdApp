import React, {Component} from 'react';
 
import {View, Text, Dimensions, TouchableOpacity, TextInput, Picker, ScrollView, StyleSheet, Image} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { typedValueAdminHospital, 
            saveHospital, 
            checkedLegalRegister,
            checkedMentalRegister,
            checkedPalliativeRegister,
            checkedMortuaryRegister,
            checkedSubstanceRegister,
            loggingOutUser,
            typedValueAdminModal
        } from '../actions';
import {connect} from 'react-redux';
import Modal from "react-native-modal";


class adminHospitalManagementPage extends Component {


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


    onCheckBoxClick(boxType) {

        const {legalCheck, mentalCheck, palliativeCheck, mortuaryCheck, substanceCheck} = this.props;
        if (boxType == "palliative") {

            this.props.checkedPalliativeRegister({palliativeCheck});

        }else if(boxType == "legal") {
            this.props.checkedLegalRegister({legalCheck});

        }else if (boxType == "mental") {
            this.props.checkedMentalRegister({mentalCheck});
            
        }else if (boxType == "mortuary") {
            this.props.checkedMortuaryRegister({mortuaryCheck});
            
        }else {
            this.props.checkedSubstanceRegister({substanceCheck});
            
        }
    }



    onSaveButtonPress () {
        const {ambulance, 
            box, 
            code, 
            level, 
            name, 
            lat, 
            long, 
            phone, 
            days, 
            hours,
            palliativeCheck,
            mortuaryCheck,
            mentalCheck,
            legalCheck,
            loadingCreate,
            substanceCheck,
            tok
        } = this.props;

        console.log("save button");
        console.log(substanceCheck);
        console.log(tok);
        this.props.saveHospital({ambulance, 
                box, 
                code, 
                level, 
                name, 
                lat, 
                long, 
                phone, 
                days, 
                hours,
                palliativeCheck,
                mortuaryCheck,
                mentalCheck,
                legalCheck,
                loadingCreate,
                substanceCheck,
                tok
                
            });
    }

    onDeleteButtonPress () {

    }

    render () {

        const {width, height} = Dimensions.get("window");



        const {mainContainer,
                upperSection,
                profileNameText,
                lowerSection,
                adminInputView,
                inputInputView,
                inputLabelView,
                labelText,
                textInput,
                saveDeleteView,
                saveView,
                deleteView,
                addAdminUserText,
                checkBoxView,
                serviceInputThreeView,
                serviceInputTwoView,
                serviceInputView,
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
                modalUpperSection,
                addAdminFieldsView,
                adminInputViewOne
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
                                            onChangeText = {value => this.props.typedValueAdminModall({prop:'uEmail' , value})}
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

 
                <ScrollView contentContainerStyle={lowerSection}
                        showsVerticalScrollIndicator={false}>

                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Name
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "Hospital Name"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.name} 
                                        onChangeText = {value => this.props.typedValueAdminHospital({prop:'name' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                        </View>

                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Code
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "Hospital Code"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.code} 
                                        onChangeText = {value => this.props.typedValueAdminHospital({prop:'code' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                        </View>


                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Code
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "Hospital Level"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.level} 
                                        onChangeText = {value => this.props.typedValueAdminHospital({prop:'level' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                        </View>


                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Phone
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "Hospital Phone"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.phone} 
                                        onChangeText = {value => this.props.typedValueAdminHospital({prop:'phone' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                        </View>

                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Box Office
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "Hospital Address"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.box} 
                                        onChangeText = {value => this.props.typedValueAdminHospital({prop:'box' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                        </View>

                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Latitude
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "Latitude"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.lat} 
                                        onChangeText = {value => this.props.typedValueAdminHospital({prop:'lat' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                        </View>

                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Longitude
                                    </Text>
                                </View>
                                <View style = {inputInputView}>
                                    <TextInput 
                                        secureTextEntry = {false}
                                        placeholder = "Longitude"
                                        autoCorrect = {false}
                                        style = {textInput}
                                        value={this.props.long} 
                                        onChangeText = {value => this.props.typedValueAdminHospital({prop:'long' , value})}
                                        placeholderTextColor = 'gray'
                                    />
                                </View>
                        </View>

                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Ambulance
                                    </Text>
                                </View>

                                <View style = {{...inputInputView, ...{alignItems:'center'}}}>

                                    <Picker
                                        selectedValue={this.props.ambulance}
                                        style={{height: 40, width: 120}}
                                        onValueChange={(value)=>
                                            this.props.typedValueAdminHospital({prop:'ambulance' , value})
                                         }
                                        >
                                        <Picker.Item label="True" value = {true} />
                                        <Picker.Item label="False" value= {false} />
                                    </Picker>
                                </View>

                                
                               
                        </View>

                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Days
                                    </Text>
                                </View>
                                <View style = {{...inputInputView, ...{alignItems:'center'}}}>
                                    <Picker
                                        selectedValue={this.props.days}
                                        style={{height: 40, width: 120}}
                                        onValueChange={(value) =>
                                            // this.setState({language: itemValue})
                                            this.props.typedValueAdminHospital({prop:'days', value})
                                        }
                                        >
                                        <Picker.Item label="every day" value="everyday" />
                                        <Picker.Item label="weekdays" value="weekdays" />
                                        <Picker.Item label="weekends" value="weekends" />
                                        
                                        
                                    </Picker>
                                </View>
                                
                               
                        </View>

                        <View style = {{...adminInputViewOne, ...{width:width*0.9}}}>
                                <View style = {inputLabelView}>
                                    <Text style = {labelText}>
                                        Hours
                                    </Text>
                                </View>

                                <View style = {{...inputInputView, ...{alignItems:'center'}}}>
                                    <Picker
                                         selectedValue={this.props.hours}
                                        style={{height: 40, width: 120}}
                                        onValueChange={(value) =>
                                            this.props.typedValueAdminHospital({prop:'hours', value})
                                        }
                                        >
                                        <Picker.Item label="24 Hours" value="24" />
                                        <Picker.Item label="6-9" value="6-9" />
                                        <Picker.Item label="8-4" value="8-4" />
                                    </Picker>
                                </View>

                                
                               
                        </View>

                        <View style = {{...serviceInputView, ...{width:width*0.9}}}>

                                <View style = {serviceInputThreeView}>

                                    <View style = {checkBoxView}>
                                        <CheckBox
                                            right
                                            checked = {this.props.palliativeCheck}
                                            size = {20}
                                            checkedColor = 'red'
                                            onPress = {this.onCheckBoxClick.bind(this, "palliative")}

                                        />
                                        <Text>
                                            palliative
                                        </Text>

                                    </View>

                                     <View style = {checkBoxView}>
                                        <CheckBox
                                            right
                                            checked = {this.props.mortuaryCheck}
                                            size = {20}
                                            checkedColor = 'red'
                                            onPress = {this.onCheckBoxClick.bind(this, "mortuary")}

                                        />
                                        <Text>
                                            mortuary
                                        </Text>

                                    </View>

                                     <View style = {checkBoxView}>
                                        <CheckBox
                                
                                            right
                                            checked = {this.props.legalCheck}
                                            size = {20}
                                            checkedColor = 'red'
                                            onPress = {this.onCheckBoxClick.bind(this, "legal")}

                                        />
                                        <Text>
                                            legal
                                        </Text>

                                    </View>





                                </View>

                                <View style = {serviceInputTwoView}>

                                 <View style = {checkBoxView}>
                                        <CheckBox
                                            right
                                            checked = {this.props.mentalCheck}
                                            size = {20}
                                            checkedColor = 'red'
                                            onPress = {this.onCheckBoxClick.bind(this, "mental")}

                                        />
                                        <Text>
                                            mental
                                        </Text>

                                    </View>

                                     <View style = {checkBoxView}>
                                        <CheckBox
                                            right
                                            checked = {this.props.substanceCheck}
                                            size = {20}
                                            checkedColor = 'red'
                                            onPress = {this.onCheckBoxClick.bind(this, "substance")}


                                        />
                                        <Text>
                                            substance
                                        </Text>

                                    </View>


                                </View>

                               

                                
                               
                        </View>

                </ScrollView>

                 <View style = {{...saveDeleteView, ...{width:width*0.8,
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

        );
    }
}


const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    mainContainer: {
        flex:1, 
        alignItems: 'center',

    },
    upperSection:{
        // alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#555264',
        // flexDirection: 'column',
        // paddingBottom: 3,
        paddingTop: height*0.06,
        // flex:1
    },
    
    lowerSection:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: Dimensions.get('window').height*0.05,
        width: Dimensions.get('window').width*0.9,
        // flex: 2.5
        
    },
    profileNameText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 22,
        paddingTop: 10,
    },
    adminInputViewOne: {
        // flex:1,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#76355B',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 7,
        paddingBottom:7,
        paddingTop: 7
    },
    serviceInputView: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#76355B',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 7,
    },
    serviceInputThreeView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    serviceInputTwoView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    checkBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 18,
    
    },
    textInput: {
        fontSize: 18,
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
    addAdminUserText: {
        fontFamily: 'Roboto',
        fontSize:  20,
        color: '#76355B',
        fontWeight: 'bold'
    },
    checkBoxText: {

        fontFamily: 'Roboto',
        fontSize:  16,

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
    labelTextSecond: {
        fontFamily: 'Roboto',
        fontSize: 15,
    
    },
    textInputSecond: {
        fontSize: 15,
        fontFamily: 'Roboto',
        color: 'red'

    },
});


const mapStateToProps = ({AdminHospitalManagementAction, AdminHomePageAction}) => {

    const {loadingCreate, 
            message, 
            name, 
            email, 
            box, 
            code, 
            phone,
            lat,
            long,
            ambulance,
            hours,
            days,
            palliativeCheck,
            mortuaryCheck,
            mentalCheck,
            legalCheck,
            substanceCheck,
            level
        } =  AdminHospitalManagementAction;
   
    const { uEmail, uConfirm, uPass, uOld} = AdminHomePageAction

    return  {loadingCreate, 
        message, 
        name, 
        email, 
        box, 
        code, 
        phone,
        lat,
        long,
        ambulance,
        hours,
        days,
        palliativeCheck,
        mortuaryCheck,
        mentalCheck,
        legalCheck,
        substanceCheck,
        level,
        uEmail,
        uConfirm,
        uPass,
        uOld
    };

};


export default connect (mapStateToProps, {typedValueAdminHospital,
            checkedLegalRegister,
            checkedMentalRegister,
            checkedMortuaryRegister,
            checkedPalliativeRegister,
            checkedSubstanceRegister,
            loggingOutUser,
            typedValueAdminModal,
            saveHospital})(adminHospitalManagementPage);