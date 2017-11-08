let assert = require("assert");
let all = require("..");

let test = [
  {
    a: {
      b: 10,
      c: 11
    },
    d: {
      e: 20,
      f: 21
    }
  },
  {
    d: {
      e: 101
    }
  },
  {
    g: {
      h: 10,
      i: 11
    }
  }
];

describe("all they keys", function() {
  describe("default behavior", function() {
    it("should flatten and merge list of a nested objects", function() {
      var results = all(test, "-");
      assert(results.length == 9, "Length is not as expected");
      assert(results.indexOf("a") >= 0, "a-b missing in keys");
      assert(results.indexOf("d") >= 0, "a-b missing in keys");
      assert(results.indexOf("g") >= 0, "a-b missing in keys");
      assert(results.indexOf("a-b") >= 0, "a-b missing in keys");
      assert(results.indexOf("a-c") >= 0, "a-b missing in keys");
      assert(results.indexOf("d-e") >= 0, "a-b missing in keys");
      assert(results.indexOf("d-f") >= 0, "a-b missing in keys");
      assert(results.indexOf("g-h") >= 0, "a-b missing in keys");
      assert(results.indexOf("g-i") >= 0, "a-b missing in keys");
    });
  });
});
