console.log("-------------fugue testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.fugue(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer e8 28 85 66 e5 58 b1 19 cf 63 8b ac dc 85 a0 4b 65 c3 7b ee 4f 37 ca 36 95 2b 1e 97 8c b1 4b 0c>
// hashed(hex):  e8288566e558b119cf638bacdc85a04b65c37bee4f37ca36952b1e978cb14b0c

/* Test result vs known one */

assert(
    hashed.toString('hex') === 'e8288566e558b119cf638bacdc85a04b65c37bee4f37ca36952b1e978cb14b0c',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.fugue();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.fugue(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.fugue("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
