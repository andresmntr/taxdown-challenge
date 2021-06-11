import React from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

const TextInput = props => {
  return (
    <RNTextInput
      style={{...styles.inputText, ...props.style}}
      placeholderTextColor="#e2e1ed"
      {...props.props}
    />
  );
};

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: 'white',
    fontSize: 18,
    fontWeight: '600',
    width: '100%',
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#3D3A62',
    paddingLeft: 10,
    margin: 12,
  },
});

export {TextInput};
