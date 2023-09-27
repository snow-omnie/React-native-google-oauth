import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { checkApplicationPermission, checkBiometric, getData, signOut } from '../utils'
import { BottomStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../theme';
import ReactNativeBiometrics from 'react-native-biometrics'
import { Button, color } from '@rneui/base';

const rnBiometrics = new ReactNativeBiometrics()

export type Props = NativeStackScreenProps<BottomStackParamList, 'Home', 'MyStack'>;

const ProfileScreen = ({ navigation }: Props) => {
    const [user, setUser]: any = useState()


    useEffect(() => {

        (async () => {
            let info = await getData("userInfo")
            if (info) {
                checkBiometric()
            }
        })()
    }, [])

    const accessPrmission = () => {
        console.log("checking");

        checkApplicationPermission().then((result) => console.log("result", result)
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <CustomButton onPress={() => signOut(navigation)} label="Sign out" style={styles.signOut} borderRadius={10} />
                <CustomButton onPress={() => accessPrmission()
                } label="check prmission" style={styles.permission} borderRadius={10} />

            </View>
            <Image
                // tintColor={focused ? "red" : "grey"}
                source={{ uri: user?.user?.photo }}
                style={styles.image}
            />
            <Text>{user?.user?.email}</Text>

            <Button onPress={() => console.log("hello world")}>Click Me</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        rowGap: 30
    },
    signOut: { backgroundColor: COLORS.primary4, paddingHorizontal: 10, },
    image: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: COLORS.black
    },
    permission: {
        backgroundColor: COLORS.primary_peach,
        color: COLORS.black,
        paddingHorizontal: 15
    }
})
export default ProfileScreen