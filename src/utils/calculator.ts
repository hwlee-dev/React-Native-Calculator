interface paramType {
  type: string;
  value: string;
  operator: string;
  previousValue: string;
  currentValue: string;
}

/**
 * 계산기 처리
 * @param params => paramType 값
 */
const calculator = (params: paramType) => {
  const { type } = params;
  const initialValue = {
    displayValue: '0',
    previousValue: '',
    currentValue: '0',
    operator: '',
  };

  let result = {};

  switch (type) {
    case 'number':
      result = handleNumber(params);
      break;
    case 'operator':
      result = handleOperator(params);
      break;
    case 'percentage':
      result = handlePercentage(params);
      break;
    case 'posneg':
      result = handlePosNeg(params);
      break;
    case 'equal':
      result = handleEqual(params);
      break;
    case 'clear':
      result = initialValue;
      break;
    default:
      break;
  }

  return result;
};

/**
 * 10자리 이상의 숫자 포맷
 * @param value => 포맷할 값
 */
const formatDisplayValue = (value: string) => {
  const num = parseFloat(value);
  if (num > 999999999 || value.split('e').length > 1) {
    return num.toExponential(5).split('+').join('');
  } else {
    return value;
  }
};

/**
 * 숫자 입력 처리
 * @param params => paramType 값
 */
const handleNumber = (params: paramType) => {
  const { value, currentValue } = params;

  if (currentValue.split('.').join('').length === 9) {
    return {};
  }

  if (value === '.') {
    return currentValue.indexOf('.') > -1
      ? {}
      : {
          currentValue: `${currentValue}${value}`,
          displayValue: formatDisplayValue(`${currentValue}${value}`),
        };
  }

  if (currentValue === '0' || currentValue === '-0') {
    const newValue = currentValue.replace('0', value);
    return { currentValue: newValue, displayValue: newValue };
  }

  return {
    currentValue: `${currentValue}${value}`,
    displayValue: formatDisplayValue(`${currentValue}${value}`),
  };
};

/**
 * 사칙연산 입력 처리
 * @param params => paramType 값
 */
const handleOperator = (params: paramType) => {
  const { value, previousValue, currentValue, operator } = params;
  console.log(params);

  if (operator === value && currentValue === '0') {
    return {};
  }

  // 이전 값과 현재 값이 있고 사칙연산이 입력된 경우
  if (previousValue && currentValue) {
    const result = handleEqual(params);
    result.currentValue = '0';
    result.operator = value;

    return result;
  }

  return {
    displayValue: formatDisplayValue(currentValue),
    previousValue: currentValue,
    currentValue: '0',
    operator: value,
  };
};

/**
 * 퍼센트 입력 처리
 * @param params => paramType 값
 */
const handlePercentage = (params: paramType) => {
  const { operator } = params;
  let percentValue = '';

  if (operator !== '') {
    const result = handleEqual(params);
    percentValue = (parseFloat(result.currentValue) * 0.01).toString();
  } else {
    percentValue = (parseFloat(params.currentValue) * 0.01).toString();
  }

  return {
    displayValue: formatDisplayValue(percentValue),
    previousValue: '',
    currentValue: percentValue,
    operator: '',
  };
};

/**
 * +/- 입력 처리
 * @param params => paramType 값
 */
const handlePosNeg = (params: paramType) => {
  const { currentValue } = params;

  if (currentValue[0] === '-') {
    return {
      currentValue: currentValue.substr(1),
      displayValue: formatDisplayValue(currentValue.substr(1)),
    };
  }

  return {
    currentValue: '-' + currentValue,
    displayValue: formatDisplayValue('-' + currentValue),
  };
};

/**
 * 연산 처리
 * @param params => paramType 값
 */
const handleEqual = (params: paramType) => {
  const { previousValue, currentValue, operator } = params;
  const firstValue = parseFloat(previousValue);
  const secondValue =
    currentValue === '0' ? parseFloat(previousValue) : parseFloat(currentValue);
  let result = 0;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '/':
      result = firstValue / secondValue;
      break;
    default:
      break;
  }

  return {
    displayValue: formatDisplayValue(result.toString()),
    previousValue: result.toString(),
    currentValue: secondValue.toString(),
    operator: operator,
  };
};

export default calculator;
