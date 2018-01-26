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
// ran failing test2: "Expected undefined to equal 2."
// 
Crypto.prototype.size = function() {
    const message = this.normalizePlaintext(this.rawString);
    const messageLength = message.length;
    console.log('Hey!', messageLength);
};
module.exports = Crypto;