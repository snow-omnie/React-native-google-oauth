import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { COLORS } from '../theme'
import { BottomStackParamList, NativeStackParamList } from '../types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import { getData } from '../utils';
export type Props = NativeStackScreenProps<NativeStackParamList, 'ProfileScreen', 'MyStack'>;

const StartScreen = ({ navigation }: Props) => {

    useLayoutEffect(() => {
        (
            async () => {
                const x = await getData("userInfo")
                if (x.user) {
                    navigation.navigate("ProfileScreen")
                }
            })()
    }, [])
    return (
        // <View style={styles.container}>
        //     <Text>Welcome</Text>
        //     <CustomButton label={"GET STARTED"} onPress={() => navigation.navigate("Login")} style={{ color: COLORS.white, backgroundColor: COLORS.primary_purple }} />
        // </View>
        <View style={styles.container}>
            <Text style={styles.header}>Get Started</Text>
            {/* <Text> */}
            <CustomButton label={"Continue"} onPress={() => navigation.navigate("Login")} style={{ color: COLORS.white, backgroundColor: COLORS.primary_purple }} />
            {/* </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center",
    },
    container: {
        flex: 1,
        // alignItems: "center",
        padding: 20,
        rowGap: 10,
        justifyContent: 'center',
        backgroundColor: COLORS.background,

    }
})

export default StartScreen

