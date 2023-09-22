import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native'
import React, { useEffect } from 'react'
// import MapBox from '../components/MapBox'
import Biometric from '../components/Biometric'
import CustomButton from '../components/CustomButton'
import RNFetchBlob from 'rn-fetch-blob'
import FileDownload from '../components/FileDownload'

const PostDetails = () => {

    const buttonClick = async () => {
        console.log("click");
        RNFetchBlob
            .config({
                // add this option that makes response data to be stored as a file,
                // this is much more performant.
                fileCache: true,
            })
            .fetch('GET', 'https://www.pexels.com/photo/person-handing-a-cinema-tickets-8261823/', {
                //some headers ..
            })
            .then((res) => {
                // the temp file path
                console.log('The file saved to ', res.path())
            })
    }

    const showFile = async () => {
        console.log("show fille");

        const image_URL = 'https://www.pexels.com/photo/person-handing-a-cinema-tickets-8261823/'
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                //Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/image_' +
                    'snow',
                description: 'Image',
            },
        };
        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                //Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                Alert.alert('Image Downloaded Successfully.');
            });
    }


    return (
        <View>
            <Text>PostDetails mapbox</Text>
            {/* <MapBox /> */}
            <Biometric />
            <FileDownload />
            {/* <CustomButton label="Download" style={styles.buttonStyle} onPress={buttonClick} />

            <CustomButton label="download file" style={styles.buttonStyle} onPress={showFile} /> */}
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

    },
    buttonStyle: {}
});