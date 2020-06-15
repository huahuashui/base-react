const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

// 同步查询当前目录下所有文件
function readdirSync(str) {
    let fileList = fs.readdirSync(str);
    let ret = [];
    fileList.forEach(function (file) {
        const str2 = path.resolve(str, file);
        const stat = fs.lstatSync(str2);
        if (stat.isDirectory()) {
            const temp = readdirSync(str2);
            ret = ret.concat(temp);
        } else {
            // 去除后缀
            ret.push({
                path: str2,
                file: file
            });
        }
    });
    return ret;
}

// 同步查询当前目录下所有文件
function removeFileSuffix(file) {
    return file.split('.')[0];
}

// 排除依赖
// 防止将某些 import 的包打包到 bundle 中，
// 而是在运行时(runtime)再去从外部获取这些扩展依赖
const externals = {
    // react: {
    //     root: 'react',
    //     commonjs: 'react',
    //     commonjs2: 'react',
    //     amd: 'react'
    // }
};

exports.externals = [externals, nodeExternals()];


exports.alias = {
    root: 'react',
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react'
};
