import React from 'react';
import { TouchableOpacity,Text} from 'react-native';
import styles from "./Button.style";

const Button1 =({text,onPress,theme="primary"})=>{
    return(
        <TouchableOpacity style= {styles[theme].container} onPress={onPress}>
            <Text style={styles[theme].title}>{text}</Text>
        </TouchableOpacity>
    )
};

export default Button1;