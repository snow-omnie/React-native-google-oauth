import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native';

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


export const notificationListener = async () => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
                setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
        });
}

export const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);

}
export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

export const ForegroundListener = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('A new foreground message arrived!', remoteMessage);
        Alert(remoteMessage)
        // You can handle the message here
    });
    return unsubscribe
}