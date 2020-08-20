import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {

    let points = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 33.753746 + i * .001,
                longitude: -84.386330 + i * .001
            })
        } else {
            points.push({
                latitude: 33.753746 + i * .002,
                longitude: -84.386330 + i * .001
            })
        }
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 33.828130,
                longitude: -84.489220,
                latitudeDelta: .1,
                longitudeDelta: .1,
            }}
        >
            <Polyline />
        </MapView>
    )
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map;