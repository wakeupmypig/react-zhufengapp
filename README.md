## react技术栈
```
yarn add react react-dom redux react-redux react-router-dom react-router-redux@next history  redux-thunk 
``` 
## webpack
```
yarn add webpack webpack-dev-server html-webpack-plugin --dev
```
## babel
```
yarn add babel-core babel-preset-es2015 babel-loader babel-preset-stage-0 babel-preset-react babel-plugin-transform-decorators-legacy --dev
```
## 图片和less
```
yarn add css-loader style-loader less-loader less file-loader url-loader --dev
```

## 轮播图插件
```
yarn add react-swipe swipe-js-iso --dev
```
## react动画
```
yarn add react-addons-css-transition-group
```
## fetch 
```
yarn add whatwg-fetch es6-promise
```
## koa
```
yarn add koa koa-router koa-cors  koa-bodyparser nodemon
```



## 服务端接口
| 方法        | 路径                           | 作用  | 返回值| 
| ------------- |:--------------------------  |: -----| ------|
| post      | /api/login                     | 登录 | {nickName:''} |
| get      | /api/getLessonByUser/:user            | 获取当前用户课程列表 | [{lessonName,url,timer,location,long,lessonId}] |
| get      | /api/getLessons/:type/:limit/:offset |  获取对应类型的课程 |{hasMore,lessons:[{url,lesson,lessonId,price}]}|
| get      | /api/getSliders |  获取轮播图数据 |[]|

