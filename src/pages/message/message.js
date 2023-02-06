import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import database from '@react-native-firebase/database';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import styles from "./message.style";
import  Icon  from 'react-native-vector-icons/FontAwesome';
import MsgCard from '../../components/msgcard/MsgCard';

import Input from '../../components/input/input';
import Button1 from '../../components/button/Button';

import {parseISO, formatDistance} from 'date-fns';
import parseContentData from '../../utils/parseContentData';



const Message = ({route,navigation}) => {

    const params = route.params;
console.log(route.params.roomName);
    const [text, setText] = React.useState('');
    const [messageList, setMessageList] = useState([]);
    
    useEffect(() => {
        database()
        .ref(`/rooms/${params.id}/messages`)
          .on('value', snapshot => {
            if (snapshot.val() !== null) {
              const parsedData = Object.keys(snapshot.val())
                .map(key => {
                  return {
                    id: key,
                    ...snapshot.val()[key],
                  };
                })
                .sort(function (a, b) {
                  return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
                });
              setMessageList(parsedData);
            }
          });
      }, []);
   

    const GetHeader = () => {
        return (
          <View style={styles.Header_Container}>
            <Text style={styles.Header_Text}>
              {route.params.roomName} room is created !
            </Text>
          </View>
        );
      };

      const Logout=()=>{
        auth().signOut();

        navigation.navigate("LoginPage");
      }

      const handleContent = ()=> {
        const userMail = auth().currentUser.email;
    
        const contentObject = {
          messages: text,
          writer: auth().currentUser.email.split('@')[0],
          date: new Date().toISOString(),
        };
    
        database().ref(`/rooms/${params.id}/messages`).push(contentObject);
      };
    
  return (
    <SafeAreaView style={styles.Container}>
          <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={30}
          onPress={() => navigation.navigate('RoomPage')}
        />
        <Text style={styles.header_text}>{route.params.roomName}</Text>
        <Icon name="sign-out" size={30} onPress={Logout}/>
      </View>
      <View style={{flex:1}}>
        <GetHeader/>
       
        <FlatList 
        data={messageList}
        renderItem={one=>
            (
                <View style={styles.messageContainer}>
                  <View style={styles.topContainer}>
                    <Text style={styles.writer}>{one.item.writer}</Text>
                    <Text style={styles.date}>
                      {formatDistance(parseISO(one.item.date), new Date(), {
                        addSuffix: true,
                      })}
                    </Text>
                  </View>
                  <Text style={styles.message}>{one.item.messages}</Text>
                </View>
              )}
        

        />
        
     
     
      </View>
        <View style={styles.input_container}>
          <Input placeholder="Yaz..." onType={setText} />
          <Button1 text="Gönder" onPress={handleContent} />
        </View>
    </SafeAreaView>
  );
};

export default Message;
