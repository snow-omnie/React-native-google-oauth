import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapboxGL from "@rnmapbox/maps";
MapboxGL.setWellKnownTileServer('Mapbox');


MapboxGL.setAccessToken("pk.eyJ1Ijoic25vdzM3NTEiLCJhIjoiY2xqbzYzbXIwMDdsejNqczkweTBmc3ZwayJ9.I3Zk14HTkv12aYF5S_4rsw");
const defaultStyle = {
    version: 8,
    name: 'Land',
    sources: {
        map: {
            type: 'raster',
            tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            minzoom: 1,
            maxzoom: 19,
        },
    },
    layers: [
        {
            id: 'background',
            type: 'background',
            paint: {
                'background-color': '#f2efea',
            },
        },
        {
            id: 'map',
            type: 'raster',
            source: 'map',
            paint: {
                'raster-fade-duration': 100,
            },
        },
    ],
};
const PostDetails = () => {
    return (
        <View>
            <Text>PostDetails mapbox</Text>
            <View style={{
                height: 300,
                width: 300,
            }}>
                <MapboxGL.MapView style={styles.map} styleJSON={JSON.stringify(defaultStyle)} />
            </View>
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