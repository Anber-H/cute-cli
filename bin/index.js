#!/usr/bin/env node

const program = require('./program');
const webpack = require('webpack');
const chalk = require('chalk');
let type = program.args[0];

if (program.init) {
  require('../repo');
  return;
}

if (program.dev) {
  require('../dev-server');
  return;
}

if (program.build) {
  global.pablicPath = './';
  const config = require('../webpack.config');
  webpack(config, (err, stats) => {
    if (err) {
      throw new Error(err);
      process.exit(1);
      return;
    }
    console.log(chalk.cyan('编译完成.\n'));
  });
  return;
}





