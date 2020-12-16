const download = require('download-git-repo');
const chalk = require('chalk');  
const ora = require('ora');
const pa = process.argv;
const inquirer = require('inquirer');

function createProject(frame) {
  const spinner = ora(chalk.yellow('正在创建项目...')).start();
  const name = pa[pa.length - 1];
  download('github:Anber-H/taozi-cli#template', name, function (err) {
      if (err) {
        console.log(err)
          return;
      }
      spinner.text = chalk.blue('项目创建成功');
      spinner.succeed();
      spinner.stop();
      spinner.clear();
      process.exit();
  });
}
function selectConditions(){
  const promptList = [{
    type: 'rawlist',
    message: '选择框架',
    name: 'frame',
    default: 'vue',
    choices: [
        "vue",
        "react",
    ]
  }];
  inquirer
    .prompt(
      promptList
    )
    .then(answers => {
      createProject();
    })
}

selectConditions();
