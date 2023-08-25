import { View, Text, StyleSheet, PermissionsAndroid, Share, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Geolocation from 'react-native-geolocation-service';
import CustomButton from '../components/CustomButton';

const LocationScreen = () => {
    const [location, setLocation] = useState(false);

    // Function to get permission for location
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log('granted', granted);
            if (granted === 'granted') {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('You cannot use Geolocation');
                return false;
            }
        } catch (err) {
            return false;
        }
    };

    // function to check permissions and get Location
    const getLocation = () => {
        const result = requestLocationPermission();
        return result.then(res => {
            if (res) {
                return Geolocation.getCurrentPosition(
                    position => {
                        console.log("position", position.coords);
                        setLocation(position);
                        return position.coords
                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        setLocation(false);
                        return false
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });
    };

    useEffect(() => {
        getLocation()

        return () => {

        }
    }, [])

    const shareLocation = async () => {
        try {
            const mapUrl = `https://www.google.com/maps?q=${location.coords.latitude},${location.coords.longitude}`;
            const result = await Share.share({
                message:
                    `Hello my current location is : ${mapUrl}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    }
    return (
        <View>
            <Text>LocationScreen</Text>
            <CustomButton label="Get Location" style={styles.buttonStyle} onPress={() => getLocation()} />
            <Text>Latitude : {location?.coords?.latitude}</Text>
            <Text>Longitude : {location?.coords?.longitude}</Text>
            <CustomButton label="Share Location" style={styles.buttonStyle} onPress={shareLocation} />
        </View>
    )
}

export default LocationScreen

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#3244",
        marginTop: 20
    }
})