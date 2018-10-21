let fs = require('fs');
let extension = '.tjs';
let prefix = null;
module.exports = {
  init: function(filePath){
    prefix = generatePrefix(filePath);
    return readFileWithoutPrefix(filePath);
  },
  read: function(file){
    if(prefix === null){
      throw "not allowed";
    } else {
      return readFile(file);
    }
  },
  fileExtension: extension
};


function readFile(file){
  return fs.readFileSync(prefix + '/' + file + extension, 'utf8');
}

function readFileWithoutPrefix(filePath){
  return fs.readFileSync(filePath);
}

function generatePrefix(filePath){
  var path =filePath.split('/');
  path.pop();
  return path.join('/');
}
