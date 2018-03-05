console.log("-------------nist5 testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.nist5(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer 9a 9a 00 7e c6 f3 44 f9 2a 9c 6f d5 28 ae 60 a3 12 5b 9e 2e 53 bb 24 32 af dc cf 86 0c c1 fa 8a>
// hashed(hex):  9a9a007ec6f344f92a9c6fd528ae60a3125b9e2e53bb2432afdccf860cc1fa8a


/* Test result vs known one */

assert(
    hashed.toString('hex') === '9a9a007ec6f344f92a9c6fd528ae60a3125b9e2e53bb2432afdccf860cc1fa8a',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.nist5();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.nist5(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.nist5("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
