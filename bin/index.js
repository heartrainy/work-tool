#!/usr/bin/env node
const program = require('commander');
const compress = require('../src/compress');
const createTemplate = require('../src/createTemplate');

program.version('0.1.0')
.command('compress')
.action(function(argv) {
  compress.compressDir()
})

program.command('test')
.option('-m, --model <name>', 'create model')
.action(function(argv) {
  if (argv.model) {
    createTemplate.createModel(argv.model)
  }
})

program.parse(process.argv)