import React, {Component} from 'react';
import {MapView} from 'expo';



class mapPage extends Component {
    

    render() {
        
        
        return (
            <MapView 

                style = {{flex:1}}

                initialRegion={{
                latitude: -1.045559,
                longitude: 37.081669,
                latitudeDelta: 0.030,
                longitudeDelta: 0.0015,
                }}
                showsTraffic = {true}
                mapType = "terrain" 
            />

        );
    }

} 

export default mapPage;