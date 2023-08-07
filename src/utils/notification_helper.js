import messaging from '@react-native-firebase/messaging';
import { AsyncStorage } from 'react-native';


async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        GetFCMToken();
    }
}

async function GetFCMToken() {
    let token = await AsyncStorage.getItem("fcmtoken");
    if (!token) {
        try {
            const fcmtoken = await messaging().getToken();
            if (fcmtoken) {
                console.log("fcm token", fcmtoken)
                await AsyncStorage.setItem("fcmtoken", token)

            }
        } catch (error) {
            console.log(error);
        }

    }
}