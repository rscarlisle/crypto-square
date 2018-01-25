const Crypto = function (rawString) {
    this.rawString = rawString;
};

Crypto.prototype.normalizePlaintext = function () {
    const pattern = /[^\w0-9]/gi
    return this.rawString.replace(pattern, '').toLowerCase()
};



// var normalizePlaintext = function (rawString) {
//     var pattern = /[^\w0-9]/gi;
//     return rawString.replace(pattern, '').toLowerCase()
// };

// var result = normalizePlaintext('s#$%^&plunk');

module.exports = Crypto;