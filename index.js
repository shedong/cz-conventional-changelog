"format cjs";

var engine = require('./engine');
var types = require('./commitType')
module.exports = engine({
  types: types
});

