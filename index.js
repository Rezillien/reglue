let templateParser = require("./src/templateParser");
module.exports = {
  build: function(template, variables)
  {
    return templateParser.parse(template, variables);
  }
};

