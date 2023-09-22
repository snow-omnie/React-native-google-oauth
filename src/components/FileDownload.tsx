// How to Download an Image in React Native from any URL
// https://aboutreact.com/download-image-in-react-native/

// Import React
import React from 'react';

// Import Required Components
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    Image,
    Platform,
    Alert
} from 'react-native';

// Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';

const FileDownload = () => {
    const REMOTE_IMAGE_PATH =
        'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
    const checkPermission = async () => {

        // Function to check the platform
        // If iOS then start downloading
        // If Android then ask for permission

        if (Platform.OS === 'ios') {
            downloadImage();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message:
                            'FileDownload needs access to your storage to download Photos',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // Once user grant the permission start downloading
                    console.log('Storage Permission Granted.');
                    downloadImage();
                } else {
                    // If permission denied then show alert
                    Alert.alert('Storage Permission Not Granted');
                }
            } catch (err) {
                // To handle permission related exception
                console.warn(err);
            }
        }
    };

    const downloadImage = () => {
        // Main function to download the image

        // To add the time suffix in filename
        let date = new Date();
        // Image URL which we want to download
        let image_URL = REMOTE_IMAGE_PATH;
        // Getting the extention of the file
        let ext = getExtention(image_URL);
        ext = '.' + ext[0];
        // Get config and fs from RNFetchBlob
        // config: To pass the downloading related options
        // fs: Directory path where we want our image to download
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                // Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/image_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    ext,
                description: 'Image',
            },
        };
        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                // Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                Alert.alert('Image Downloaded Successfully.');
            });
    };

    const getExtention = filename => {
        // To get the file extension
        return /[.]/.exec(filename) ?
            /[^.]+$/.exec(filename) : undefined;
    };

    return (
        <View style={styles.container}>
            {/* <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    React Native Image Download Example
                </Text>
                <Text
                    style={{
                        fontSize: 25,
                        marginTop: 20,
                        marginBottom: 30,
                        textAlign: 'center',
                    }}>
                    www.aboutreact.com
                </Text>
            </View> */}
            {/* <TouchableOpacity>
                <Image
                    source={{
                        uri: REMOTE_IMAGE_PATH,
                    }}
                    style={{
                        width: '100%',
                        height: 100,
                        resizeMode: 'contain',
                        margin: 10
                    }}
                />
            </TouchableOpacity> */}
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.button}
                onPress={checkPermission}
            >
                <Text style={styles.button} onPress={checkPermission}>
                    Download Image
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default FileDownload;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#333',
    },
    button: {
        width: '80%',
        padding: 10,
        backgroundColor: 'orange',
        color: '#000',
        margin: 10,

    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 5,
    },
});