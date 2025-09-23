/* TÚLIO THAUÃ DUTRA >> */

// Simple Calculator
function calculator(n1, n2, operator){
  switch(operator){
    case 'soma':
      return n1 + n2; 
    case 'subtracao':
      return n1 - n2;
    case 'divisao':
      return n1 / n2;
    case 'multiplicacao':
      return n1 * n2;
    default:
      return 'Invalid operator!'
  }
  return calculator
}

//Choose here
console.log(calculator(5,2,'divisao'))
