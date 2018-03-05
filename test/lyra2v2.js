console.log("-------------lyra2v2 testing ------------");
const Hash = require('./../');
const assert = require('assert');

const data = new Buffer('01234567890123456789012345678901234567890123456789012345678901234567890123456789');
var hashed = Hash.lyra2v2(data); //returns a 32 byte buffer

/* Debug output */

console.log("data: ", data, "\nhashed: ", hashed, "\nhashed(hex): ", hashed.toString('hex'));
// data:  <Buffer 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 30 31 32 33 34 35 36 37 38 39 ... >
// hashed:  <Buffer e6 15 a1 7b 80 1a f3 5f a4 8c fd 8c 5a 0d 9a 29 2a 03 b8 3b ea f3 57 69 4d 07 c9 aa 13 09 07 68>
// hashed(hex):  e615a17b801af35fa48cfd8c5a0d9a292a03b83beaf357694d07c9aa13090768


/* Test result vs known one */

assert(
    hashed.toString('hex') === 'e615a17b801af35fa48cfd8c5a0d9a292a03b83beaf357694d07c9aa13090768',
    "Hashes do not match!"
);


/* Test illegal function calls */

// You must provide exactly one argument.
assert.throws(
    function() {
        Hash.lyra2v2();
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on less then 1 arguments"
);
assert.throws(
    function() {
        Hash.lyra2v2(data, data);
    },
    /You must provide exactly one argument\./,
    "Failed to throw error on more than 1 arguments"
);

// Argument should be a buffer object.
assert.throws(
    function() {
        Hash.lyra2v2("some string");
    },
    /Argument should be a buffer object\./,
    "Failed to throw error on non-buffer argument"
);

/* Everything is fine */

console.log("\nAll tests \033[32mPASSED\033[0m!\n");
