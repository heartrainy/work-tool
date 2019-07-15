/** 
 * 压缩当前目录下dist文件并修改压缩文件名 
 */
const compressing = require('compressing');
const path = require('path')
const fs = require('fs')
// const JSZip = require('jszip');

function compressDir () {
  // 获取项目文件名
  const projectName = path.basename(process.cwd());
  // 压缩文件
  compressing.zip.compressDir(path.resolve('.', './dist'), path.resolve('.', `./${projectName}.zip`))
  .then(() => {
      console.log('压缩成功');
  })
  .catch(err => {
      console.error(err);
  });
}

module.exports = {
  compressDir
}