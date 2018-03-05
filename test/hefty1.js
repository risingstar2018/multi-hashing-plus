console.log("-------------hefty1 testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.hefty1(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer f5 44 34 8b 71 8a ac 41 39 3c 6e da cb e7 8b 2d 53 28 0f cb 8d 39 0f e8 59 f0 b9 65 43 62 79 b7>
// hashed(hex):  f544348b718aac41393c6edacbe78b2d53280fcb8d390fe859f0b965436279b7


/* Test result vs known one */

assert(
    hashed.toString('hex') === 'f544348b718aac41393c6edacbe78b2d53280fcb8d390fe859f0b965436279b7',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.hefty1();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.hefty1(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.hefty1("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
