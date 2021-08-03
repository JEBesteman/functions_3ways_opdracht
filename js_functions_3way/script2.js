//Goed lezen wat er gevraagd wordt in opdracht, qua som.......


//function declaration

function mathDeclaration(number1, number2){
    const squaredNumber1 = number1 * number1;
    const squaredNumber2 = number2 * number2;
    const sum = squaredNumber1 + squaredNumber2;
    const sqauredSum = sum * sum;
    return sqauredSum;
}

console.log(mathDeclaration(3, 4));
console.log(mathDeclaration(5, 7));

//function expression

const mathExpression = function(numberOne, numberTwo) {
    const squaredNumberOne = numberOne * numberOne;
    const squaredNumberTwo = numberTwo * numberTwo;
    const sumTwo = squaredNumberOne + squaredNumberTwo;
    const squaredSumTwo = sumTwo * sumTwo;
    return squaredSumTwo;
};
console.log(mathExpression(3, 4));
console.log(mathExpression(5, 7));

//arrow funnction

const mathArrow = (numb1, numb2) => {
    const squaredNumb1 = numb1 * numb1;
    const squaredNumb2 = numb2 * numb2;
    const sum2 = squaredNumb1 + squaredNumb2;
    const squaredSum2 = sum2 * sum2;
    return squaredSum2;
};
console.log(mathArrow(3, 4));
console.log(mathArrow(5, 7)); 