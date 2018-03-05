console.log("-------------x17 tesing------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.x17(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer 89 60 79 59 ef 6b 68 8e fd f8 79 cf aa 00 df 61 4e ad 6b 43 b1 3f 61 7e e7 22 51 c8 02 62 3f a7>
// hashed(hex):  89607959ef6b688efdf879cfaa00df614ead6b43b13f617ee72251c802623fa7


/* Test result vs known one */

assert(
    hashed.toString('hex') === '89607959ef6b688efdf879cfaa00df614ead6b43b13f617ee72251c802623fa7',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.x17();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.x17(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.x17("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
