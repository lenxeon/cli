#!/usr/bin/env node
const chalk = require('chalk');
const error = chalk.bold.red;
const info = chalk.bold.blueBright;
const warning = chalk.keyword('orange');
console.log(warning('welcome to use app component cli!'));
const fs = require('fs');
const path = require('path');

let project = require('../project');
console.log(error(JSON.stringify(project)));


var inquirer = require('inquirer');

console.log(info(path.join(__dirname, '/')));


inquirer.prompt([{
    type: 'String',
    name: 'name',
    message: 'please enter you component name',
    default: ''
}]).then((value) => {
    console.log(info(`您输入的组件名为:${JSON.stringify(value.name)}`));
    if (!value || !value.name || value.name.trim().length == 0) {
        console.log(error('组件名称不能为空'));
    } else if (/^[a-z,A-z][a-z,A-Z,0-9,_]/.test(value.name)) {
        console.log(info('即将准备创建组件文件'));
        project.files.forEach(file => {
            var content = file.content || '';
            var path = `${value.name}.${file.name}`;
            fs.writeFileSync(path, content);
        })


    } else {
        console.log(error('组件名称只能由a-z,A-z,0-9,_字符缓存'));
    }
});