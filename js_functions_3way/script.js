//function declaration

function mathDeclaration(number1, number2){
    let squaredNumber = number1 * number2;
    let sum = squaredNumber + squaredNumber;
    return sum * sum;
}

console.log(mathDeclaration(3, 4));
console.log(mathDeclaration(5, 7));

//function expression

const mathExpression = function(numberOne, numberTwo) {
    const squaredNumber2 = numberOne * numberTwo;
    const sum2 = squaredNumber2 + squaredNumber2;
    return sum2 * sum2;
};
console.log(mathExpression(3, 4));
console.log(mathExpression(5, 7));

//arrow funnction

const mathArrow = (numb1, numb2) => {
    const squaredNumberTwo = numb1 * numb2;
    const sumTwo = squaredNumberTwo + squaredNumberTwo;
    return sumTwo * sumTwo;
};
console.log(mathArrow(3, 4));
console.log(mathArrow(5, 7));