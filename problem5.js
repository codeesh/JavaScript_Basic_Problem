function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        var error1 = "Cannot be empty";
        return error1;
    }

    if (typeof totalDue !== 'number') {
        var error2 =  "Price must be a number";
        return error2;
    }

    const totalCost = changeArray.reduce((sum, cost) => sum + cost, 0);

    if (totalCost >= totalDue) {
        return false;
    } else {
        return true;
    }
}

// example 1
const itemchangeArray1 = [1, 2, 5];
const chipPrice1 = 10;
const result1 = canPay(itemchangeArray1, chipPrice1);
console.log(result1);

// example 2
const itemchangeArray2 = [1, 2, 5];
const chipPrice2 = 5;
const result2 = canPay(itemchangeArray2, chipPrice2);
console.log(result2);

// example 3
const invalidchangeArray = "not an array";
const invalidtotalDue = "not a number";
const result3 = canPay(invalidchangeArray, invalidtotalDue);
console.log(result3);
