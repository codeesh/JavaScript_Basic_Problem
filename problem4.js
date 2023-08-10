function findAddress(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }

    const name = obj.name || "__name__";
    const age = obj.age || "__age__";
    const address = obj.address || "__address__";

    const output = `Name: ${name}, Age: ${age}, Address: ${address}`;
    return output;
}

// example 1
const obj1 = {
    name: "John Doe",
    age: 30,
    address: "123 Main St"
};
const result1 = findAddress(obj1);
console.log(result1);

// example 2
const obj2 = {
    name: "Alice Smith",
    age: 25
};
const result2 = findAddress(obj2);
console.log(result2);

// example 3
const invalidInput = "not an object";
const result3 = findAddress(invalidInput);
console.log(result3);
