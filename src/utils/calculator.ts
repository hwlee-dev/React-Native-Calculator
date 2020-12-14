interface paramType {
  type: string;
  value: string;
  operator: string;
  previousValue: string;
  currentValue: string;
}

const MAX_VALUE = 999999999;
const MAX_LENGTH = 9;
const MAX_EXPONENTIAL_LENGTH = 5;

/**
 * 계산기 처리
 * @param params paramType 값
 */
const calculator = (params: paramType) => {
  const { type } = params;
  const initialValue = {
    displayValue: '0',
    previousValue: '',
    currentValue: '',
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
 * @param value 포맷할 값
 */
const formatDisplayValue = (value: string) => {
  const num = parseFloat(value);

  if (num > MAX_VALUE || value.split('e').length > 1) {
    return num.toExponential(MAX_EXPONENTIAL_LENGTH).split('+').join('');
  } else {
    return value;
  }
};

/**
 * 숫자 입력 처리
 * @param params paramType 값
 */
const handleNumber = (params: paramType) => {
  const { value, currentValue } = params;

  if (currentValue.split('.').join('').length === MAX_LENGTH) {
    return {};
  }

  if (value === '.') {
    return currentValue.indexOf('.') > -1
      ? {}
      : {
          currentValue: `${currentValue || '0'}${value}`,
          displayValue: formatDisplayValue(`${currentValue || '0'}${value}`),
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
 * @param params paramType 값
 */
const handleOperator = (params: paramType) => {
  const { value, previousValue, currentValue, operator } = params;

  if (!previousValue && currentValue && value) {
    return {
      displayValue: '0',
      previousValue: currentValue,
      currentValue: '',
      operator: value,
    };
  }

  if (previousValue && currentValue && operator) {
    const result = handleEqual(params);

    return {
      ...result,
      operator: value,
    };
  }

  if (previousValue && !currentValue) {
    return {
      displayValue: '0',
      currentValue: '',
      operator: value,
    };
  }

  if (currentValue && !operator) {
    return {
      currentValue: '',
      displayValue: '0',
      operator: value,
      previousValue: currentValue,
    };
  }

  return {};
};

/**
 * 퍼센트 입력 처리
 * @param params paramType 값
 */
const handlePercentage = (params: paramType) => {
  const { previousValue, currentValue } = params;
  const percentageValue = currentValue ? currentValue : previousValue;
  const parsedValue = (parseFloat(percentageValue) * 0.01).toString();

  return {
    displayValue: formatDisplayValue(parsedValue),
    previousValue: !currentValue ? parsedValue : previousValue,
    currentValue: currentValue ? parsedValue : currentValue,
  };
};

/**
 * +/- 입력 처리
 * @param params paramType 값
 */
const handlePosNeg = (params: paramType) => {
  const { previousValue, currentValue } = params;
  const posnegValue = currentValue ? currentValue : previousValue;

  if (!previousValue && !currentValue) {
    return {
      displayValue: '-0',
      previousValue: '',
      currentValue: '-0',
    };
  }

  if (previousValue && !currentValue) {
    return {
      displayValue: '-0',
      currentValue: '-0',
    };
  }

  if (posnegValue[0] === '-') {
    return {
      currentValue: posnegValue.substr(1),
      displayValue: formatDisplayValue(posnegValue.substr(1)),
    };
  }

  return {
    currentValue: '-' + (posnegValue || '0'),
    displayValue: formatDisplayValue('-' + (posnegValue || '0')),
  };
};

/**
 * 연산 처리
 * @param params paramType 값
 */
const handleEqual = (params: paramType) => {
  const { previousValue, currentValue, operator } = params;
  const firstValue = parseFloat(previousValue);
  let secondValue =
    currentValue === '' ? parseFloat(previousValue) : parseFloat(currentValue);
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
      result = isFinite(result) ? result : 0;
      break;

    default:
      result = secondValue;
      secondValue = 0;
      break;
  }

  return {
    displayValue: formatDisplayValue(result.toString()),
    previousValue: result.toString(),
    currentValue: '',
    operator: '',
  };
};

export default calculator;
