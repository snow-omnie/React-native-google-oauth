import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { COLORS } from '../theme'

const CustomButton: FC<{ style?: object, borderRadius?: number, onPress?: any, label?: string }> = ({ style, borderRadius, onPress, label }) => {
    return (
        <TouchableOpacity style={{ ...styles.container, ...style, borderRadius: borderRadius ? borderRadius : 25 }} onPress={onPress}>
            <Text style={{ ...styles.text, color: style?.color ? style.color : COLORS.black }}>{label}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {},
    text: {
        fontSize: 20,
        paddingVertical: 10,
        textAlign: 'center'

    }
})
export default CustomButton