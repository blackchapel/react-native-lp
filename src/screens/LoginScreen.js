import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { BASE_URL, LOGIN_PATH } from '../utils/config';
import { GlobalStyle } from '../utils/globalstyle';
import GoogleImg from '../assets/images/misc/google.svg';
import LoginImg from '../assets/images/misc/login.svg';

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    alertTitle: '',
    isNotValidCredential: false,
    isValidEmail: true,
    isValidPassword: true
  });

  const checkEmail = (value) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (value.trim().length === 0) {
      setData({
        ...data,
        email: value,
        isValidEmail: true
      });
    } else if (reg.test(value) === true) {
      setData({ ...data, email: value, isValidEmail: true });
    } else {
      setData({ ...data, email: value, isValidEmail: false });
    }
  };

  const checkPassword = (value) => {
    if (value.trim().length === 0) {
      setData({
        ...data,
        password: value,
        isValidPassword: true
      });
    } else if (value.trim().length >= 6) {
      setData({
        ...data,
        password: value,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false
      });
    }
  };

  const login = async () => {
    try {
      if (
        data.email.length == 0 ||
        data.password.length == 0 ||
        !data.isValidEmail ||
        !data.isValidPassword
      ) {
        setData({
          ...data,
          alertTitle: 'Wrong Input',
          isNotValidCredential: true
        });
        return;
      }

      const url = `${BASE_URL}/${LOGIN_PATH}`;
      const res = await axios.post(url, {
        email: data.email,
        password: data.password
      });

      if (
        res.status == 200 &&
        res.data.data.token !== 'undefined' &&
        res.data.data.user !== 'undefined'
      ) {
        await AsyncStorage.setItem(
          'token',
          JSON.stringify(res.data.data.token)
        );
        await AsyncStorage.setItem('user', JSON.stringify(res.data.data.user));
        navigation.replace('AppStack');
      }
    } catch (error) {
      setData({
        ...data,
        alertTitle: 'Incorrect Credentials',
        isNotValidCredential: true
      });
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        navigation.navigate('AppStack');
      }
    };
    checkToken();
  });

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.image}>
        <LoginImg width="300" height="300" />
      </View>

      <View>
        <Text style={styles.loginText}>Login</Text>
      </View>

      <View style={styles.input}>
        <MaterialIcons
          name="alternate-email"
          size={22}
          color={GlobalStyle.foregroundColor}
        />
        <TextInput
          placeholder="Email ID"
          enterKeyHint="next"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => checkEmail(value)}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
        />
      </View>
      {data.isValidEmail ? null : (
        <Text style={styles.error}>Enter a valid email address</Text>
      )}

      <View style={styles.input}>
        <MaterialIcons
          name="vpn-key"
          size={22}
          color={GlobalStyle.foregroundColor}
        />
        <TextInput
          placeholder="Password"
          enterKeyHint="done"
          secureTextEntry={true}
          onChangeText={(value) => checkPassword(value)}
          ref={(input) => {
            this.secondTextInput = input;
          }}
        />
      </View>
      {data.isValidPassword ? null : (
        <Text style={styles.error}>
          Password must be minimum 6 characters long
        </Text>
      )}

      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate('SendOtp')}>
          <Text style={styles.registerButton}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={login} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginOptionsText}>
        <Text>---- or ----</Text>
      </View>

      <View style={styles.loginOptionsView}>
        <TouchableOpacity style={styles.loginOptionsButton}>
          <Text style={styles.loginOptionsButtonText}>Sign In with Google</Text>
          <GoogleImg />
        </TouchableOpacity>
      </View>

      <View style={styles.registerView}>
        <Text>New to the app? </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.registerButton}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      <Portal>
        <Dialog
          visible={data.isNotValidCredential}
          onDismiss={() => setData({ ...data, isNotValidCredential: false })}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title style={styles.alertTitle}>
            {data.alertTitle}
          </Dialog.Title>
          <Dialog.Actions>
            <Button
              onPress={() => setData({ ...data, isNotValidCredential: false })}>
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: GlobalStyle.backgroundColor,
    padding: 15
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: GlobalStyle.foregroundColor,
    fontWeight: 'bold',
    fontSize: 27,
    marginBottom: 15
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: GlobalStyle.foregroundColor,
    marginBottom: 10
  },
  loginButton: {
    marginVertical: 20,
    marginHorizontal: 8,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyle.primaryColor,
    borderRadius: 10
  },
  loginButtonText: {
    color: GlobalStyle.foregroundColor,
    fontWeight: 'bold'
  },
  loginOptionsText: {
    alignItems: 'center',
    marginBottom: 20
  },
  loginOptionsView: {
    width: '100%'
  },
  loginOptionsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: GlobalStyle.foregroundColor,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 8
  },
  loginOptionsButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#DD4D44',
    marginRight: 10
  },
  registerView: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center'
  },
  registerButton: {
    color: GlobalStyle.primaryColor,
    fontWeight: 'bold'
  },
  alertTitle: {
    textAlign: 'center'
  },
  error: {
    color: '#FF0000',
    fontSize: 14
  }
});

export default LoginScreen;
