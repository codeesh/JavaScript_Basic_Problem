function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        var wrongMessage = "Input should be a string"
        return wrongMessage;
    }
    else {
        if (string1.includes(string2)) {
            return true;
        }
        else {
            return false;
        }
    }
}
var string1 = "John Wick";
var string2 = "ick";

var isMatch = matchFinder(string1, string2);
console.log(isMatch);
