import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CloudImg from '../assets/icons/undraw_server_status_re_n8ln.svg';

const OnboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text style={styles.text}>CLOUDBIND</Text>
      </View>

      <CloudImg width="300" height="300" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 50,
    backgroundColor: '#000000'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#ad40af',
    borderRadius: 8,
    padding: 20,
    width: '95%'
  },
  buttonText: {
    flex: 3,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#ffffff'
  }
});

export default OnboardScreen;
