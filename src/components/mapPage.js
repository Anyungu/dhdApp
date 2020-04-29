import React, {Component} from 'react';
import {MapView} from 'react-native-maps';



class mapPage extends Component {
    

    render() {

        const {lat, long} = this.props;
        
        console.log(lat);
        console.log(long);
        
        return (
            <MapView 

                style = {{flex:1}}

                initialRegion={{
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.030,
                longitudeDelta: 0.0015,
                }}
                showsUserLocation = {true}
                showsTraffic = {true}
                mapType = "terrain" 
            >
                <Marker

                    coordinate={{latitude: lat,
                    longitude: long}}
                    title={"title"}
                    description={"description"}
                
                />



            </MapView>

        );
    }

} 

export default mapPage;