function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        var invalid = "Invalid Input";
        return invalid;
    }

    var num1 = arr[0];
    var num2 = arr[1];

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        var invalid = "Invalid Input";
        return invalid;
    }

    if (num1 === num2) {
        var eq = "equal";
        return eq;
    } else if (num1 < num2) {
        return [num1, num2];
    } else {
       return [num2, num1];
    }
}

// example 1
var inputArray1 = [5, 3];
var result1 = sortMaker(inputArray1);
console.log(result1);

// example 2
var inputArray2 = [7, 7];
var result2 = sortMaker(inputArray2);
console.log(result2);

// example 3
var invalidInput = "not an array";
var result3 = sortMaker(invalidInput);
console.log(result3);
