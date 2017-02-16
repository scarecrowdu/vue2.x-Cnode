# vue2.x-cnode


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