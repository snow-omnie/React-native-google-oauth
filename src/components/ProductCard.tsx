import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MyListProps } from '../types'
import { Rating } from 'react-native-stock-star-rating'
import { COLORS } from '../theme'

const ProductCard: React.FC<MyListProps> = ({ data }) => {
    return (
        <TouchableOpacity style={styles.cardContainer}>
            <Image source={{ uri: data.images[0] }}
                style={styles.image} />
            <Text>{data.description.substring(0, 40)}....</Text>
            <View>
                <Rating stars={data.rating} maxStars={5} size={25} color={"green"} />
                {/* <Text style={styles.brand}>{data.brand}</Text> */}
            </View>
            <View style={styles.row}>
                <Text style={{ color: "green" }}>70% off</Text>
                <Text>${data.price}</Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    image: {
        // width: 100,
        height: 150,
        flex: 1,
        resizeMode: "contain",
    },
    brand: {},
    row: { display: "flex", flexDirection: "row", alignItems: "center", columnGap: 10 },
    cardContainer: { width: "48%", padding: 10, rowGap: 10, borderBottomColor: COLORS.border }
})
export default ProductCard