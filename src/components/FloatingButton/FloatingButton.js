import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './FloatingButton.style';

const FloatingButton=({onPress})=> {
    
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
}

export default FloatingButton;