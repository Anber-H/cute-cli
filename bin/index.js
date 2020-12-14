#!/usr/bin/env node

const program = require('./program');
const webpack = require('webpack');
const chalk = require('chalk');
let type = program.args[0];

if (program.init) {
  require('../repo');
  return;
}

// 这边对应 -d 的命令，开发启动
if (program.dev) {
  require('../dev-server');
  return;
}

// 这边对应 -b 的命令，生产编译
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





