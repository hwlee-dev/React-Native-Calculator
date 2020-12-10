import React from 'react';
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputSelectionChangeEventData,
} from 'react-native';
import styles from './styles';

interface displayProps {
  expression: string;
  result: string;
  style: any;
  handleSelectionChange: (
    event: NativeSyntheticEvent<TextInputSelectionChangeEventData>,
  ) => void;
}

/**
 * 계산기 표현부
 */
const Display: React.FC<displayProps> = (props: displayProps) => {
  return (
    <View style={[styles.container, props.style?.container]}>
      <TextInput
        // onChangeText={(text) => onChangeText(text)}
        value={props.expression}
        style={[styles.input, props.style?.input]}
        onSelectionChange={(event) => props.handleSelectionChange(event)}
        multiline={true}
        showSoftInputOnFocus={false}
      />
      <Text style={[styles.result, props.style?.result]}>{11111111111}</Text>
    </View>
  );
};

export default Display;
