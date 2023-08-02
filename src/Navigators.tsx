
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomStackParamList } from './types';
import PostScreen from './screens/PostScreen';
import { Icon } from '@rneui/themed';
import ProfileScreen from './screens/ProfileScreen';
import PostDetails from './screens/PostDetails';
import { Image, StyleSheet, View } from 'react-native';
import imagePaths from './constants/imagePaths';
import { COLORS } from './theme';
const BottomTab = createBottomTabNavigator<BottomStackParamList>();

const BottomTabs = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false
        }}>
            <BottomTab.Screen name='Profile' component={ProfileScreen} options={
                {
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image

                                // tintColor={focused ? "#1e90ff14" : "grey"
                                // }
                                source={imagePaths.Icon1}
                                style={styles.icon}
                            />)
                    }
                }
            } />
            <BottomTab.Screen name='Post' component={PostScreen} options={
                {
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.centerIcon}>
                                <Image
                                    // tintColor={focused ? "red" : "grey"}
                                    source={imagePaths.Icon2}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        )
                    }

                }
            } />
            <BottomTab.Screen name='PostDetails' component={PostDetails} options={
                {
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                // tintColor={focused ? "red" : "grey"}
                                source={imagePaths.Icon3}
                                style={styles.icon}
                            />)
                    }
                }
            } />
        </BottomTab.Navigator>
    )
}


const Navigators = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Start' component={StartScreen} options={{ statusBarHidden: true, }} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='ProfileScreen' component={BottomTabs} />

        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 25, height: 25
    },
    centerIcon: {
        padding: 25,
        borderRadius: 50,
        backgroundColor: COLORS.primary4
    }
})
export default Navigators