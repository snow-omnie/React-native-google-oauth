import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../theme'

const CustomButton = (props: any) => {
    console.log("props", props)
    return (
        <TouchableOpacity style={{ ...styles.container, ...props.style, borderRadius: props.borderRadius ? props.borderRadius : 25 }} onPress={props.onPress}>
            <Text style={{ ...styles.text, color: props?.style?.color ? props.style.color : COLORS.black }}>{props.label}</Text>
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