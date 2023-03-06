import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SwitchComponent = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getSelectionMode == 1 ? '#ad40af' : '#e4e4e4',
          borderRadius: 10
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? '#e4e4e4' : '#ad40af',
            fontSize: 14
          }}>
          {' '}
          {option1}{' '}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getSelectionMode == 2 ? '#ad40af' : '#e4e4e4',
          borderRadius: 10
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? '#e4e4e4' : '#ad40af',
            fontSize: 14
          }}>
          {' '}
          {option2}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 44,
    width: '100%',
    backgroundColor: '#e4e4e4',
    borderRadius: 10
    // borderColor: '#ad40af'
  }
});

export default SwitchComponent;
