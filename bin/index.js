#!/usr/bin/env node
const program = require('commander');
const compress = require('../src/compress');

program.version('0.1.0')
.command('compress')
.action(function(argv) {
  compress.compressDir()
})

program.command('test')
.action(function(argv) {
  console.log(process.version);
  console.log(process.platform);
  console.log(process.arch);
})

program.parse(process.argv)