const webpack=require('webpack')
const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin.js')

module.exports={
    mode:'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        hot:true,
        port:3000,
        // contentBase:'src'
        open:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/.css$/,use:["style-loader","css-loader"]},
            {test:/.scss$/,use:["style-loader","css-loader","sass-loader"]},
            {test:/.(jpg|png|gif|jpeg)$/,use:'url-loader'},
            {test:/.(woff|eot|ttf|svg|woff2)$/,use:'url-loader'},
            {test:/.vue$/,use:'vue-loader'},
            {test:/.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}