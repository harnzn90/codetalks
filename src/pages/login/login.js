import {View, Text} from 'react-native';
import React from 'react';
import Input from '../../components/input/input';
import styles from './login.style';
import Button1 from '../../components/button/Button';
import auth from "@react-native-firebase/auth";
import {showMessage} from 'react-native-flash-message';
import { Formik } from 'formik';
import database from "@react-native-firebase/database";

const initialFormvalues = {
    usermail: '',
    password: '',
  };


export default function Login({navigation}) {

    const handleRoomPage=()=>{
        navigation.navigate("RoomPage")
      }

    async function handleFormSubmit(formValues) {
        if(formValues.usermail==null)
         {  showMessage({
           message: "Eksik Bilgi",
           type: "warning",
         });}
         try {
           await auth().signInWithEmailAndPassword(
             formValues.usermail,
             formValues.password,
           ); 
           showMessage({
             message: "Giriş Yapıldı",
             type: 'success',
           });
           handleRoomPage();
         } catch (error) {
          
           showMessage({
             message: authErrorMessageParser(error.code),
             type: 'info',
           });
           console.log(error);
         }
       }

   

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>CodeTalks</Text>
      </View>

      <Formik initialValues={initialFormvalues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
          <View style={styles.input_container}>

            <Input
              placeholder="E-posta Giriniz"
              value={values.usermail}
              onType={handleChange('usermail')}
              />
            <Input
              isSecure
              placeholder="Şifre Giriniz"
              value={values.password}
              onType={handleChange('password')}
              />
            <Button1 text="Giriş Yap" onPress={handleSubmit} />
            <Button1
              text="Kayıt Ol"
              theme="secondary"
              onPress={() => navigation.navigate('SignPage')}
              />
             
              </View>
          </>
        )}
      </Formik>

     
    </View>
  );
}
