import React from 'react';
import { View } from 'react-native';
import Key from '../../atoms/Key';
import Row from '../../atoms/Row';
import styles from './styles';

interface keypadProps {
  handlePress: (type: string, value: string) => void;
}

/**
 * 계산기 키패드
 * @param props handlePress : 터치 이벤트 처리 함수
 */
const Keypad = (props: keypadProps) => {
  const handlePress = (type: string, value = '') => {
    props.handlePress(type, value);
  };

  return (
    <View style={styles.container}>
      <Row>
        <Key type='clear' text='C' handlePress={() => handlePress('clear')} />
        <Key
          type='operator'
          text='⁺∕₋'
          handlePress={() => handlePress('posneg')}
        />
        <Key
          type='operator'
          text='%'
          handlePress={() => handlePress('percentage')}
        />
        <Key
          type='operator'
          text='÷'
          handlePress={() => handlePress('operator', '/')}
        />
      </Row>

      <Row>
        <Key
          type='normal'
          text='7'
          handlePress={() => handlePress('number', '7')}
        />
        <Key
          type='normal'
          text='8'
          handlePress={() => handlePress('number', '8')}
        />
        <Key
          type='normal'
          text='9'
          handlePress={() => handlePress('number', '9')}
        />
        <Key
          type='operator'
          text='×'
          handlePress={() => handlePress('operator', '*')}
        />
      </Row>

      <Row>
        <Key
          type='normal'
          text='4'
          handlePress={() => handlePress('number', '4')}
        />
        <Key
          type='normal'
          text='5'
          handlePress={() => handlePress('number', '5')}
        />
        <Key
          type='normal'
          text='6'
          handlePress={() => handlePress('number', '6')}
        />
        <Key
          type='operator'
          text='－'
          handlePress={() => handlePress('operator', '-')}
        />
      </Row>

      <Row>
        <Key
          type='normal'
          text='1'
          handlePress={() => handlePress('number', '1')}
        />
        <Key
          type='normal'
          text='2'
          handlePress={() => handlePress('number', '2')}
        />
        <Key
          type='normal'
          text='3'
          handlePress={() => handlePress('number', '3')}
        />
        <Key
          type='operator'
          text='＋'
          handlePress={() => handlePress('operator', '+')}
        />
      </Row>

      <Row>
        <Key
          type='double'
          text='0'
          handlePress={() => handlePress('number', '0')}
        />
        <Key
          type='normal'
          text='.'
          handlePress={() => handlePress('number', '.')}
        />
        <Key type='equal' text='＝' handlePress={() => handlePress('equal')} />
      </Row>
    </View>
  );
};

export default Keypad;
