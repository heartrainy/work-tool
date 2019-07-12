const path = require('path');
const fs = require('fs');

let modelName;  // model的命名空间

function readFileAsync() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, '../template/model.ts'), 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

function writeFileAsync(data) {
  return new Promise((resolve, reject) => {
    const fileData = data.replace(/__MODEL_NAME__/g, modelName)
    fs.writeFile(path.resolve('.', './createFile/model.ts'), fileData, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  })
}

function mkDirAsync (data) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path.resolve('.', './createFile'), { recursive: true }, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
}

function createModel (name) {
  modelName = name;
  readFileAsync().then(function(data){
    return mkDirAsync(data);
  }, function(err) {
    console.log(err);
  }).then(function(data){
    return writeFileAsync(data);
  }, function(err) {
    console.log(err);
  }).then(function() {
    console.log('model create success')
  }, function(err) {
    console.log(err);
  }).catch(function(err) {
    console.log(1);
    console.log(err);
  })
}

module.exports = {
  createModel
}