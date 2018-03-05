console.log("-------------neoscrypt testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.neoscrypt(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer 1e 14 2d bf d8 70 e2 a6 95 de 87 ba a0 5b f2 31 c6 8d 56 20 cd b5 30 87 50 ea 8c 92 0b 9e 0b 28>
// hashed(hex):  1e142dbfd870e2a695de87baa05bf231c68d5620cdb5308750ea8c920b9e0b28


/* Test result vs known one */

assert(
    hashed.toString('hex') === '1e142dbfd870e2a695de87baa05bf231c68d5620cdb5308750ea8c920b9e0b28',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.neoscrypt();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.neoscrypt(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.neoscrypt("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
