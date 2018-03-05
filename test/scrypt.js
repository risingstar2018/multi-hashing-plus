console.log("-------------scrypt testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.scrypt(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer ab ce 08 47 2c 44 49 7f f9 87 a0 14 ab 14 3f ef c6 1e 9d 1d 6a 54 78 96 7e 99 db 4a 8d f8 51 c3>
// hashed(hex):  abce08472c44497ff987a014ab143fefc61e9d1d6a5478967e99db4a8df851c3


/* Test result vs known one */

assert(
    hashed.toString('hex') === 'abce08472c44497ff987a014ab143fefc61e9d1d6a5478967e99db4a8df851c3',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.scrypt();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.scrypt(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.scrypt("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
