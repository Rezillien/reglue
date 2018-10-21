var fs = require('fs');
module.exports = {
  build: function(template, variables)
  {
    return parseTemplate(template, variables);
  }
};




