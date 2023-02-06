import { View, Text } from 'react-native';
import React from 'react';
import styles from "./sign.style"
import Input from '../../components/input/input';
import Button1 from '../../components/button/Button';
import auth from "@react-native-firebase/auth";
import { showMessage } from 'react-native-flash-message';
import { Formik } from 'formik';

const Sign = ({navigation}) => {

  const initialFormvalues = {
    usermail: '',
    password: '',
    repassword: '',
  };


  async function handleFormSubmit(formValues) {
    if (formValues.password != formValues.repassword) {
      showMessage({
        message: 'Şifreler Uyuşmuyor',
        type: 'danger',
      });
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı Oluşturuldu',
        type: 'success',
      });
      navigation.navigate("LoginPage")
    } catch (error) {
      showMessage({
        message: error.code,
        type: 'info',
      });
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
            <Input
              isSecure
              placeholder="Şifre Giriniz Tekrar Giriniz"
              value={values.repassword}
              onType={handleChange('repassword')}
            />
            <Button1 text="Kayıt Ol" onPress={handleSubmit} />
            <Button1
              text="Geri"
              theme="secondary"
              onPress={() => navigation.goBack()}
            />
          </>
        )}
      </Formik>

    </View>
  )
}

export default Sign
