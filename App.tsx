/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { enableLatestRenderer } from 'react-native-maps';
import {
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from './src/Navigators';
import messaging from '@react-native-firebase/messaging';
import { ForegroundListener, getDeviceToken, notificationListener, requestUserPermission } from './src/utils/notification_helper';
// import crashlytics from '@react-native-firebase/crashlytics';

enableLatestRenderer();

function App(): JSX.Element {

  useEffect(() => {


    let device = getDeviceToken()
    console.log("token", device);

    // requestUserPermission();
    notificationListener()
    // Set up foreground message listener
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('Alert Title', JSON.stringify(remoteMessage))
      console.log('A new foreground message arrived!', remoteMessage);
      // You can handle the message here
    });

    return unsubscribe; // Cleanup function to remove the listener when component unmounts
  }, [])

  // useEffect(() => {
  //   crashlytics().log('App mounted.');
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived in foreground mode', JSON.stringify(remoteMessage))
  //   })
  //   return unsubscribe
  // }, [])


  return (
    <NavigationContainer>
      <Navigators />
    </NavigationContainer>
  );
}


export default App;
