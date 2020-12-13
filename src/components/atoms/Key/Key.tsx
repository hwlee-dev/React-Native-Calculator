import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface keyProps {
  text?: string;
  type?: 'normal' | 'double' | 'operator' | 'clear' | 'equal';
  handlePress: (event: GestureResponderEvent) => void;
}

const Key = ({ text = 'Key', type = 'normal', handlePress }: keyProps) => {
  return (
    <TouchableOpacity style={styles[type].key} onPress={handlePress}>
      <Text style={styles[type].text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Key;
