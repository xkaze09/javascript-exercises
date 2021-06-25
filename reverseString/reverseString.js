const reverseString = function(word) {
    return word.split('').reverse().join('');
};

console.log(reverseString("test"));
module.exports = reverseString;
