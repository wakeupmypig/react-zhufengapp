let path = require('path');
let htmlWebpackPlugin  = require('html-webpack-plugin');
module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path: path.resolve('dist')
    },
    module:{
        rules:[
            {test:/\.(js|jsx)/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)/,use:'url-loader'}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    devtool: 'source-map',
    devServer: {

    }
};