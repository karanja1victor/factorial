let assert = require("assert");
let FirstFactorial = require("../index.js");

describe("FirstFactorial", function() {
  describe("#factorial", function() {
    it("should return the factorial of a number given", function () {
      let firstNum = new FirstFactorial(4);
      assert.strictEqual(firstNum.factorial(), 24);
    });
  });
});
