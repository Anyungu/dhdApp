import React, {Component} from 'react';
import {FlatList, View, Text, Dimensions, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';



class serviceFacultiesPage extends Component {

    onGetDirectionButtonPress (lat, long) {
        Actions.mapPage({lat, long});
    }

    renderTimeItem ({item}) {
        const {hospitalDetailsText} = styles;
        
        return (
            <Text style = {hospitalDetailsText}>
                {item.time}
            </Text>

        );
       

    }

    renderDayItem ({item}) {
        const {hospitalDetailsText} = styles;
        
        return (
            <Text style = {hospitalDetailsText}>
                {item.day}
            </Text>

        );
       

    }

    
    renderItem ({item}) {

    const {width} = Dimensions.get('window');
    const {hospitalCard, 
            informationSide, 
            buttonSide, 
            getDirectionButton, 
            getDirectionButtonText,
            nameSection,
            hospitalDetailsText,
            hospitalNameText,
            belowNameSection
        } = styles;
     return (

        <View style = {{...hospitalCard, ...{width:width*0.9}}}>
            <View style = {nameSection}>
                <Text style = {hospitalNameText}>
                    {item.hospitalName}
                </Text>

            </View>
            <View style = {belowNameSection}>
            <View style = {informationSide}>
                
                <Text style = {hospitalDetailsText}>
                    {item.phoneContact}
                </Text>
                <FlatList 
                    data={item.periodTime}
                    renderItem={item => this.renderTimeItem(item)} 
                    listKey = {(item) => item.periodId.toString()} 
                    keyExtractor = {(item) => item.periodId.toString()} 
                />
                 <FlatList 
                    data={item.periodDay}
                    renderItem={item => this.renderDayItem(item)} 
                    listKey={(item) => item.periodId.toString()} 
                    keyExtractor = {(item) => item.periodId.toString()} 
                    
                />
                
                
            </View>

            <View style = {buttonSide}>

                <TouchableOpacity
                    style = {getDirectionButton}
                    onPress = {this.onGetDirectionButtonPress.bind(this, item.latitude, item.longitude)}
                    >
                    
                    <Text style = {getDirectionButtonText}>
                        Get Direction
                    </Text>
                </TouchableOpacity>

            </View>

            </View>
           

            
        </View>

     );

    }

    // renderItem = ({item}) => (
        
        
    //         <View>
    //             <View>
    //                 <Text>
    //                     {item.hospitalCode}
    //                 </Text>
    //                 <Text>
    //                     {item.hospitalName}
    //                 </Text>
    //             </View>
    //             <View>

    //             </View>
    //         </View>

        
        
    //   );

    render () {
        
        const {width} = Dimensions.get('screen');
        const {hospitals} = this.props;
        const {mainContainer, 
                upperSection, 
                lowerSection, 
                upperSectionFooter, 
                upperSectionHeader, 
                upperSectionFooterText, 
                upperSectionHeaderText,
                upperSectionFooterLeft,
                upperSectionFooterRight
            } = styles;
        return (
            <View style = {mainContainer}>
                <View style = {{...upperSection, ...{width:width}}}>
                    <View style = {upperSectionHeader}>
                        <Text style = {upperSectionHeaderText}>
                            Hospitals
                        </Text>
                    </View>

                    <View style = {upperSectionFooter}>
                        <View style = {upperSectionFooterLeft}>
                        <Text style ={upperSectionFooterText} >
                            WITH AMBULANCE
                        </Text>
                            
                        </View>
                        
                        <View style ={upperSectionFooterRight}>
                            <Text style = {upperSectionFooterText} >
                                WITHOUT AMBULANCE
                            </Text>

                        </View>
                   
                    </View>

                </View>
                <ScrollView contentContainerStyle={lowerSection}
                    showsVerticalScrollIndicator={false}>
                    
                        <FlatList 
                            data={hospitals}
                            renderItem={item => this.renderItem(item)} 
                            keyExtractor={(item) => item.hospitalCode.toString()} 
                        />
                </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1, 
        alignItems: 'center',
    },
    upperSection:{
        alignItems: 'center',
        backgroundColor: '#555264',
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom:5
    },
    upperSectionHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    upperSectionFooter: {
        flexDirection: 'row',
        paddingTop: 10
    },
    lowerSection:{
      
        alignItems: 'center',
    
        
    },
    upperSectionFooterLeft: {
        flex:1,
        alignItems: 'center'
    },
    upperSectionFooterRight: {
        flex:1,
        alignItems: 'center'
    },
    upperSectionFooterText: {
        fontSize: 15,
        fontFamily:'Roboto',
        color: 'white'
        
    },
    upperSectionHeaderText: {
        fontSize: 24,
        fontFamily:'Roboto',
        color: 'white'
    },
    hospitalCard: {
        
        borderWidth: 0.5,
        borderColor: '#76355B',
        borderRadius: 10,
        marginTop: 7,
        marginBottom: 7,
        padding: 10,
      
    },
    nameSection: {
        padding:4
    },
    belowNameSection: {
        flexDirection: 'row',
        padding:4
    },
    informationSide: {
        flex: 2,
        justifyContent: 'center'
    },
    buttonSide: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    getDirectionButton: {
        alignItems: 'center',
        backgroundColor: '#E68100',
        padding:5,
        borderRadius: 8,
    },
    getDirectionButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Roboto'
    },
    hospitalNameText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    hospitalDetailsText: {
        fontSize: 17,
    }

});

    
    const mapStateToProps = ({homepageAction}) => {

    const {hospitals} = homepageAction;

    return {hospitals};

};

export default connect(mapStateToProps, {})(serviceFacultiesPage);

