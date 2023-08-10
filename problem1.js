function cubeNumber(number) {
    if (typeof number == 'number') {
        var cube = number * number * number;
        return cube;
    }
    else
    {
        var message = "Input should be a number type";
        return message;
    }
}

var inputNumber = "number";
var result = cubeNumber(inputNumber);
console.log(result);
