console.log("-------------lyra2z testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.lyra2z(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer ca 5e 18 78 2d fa 69 94 8a de 7e 90 fa f9 44 19 d4 d6 ff b7 63 1f 46 7c 28 dc 6e 3f f4 91 23 50>
// hashed(hex):  ca5e18782dfa69948ade7e90faf94419d4d6ffb7631f467c28dc6e3ff4912350


/* Test result vs known one */

assert(
    hashed.toString('hex') === 'ca5e18782dfa69948ade7e90faf94419d4d6ffb7631f467c28dc6e3ff4912350',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.lyra2z();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.lyra2z(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.lyra2z("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
