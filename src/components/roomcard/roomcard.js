import {View, Text, Dimensions, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

const RoomCard = ({rooms,onPress}) => {
  const size = Dimensions.get('window');
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          width: size.width / 2.5,
          alignItems: 'center',
          height: size.width / 2.5,
          margin: 15,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'coral',
            fontSize: 25,
          }}>
          
          {rooms.roomName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RoomCard;
