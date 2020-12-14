// 该文件用于下载template目录
const download = require('download-git-repo');
const chalk = require('chalk');  
const ora = require('ora');
const pa = process.argv;

// 创建项目
function createProject(frame) {
  const spinner = ora(chalk.yellow('正在创建项目...')).start();
  const name = pa[pa.length - 1]; //这里获取init后面的名字
  // 这里是将git模板下载到当前目录，并重新命名
  // 这里clone的是cute-cli仓库的template分支
  download('github:Anber-H/cute-cli#template', name, function (err) {
      if (err) {
        console.log(err)
          // throw err;
          return;
      }
      spinner.text = chalk.blue('项目创建成功');
      spinner.succeed();
      spinner.stop();
      spinner.clear();
      process.exit();
  });
}

createProject();
