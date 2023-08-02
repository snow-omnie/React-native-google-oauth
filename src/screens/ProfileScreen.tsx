import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData, signOut } from '../utils'
import { BottomStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../theme';
export type Props = NativeStackScreenProps<BottomStackParamList, 'Home', 'MyStack'>;

const ProfileScreen = ({ navigation }: Props) => {
    const [user, setUser]: any = useState()


    useEffect(() => {
        (
            async () => {
                const x = await getData("userInfo")
                setUser(x);
            })()
    }, [])
    console.log("x", user)

    return (
        <View style={styles.container}>
            <View>
                <CustomButton onPress={() => signOut(navigation)} label="Sign out" style={styles.signOut} borderRadius={10} />
            </View>
            <Image
                // tintColor={focused ? "red" : "grey"}
                source={{ uri: user?.user?.photo }}
                style={styles.image}
            />
            <Text>{user?.user?.email}</Text>
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
        height: 80
    }
})
export default ProfileScreen