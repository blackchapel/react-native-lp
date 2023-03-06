import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GameCardComponent = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <View style={styles.body}>
        <Image source={data.poster} style={styles.image} />

        <View>
          <Text> {data.subtitle} </Text>
          <Text style={styles.gameText}> {data.title} </Text>
        </View>
      </View>

      {data.isFree == 'Yes' && (
        <TouchableOpacity style={styles.button}>
          <Text>Play</Text>
        </TouchableOpacity>
      )}

      {data.isFree == 'No' && (
        <TouchableOpacity style={styles.button}>
          <Text> {data.price} </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 10
  },
  button: {
    backgroundColor: '#0aada8',
    paddingHorizontal: 15,
    paddingVertical: 7.5,
    borderRadius: 10
  },
  gameText: {
    textTransform: 'uppercase'
  }
});

export default GameCardComponent;
