let fileManager = require('./fileManager');

module.exports = {
  parse: function(templatePath, variables){
    return parseTemplate(templatePath, variables);
  },
  input: fileManager
};

const fileRegex = /{\s*reglue:\s"([^"\s*};]+)?"\s*};/g;
const variableRegex = /\/\/v{{\s([^}}]+)?\s}}/g;

function parseTemplate(templatePath, variables, callback){
  let template = fileManager.init(templatePath);
  let match;
  while (match = fileRegex.exec(template)) {
    const matchReplacement = fileManager.read(match[1]);
    template = template.replace(match[0], matchReplacement);
  }
  while(match = variableRegex.exec(template)){
    console.log(match);
    console.log(variables);
    template = template.replace(match[0], 'var ' + match[1] + ' = ' +variables[match[1]]);
  }
  return template;
}
