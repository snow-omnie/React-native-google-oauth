import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MapScreen</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        // width: 300,
        // height: 400
        flex: 1
    },
    map: {
        // flex: 1
        ...StyleSheet.absoluteFillObject,
    }
})