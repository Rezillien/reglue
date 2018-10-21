let templateParser = require("./src/templateParser");
module.exports = {
  build: function(filePath, options, callback)
  {
    return callback(null, templateParser.parse(filePath, options, callback));
  }
};

