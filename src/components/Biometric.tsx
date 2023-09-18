import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const Biometric = () => {
    const rnBiometrics = new ReactNativeBiometrics()

    useEffect(() => {

        (async () => {
            const { biometryType } = await rnBiometrics.isSensorAvailable()
            console.log(biometryType);

            if (biometryType === BiometryTypes.Biometrics) {
                //do something face id specific
                console.log("available");

            }
        })()
    }, [])




    return (
        <View>
            <Text>Biometric</Text>
        </View>
    )
}

export default Biometric