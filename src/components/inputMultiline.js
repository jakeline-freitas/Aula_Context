import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={50}
      // onChangeText={props.onChangeText} 
      // value={props.value}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={styles.container}>
      <UselessTextInput
        placeholder='Experiências'
        placeholderTextColor="#9183eb"
        multiline
        numberOfLines={5}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.uselessTextInput}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    uselessTextInput:{
        padding:10,
        height: '100%',
        width:"100%",
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
    }
})
export default UselessTextInputMultiline;