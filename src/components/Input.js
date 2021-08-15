import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export function Input(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputText} placeholder={props.placeholder} placeholderTextColor="#9183eb" onChangeText={props.onChangeText} value={props.value}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: '90%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputText: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        borderRadius: 15,
        fontSize: 17,
        // borderColor: "#725dff",
        // borderWidth: 1,
        shadowColor: "#725dff",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,

    },
})