let path = require('path');
let fs = require('fs');
let extension = '.tjs';
let prefix = null;
module.exports = {
  init: function(filePath){
    prefix = generatePrefix(filePath);
    let ext = path.extname(filePath);
    if(ext !== ''){
      extension = ext;
    }
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
  return fs.readFileSync(path.join(prefix, file) + extension, 'utf8').toString();
}

function readFileWithoutPrefix(filePath){
  return fs.readFileSync(filePath).toString();
}

function generatePrefix(filePath){
  return path.dirname(filePath);
}
