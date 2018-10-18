# 快速上手

## 安装
推荐使用 npm 的方式安装，它能更好地和`webpack`打包工具配合使用。
若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装：rm -rf node_modules && cnpm install。

```shell
npm i ppfish --save
```

## 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'ppfish';

ReactDOM.render(
  <Button type="primary">Primary</Button>, document.getElementById('app')
);

```

## 自定义编译

Fish Design使用了react和Typescript，在编译时除了需要配置babel-loader，还需要使用ts-loader或awesome-typescript-loader编译tsx代码。
以下列举了Typescript编译所需的步骤：

1. 安装依赖包

```shell
npm install typescript awesome-typescript-loader@^4.0.1 @types/node @types/react @types/react-dom --save-dev
```

注意：如果项目webpack版本是3.x，awesome-typescript-loader版本不能高于4.xw

2. 配置awesome-typescript-loader


```js
// webpack.config.js
{
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'source'),
          // issues: [Symlinks in project - loader not working when using include](https://github.com/webpack/webpack/issues/1643)
          fs.realpathSync(__dirname + '/node_modules/ppfish') // 指定使用awesome-typescript-loader编译ppfish源码
        ],
        use: [{
          loader: 'awesome-typescript-loader'
        }]
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'source'),
          fs.realpathSync(__dirname + '/node_modules/ppfish') // 指定使用babel-loader编译ppfish
        ],
        // exclude: /(node_modules|vendor)\/(?!(ppfish)\/).*/, // 优先于include，排除ppfish
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }]
      },
    ],
  }
}
```