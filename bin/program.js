// 配置taozi-cli的一些命令
const program = require('commander');
const { SSL_OP_NO_TLSv1_1 } = require('constants');
const path = require('path');
const packageData = require(path.resolve(__dirname, '../package.json'));

program
  .version(packageData.version, '-v, --vers', 'output the current version')
  .option('-d, --dev [devConf]', '开发环境启动')
  .option('-b, --build [buildConf]', '生产环境编译')
  .option('-i, --init <projectName>', '生成基本项目')

program.parse(process.argv);

module.exports = program;
