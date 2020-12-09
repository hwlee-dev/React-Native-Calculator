export const handleBracket = (expression) => {
  return '';
};

export const handleOperator = (
  value: string,
  expression: string,
  cursorPosition: number,
) => {
  const expLength = expression.length;

  if (cursorPosition > -1 && cursorPosition < expLength) {
    return [
      expression.slice(0, cursorPosition),
      value,
      expression.slice(cursorPosition),
    ].join('');
  } else {
    return `${expression}${value}`;
  }
};

export const handleNumber = (
  value: string,
  expression: string,
  cursorPosition: number,
) => {
  const expLength = expression.length;

  if (cursorPosition > -1 && cursorPosition < expLength) {
    return [
      expression.slice(0, cursorPosition),
      value,
      expression.slice(cursorPosition),
    ].join('');
  } else {
    return `${expression}${value}`;
  }
};

export const handleEqual = (expression) => {
  return '';
};

export const getResult = (expression) => {
  return '';
};

const calculator = (
  type: string,
  value: string,
  expression: string,
  cursorPosition: number,
) => {
  let currentExpression = '';
  switch (type) {
    case 'clear':
      currentExpression = '';
      break;
    case 'bracket':
      currentExpression = handleBracket(expression);
      cursorPosition = cursorPosition + 1;
      break;
    case 'percentage':
      break;
    case 'operator':
      currentExpression = handleOperator(value, expression, cursorPosition);
      cursorPosition = cursorPosition + 1;
      break;
    case 'number':
      currentExpression = handleNumber(value, expression, cursorPosition);
      cursorPosition = cursorPosition + 1;
      break;
    case 'equal':
      currentExpression = handleEqual(expression);
      break;
    default:
      break;
  }

  return {
    expression: currentExpression,
    result: getResult(expression),
    cursorPosition: cursorPosition,
  };
};

export default calculator;
