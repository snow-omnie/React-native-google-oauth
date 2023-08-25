import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../theme'
import notifee from '@notifee/react-native';
import MapView, { Geojson, Marker } from 'react-native-maps';

const HomeScreen = () => {

    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'Notification Snow',
            body: 'I am  notification',
            android: {
                channelId,
                smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',
                },
            },
        });
    }
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryPress = (countryName: any) => {
        setSelectedCountry(countryName);
    };

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="Display Notification" onPress={() => onDisplayNotification()} />
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 0,
                        longitude: 0,
                        latitudeDelta: 90,
                        longitudeDelta: 90,
                    }}
                >
                    {/* Add Geojson layers for country boundaries */}
                    {/* <Geojson
                        geojson={require('../constants/countries/AFG.geo.json')}
                        strokeColor="#FF5722"
                        fillColor={selectedCountry === 'CountryName' ? 'rgba(255, 87, 34, 0.5)' : 'transparent'}
                    /> */}

                    {/* Add markers for countries */}
                    <Marker
                        coordinate={{ latitude: 61.210817, longitude: 35.650072 }}
                        onPress={() => handleCountryPress('CountryName')}
                    />
                </MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    }
})

export default HomeScreen

