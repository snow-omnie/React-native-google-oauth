import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import urls from '../constants/urls'
import axios from "axios"
import ProductCard from '../components/ProductCard'
import { MyListProps } from '../types'
import { COLORS } from '../theme'
const PostScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get("https://dummyjson.com/products")
                setProducts(data.products)
            })()
    }, [])
    return (
        <View style={{
            flex: 1,

        }}>
            <ScrollView >
                <View style={styles.cardContainer}>
                    {products.map((item: MyListProps) => {
                        return <ProductCard key={item.id} data={item} />
                    })}</View>
            </ScrollView>
        </View >
    )
}

export default PostScreen

const styles = StyleSheet.create({
    cardContainer: { flexDirection: "row", flexWrap: "wrap", }
})