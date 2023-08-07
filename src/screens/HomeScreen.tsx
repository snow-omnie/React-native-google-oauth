import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../theme'
import notifee from '@notifee/react-native';

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


    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="Display Notification" onPress={() => onDisplayNotification()} />
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

