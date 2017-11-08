const flat = require("flatjson");
module.exports = function(obj, delimiter, filter) {
  var input = [];
  if (obj instanceof Array) {
    input = obj;
  } else {
    input.push(obj);
  }

  //build headers
  var headers = [];
  for (var i = 0; i < input.length; i++) {
    var fo = flat(input[i], delimiter, filter, true);
    var keys = Object.keys(fo);
    for (var j = 0; j < keys.length; j++) {
      if (headers.indexOf(keys[j]) < 0) {
        headers.push(keys[j]);
      }
    }
  }
  return headers;
};
