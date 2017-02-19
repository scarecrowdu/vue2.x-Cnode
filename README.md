# vue2.x-cnode

### 关于项目

vue2.x Cnode社区是基于vue、vue-router、vuex、axios、es6开发，使用webpack构建工具编译打包项目

如果此开源项目对大家学习vue的全家桶有帮助，请给我一个star,因为你的star让我觉得这个开源有了价值！

### vue1.x 项目
基于vue1.x已上线项目


### 下载 && 启动
```bash
<!--克隆项目-->
git clone https://github.com/vincentSea/vue2.x-Cnode.git
<!--安装依赖-->
npm install
<!--启动开发环境-->
npm run dev
<!--打包项目-->
npm run build
```

### 项目目录
```bash
│  .babelrc
│  .gitignore
│  index.html
│  index.tpl
│  package.json
│  README.md
│  
├─build
│      
├─src
│  │  App.vue
│  │  filter.js
│  │  main.js
│  │  
│  ├─assets
       
│  ├─components
│  │      
│  ├─fetch
│  │      
│  ├─pages
│  │      
│  ├─router
│  │      
│  └─vuex
│              
└─static   
```




### webpack 配置
本项目是参考vue-cli快速构建项目，自己搭建项目。后续会改成webpack2.x的版本

### 安装babel

```bash
<!--安装babel,编译ES6语法-->
cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-plugin-transform-runtime  babel-preset-stage-2

```
```javascript
// 使用babel,编译ES6语法
{
    test: /\.js$/,
    loader: 'babel?presets=es2015',
    exclude: /node_modules/
}
```


### 图片路径与打包

```bash
<!--安装引入图片需要依赖url-loader的加载器-->
cnpm install --save-dev url-loader
```
```javascript
{
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url',
    query: {
        limit: 10000,
        name: '[name].[hash:7].[ext]'
    }
}
```

#### 样式引入打包 scss文件编译

```bash
cnpm install --save-dev css-loader sass-loader cssnext-loader
cnpm install --save-dev node-sass
```


```javascript
 // 打包引入样式
{
    test: /\.css$/,
    loader: "css-loader?sourceMap!cssnext-loader"
},
// scss文件编译 
{
    test: /\.scss$/,
    loader: "css-loader?sourceMap!sass-loader!cssnext-loader"
}
```