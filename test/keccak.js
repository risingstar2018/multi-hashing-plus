
console.log("-------------keccak testing ------------");

const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.keccak(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer 7a b4 d0 43 22 a9 4c 96 c0 6c f6 5c d4 1e 9d 7a 0f 07 78 12 ec 8a e8 9c d9 fa 91 a4 8f e1 df 82>
// hashed(hex):  7ab4d04322a94c96c06cf65cd41e9d7a0f077812ec8ae89cd9fa91a48fe1df82


/* Test result vs known one */

assert(
    hashed.toString('hex') === '7ab4d04322a94c96c06cf65cd41e9d7a0f077812ec8ae89cd9fa91a48fe1df82',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.keccak();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.keccak(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.keccak("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
