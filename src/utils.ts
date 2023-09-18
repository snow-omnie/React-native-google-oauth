import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import React, { BackHandler } from 'react-native';

const rnBiometrics = new ReactNativeBiometrics()


export const storeData = async (key: string, value: object) => {
    try {
        const jsonValue = JSON.stringify(value);
        console.log("key", key, "value", value)
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // saving error
        console.log(e)
    }
};

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue) {
            console.log("getData", jsonValue)
            return JSON.parse(jsonValue)
        } else {
            return null
        }
    } catch (e) {
        // error reading value
        console.log(e)
    }
};

export const signOut = async (navigation: any) => {
    const rnBiometrics = new ReactNativeBiometrics()

    try {
        AsyncStorage.clear()
        // rnBiometrics.deleteKeys()
        //     .then((resultObject) => {
        //         const { keysDeleted } = resultObject

        //         if (keysDeleted) {
        //             console.log('Successful deletion')
        //         } else {
        //             console.log('Unsuccessful deletion because there were no keys to delete')
        //         }
        //     })

        // BackHandler.exitApp();
    } catch (e) {

    }
}
export const checkBiometric = async () => {
    const { available, biometryType } = await rnBiometrics.isSensorAvailable()
    if (biometryType === BiometryTypes.Biometrics) {
        //do something face id specific
        if (available && biometryType === BiometryTypes.TouchID) {
            console.log('TouchID is supported')
        } else if (available && biometryType === BiometryTypes.FaceID) {
            console.log('FaceID is supported')
        } else if (available && biometryType === BiometryTypes.Biometrics) {
            console.log('Biometrics is supported')
            // rnBiometrics.createKeys()
            //     .then((resultObject) => {
            //         const { publicKey } = resultObject
            //         console.log("publicKey", publicKey)
            //         // sendPublicKeyToServer(publicKey)
            //     })
            rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
                .then((resultObject) => {
                    const { success } = resultObject

                    if (success) {
                        console.log('successful biometrics provided')
                    } else {
                        console.log('user cancelled biometric prompt')
                        BackHandler.exitApp();
                    }
                })
                .catch(() => {
                    console.log('biometrics failed')
                })


        } else {
            console.log('Biometrics not supported')
        }

    }

}