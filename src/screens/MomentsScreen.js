import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const MomentsScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text>Moments Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000'
  }
});

export default MomentsScreen;
