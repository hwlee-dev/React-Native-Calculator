import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface buttonProps {
  text: string;
  customStyle?: any;
  handlePress: any;
}

const button: React.FC<buttonProps> = ({
  text,
  handlePress,
  customStyle = {},
}) => {
  const buttonStyle = Object.prototype.hasOwnProperty.call(
    customStyle,
    'button',
  )
    ? [styles.button, customStyle.button]
    : styles.button;

  const textStyle = Object.prototype.hasOwnProperty.call(customStyle, 'text')
    ? [styles.text, customStyle.text]
    : styles.text;

  return (
    <TouchableOpacity style={buttonStyle} onPress={handlePress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default button;
