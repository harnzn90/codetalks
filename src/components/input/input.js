import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from "./input.style";

export default function Input({placeholder,onType,value,isSecure}) {
  return (
    <View>
        <TextInput
            placeholder={placeholder}
            style={styles.input}

            onChangeText={onType}
            value={value} secureTextEntry={isSecure}
        />
      
    </View>
  )
}