import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
// import MapBox from '../components/MapBox'
import Biometric from '../components/Biometric'

const PostDetails = () => {


    return (
        <View>
            <Text>PostDetails mapbox</Text>
            {/* <MapBox /> */}
            <Biometric />
        </View>
    )
}

export default PostDetails
const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1,

    }
});