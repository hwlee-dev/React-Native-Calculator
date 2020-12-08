import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface buttonProps {
  text: string;
  fontStyle: any;
  buttonStyle: any;
  pressFunction: any;
}

const button: React.FC<buttonProps> = (props) => {
  return (
    <TouchableOpacity style={props.buttonStyle} onPress={props.pressFunction}>
      <Text style={props.fontStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default button;
