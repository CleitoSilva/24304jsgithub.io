// perform-calculations.js

export function calculate(firstOperand, secondOperand, operator) {
    // Implementação da função de cálculo
    if (operator === '+') return firstOperand + secondOperand;
    if (operator === '-') return firstOperand - secondOperand;
    if (operator === '*') return firstOperand * secondOperand;
    if (operator === '/') return firstOperand / secondOperand;
    return NaN;
}