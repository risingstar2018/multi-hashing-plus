console.log("-------------groestlmyriad testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.groestlmyriad(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer 0f b3 ea f7 8a 35 2a a2 7b c3 cf 7e db 0d 5c 68 73 b2 1b d9 0a bb 97 0e b5 62 e1 69 22 1d 69 6f>
// hashed(hex):  0fb3eaf78a352aa27bc3cf7edb0d5c6873b21bd90abb970eb562e169221d696f


/* Test result vs known one */

assert(
    hashed.toString('hex') === '0fb3eaf78a352aa27bc3cf7edb0d5c6873b21bd90abb970eb562e169221d696f',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.groestlmyriad();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.groestlmyriad(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.groestlmyriad("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
