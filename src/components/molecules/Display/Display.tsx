import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../../../styles/common';
import styles from './styles';

interface displayProps {
  displayValue: string;
}

/**
 * 계산기 디스플레이
 * @param param0 displayValue : 화면에 표시될 값 포함
 */
const Display = ({ displayValue }: displayProps) => {
  /**
   * 폰트 사이즈 변경
   */
  const formatFontSize = () => {
    const value = displayValue;

    if (value.length < 7) {
      return [styles.text, { fontSize: fonts.xl }];
    } else if (value.length < 9) {
      return [styles.text, { fontSize: fonts.lg }];
    } else {
      return [styles.text, { fontSize: fonts.md * 1.2 }];
    }
  };

  /**
   * 천 단위 콤마
   * @param value : 화면에 표시될 값
   */
  const formatThousand = (value: string): string => {
    const num = value.split('.');
    const regex = /\B(?=(\d{3})+(?!\d))/g;

    if (num.length === 1) {
      return num.toString().replace(regex, ',');
    } else {
      return `${num[0].toString().replace(regex, ',')}.${num[1]}`;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={formatFontSize()}>{formatThousand(displayValue)}</Text>
    </View>
  );
};

export default Display;
