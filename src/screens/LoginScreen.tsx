import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { storeData } from '../utils';
import { BottomStackParamList, NativeStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from '../theme';
export type Props = NativeStackScreenProps<BottomStackParamList, 'Home', 'MyStack'>;

const LoginScreen = ({ navigation }: Props) => {

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '416501924304-tdqpin7tv7b6vid5fnlot64m7u4nu83u.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: '', // [Android] specifies an account name on the device that should be used
        iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
        openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
        profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });

    const signIn = async () => {
        console.log("press")
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("userInfo", userInfo)

            if (userInfo) {
                let data = {
                    token: userInfo.idToken,
                    user: userInfo.user
                }
                storeData("userInfo", data)
                navigation.navigate("ProfileScreen")
            }
        } catch (error) {
            console.log("error", JSON.stringify(error))
            // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            //   // user cancelled the login flow
            // } else if (error.code === statusCodes.IN_PROGRESS) {
            //   // operation (e.g. sign in) is in progress already
            // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            //   // play services not available or outdated
            // } else {
            //   // some other error happened
            // }
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login to continue</Text>
            <Text>
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                // disabled={this.state.isSigninInProgress}
                />
            </Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: "800"
    },
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        rowGap: 10,
        justifyContent: 'center',
        backgroundColor: COLORS.background,

    }
})