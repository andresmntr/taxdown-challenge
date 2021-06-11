import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{...styles.buttonBody, ...props.style}}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#0cdc5a',
    width: '100%',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export {Button};
