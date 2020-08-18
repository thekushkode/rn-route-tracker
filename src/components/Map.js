import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 33.753746,
                longitude: -84.386330,
                latitudeDelta: .2,
                longitudeDelta: .2,
            }}
        />
    )
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map;