console.log("-------------lyra2re testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.lyra2re(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer d3 aa 3a 39 8c 73 d8 b8 fd e7 ba 1c 20 3f 9b e4 6d 78 1c 26 4d df 30 6d 59 54 a7 0b 02 1f e2 06>
// hashed(hex):  d3aa3a398c73d8b8fde7ba1c203f9be46d781c264ddf306d5954a70b021fe206


/* Test result vs known one */

assert(
    hashed.toString('hex') === 'd3aa3a398c73d8b8fde7ba1c203f9be46d781c264ddf306d5954a70b021fe206',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.lyra2re();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.lyra2re(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.lyra2re("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
