const assert = require("assert");

//Test 1: Addition
assert.strictEqual(2 + 2, 4, "2 + 2 should equal 4");

// Test 2: string
assert.strictEqual(typeof "hello", "string", "hello should be a string");
console.log("string test passed");

// Test 3: intentional failure
assert.strictEqual(1 + 1, 3, "1 + 1 should equal 2");
console.log("math test passed");

console.log("\nAll tests passed!");
