// for spec to consume the Crypto object, added module.exports
const Crypto = function (rawString) {
    this.rawString = rawString;
};

// used prototype to add normalizePlaintext() to Crypto()
// use of 'this' refers to local parent container
Crypto.prototype.normalizePlaintext = function () {
    const pattern = /[^\w0-9]/gi
    return this.rawString.replace(pattern, '').toLowerCase()
};

// create size function for Crypto()
// ran failing test1: "TypeError: crypto.size is not a function"
// will now make test pass by writing the 'empty' size function

Crypto.prototype.size = function() {
    const message = this.normalizePlaintext(this.rawString);
    const messageLength = message.length;

    // ran failing test2: "Expected undefined to equal 2."
    // Find the square root of the message length, rounding up
    // running test again: test succeeded; expected value was correct  
    const numColumns = Math.ceil(Math.pow(messageLength, 0.5));
    // numColumns will be consumed in plaintextSegments() function and 
    // 'size of small square with additional non-nuber chars' passed!
    return numColumns;
    
};

// run failing test for plaintextSegments() function
// error msg: "TypeError: crypto.plaintextSegments is not a function"
// create crypto.plaintextSegments() prototype
// 2 errors: 
// Expected undefined to equal [ 'neverv', 'exthin', 'eheart', 'withid', 'lewoes' ].
// Expected undefined to equal [ 'zomg', 'zomb', 'ies' ]. 
Crypto.prototype.plaintextSegments = function() {
    const numColumns = this.size();
    const pattern = new RegExp('.{1,' + numColumns + '}', 'g');
    const grid = this.normalizePlaintext().match(pattern);
    // the two errors were fixed by 3 lines of code above
    // time to create the final function: Crypto.prototype.ciphertext
    return grid;
};

// ran failing test: TypeError: crypto.ciphertext is not a function
// create: Crypto.prototype.ciphertext; now, test is passing!
// Crypto.prototype.ciphertext = function() {

// }
module.exports = Crypto;