import { View, Text } from 'react-native'
import React from 'react'
import styles from "./MsgCard.style";

const MsgCard = ({msgData}) => {
  return (
    <View style={styles.container}>
        <View style={styles.info_container}>
            <Text style={styles.username}>textuser</Text>
            <Text style={styles.date}>10 dakika önce</Text>
        </View>
        <View style={styles.text_container}>
            <Text style={styles.text}>DENEME</Text>
        </View>
    </View>
  )
}

export default MsgCard;