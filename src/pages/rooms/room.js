import {View, FlatList, SafeAreaView, Text} from 'react-native';
import React from 'react';
import styles from './room.sytle';
import RoomCard from '../../components/roomcard/roomcard';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button1 from '../../components/button/Button';
import Input from '../../components/input/input';
import Modal from 'react-native-modal';
import {showMessage, hideMessage} from 'react-native-flash-message';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import auth from "@react-native-firebase/auth";

const Room = ({navigation}) => {
  const [roomList, setRoomList] = useState([]);
  const [text, setText] = React.useState('');
  const [Visiblty, setVisiblty] = useState(false);

  function handleInputToggle() {
    setVisiblty(!Visiblty);
  }
  useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        if (!contentData) {
          return;
        }
        const parsedData = parseContentData(contentData || {});
        setRoomList(parsedData);
      });
  }, []);

  const renderRoomList = ({item}) => (
    <RoomCard
      rooms={item}
      onPress={() =>
        navigation.navigate('MsgPage', {
          id: item.id,
          roomName: item.roomName,
        })
      }
    />
  );

  const sendRoomName = () => {
    handleInputToggle();
    if (text == '') {
      showMessage({
        message: 'Oda Adı Giriniz',
        type: 'danger',
      });
      return;
    } else {
      showMessage({
        message: 'Oda Oluşturuldu',
        type: 'success',
      });

      const contentObject = {
        roomName: text,
      };

      database().ref('rooms/').push(contentObject);
    }
  };
  const Logout=()=>{
    auth().signOut();
    
    navigation.navigate("LoginPage");
  }
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={30}
          onPress={() => navigation.navigate('RoomPage')}
        />
        <Text style={styles.header_text}>Odalar</Text>
        <Icon name="sign-out" size={30} onPress={Logout}/>
        </View>
      <View style={styles.flat_container}>
        <FlatList numColumns={2} data={roomList} renderItem={renderRoomList} />
      </View>
      <Modal
        style={styles.modal}
        isVisible={Visiblty}
        onClose={handleInputToggle}>
        <View >
          <Input placeholder="Oda Adı Giriniz" onType={setText} />
          <Button1 text="Oda Oluştur" onPress={sendRoomName} />
        </View>
      </Modal>
      <FloatingButton onPress={handleInputToggle} />
    </SafeAreaView>
  );
};

export default Room;



