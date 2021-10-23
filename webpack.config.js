const { CleanWebpackPlugin } = require('clean-webpack-plugin');     // 这里需要把CleanWebpackPlugin写在{}里

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.ts',

    output: {
    
    filename:  'main.js'

    },

    resolve: {

        extensions:  ['.ts', '.tsx', '.js']     //  这里不要漏写圆点

    },

    module: {

        rules: [{

            test:  /\.tsx?$/,

            use: 'ts-loader',

            exclude: /node\_modules/

        }]

    },

    devtool: process.env.NODE_ENV === 'production' ? false  :  'inline-source-map',

    devServer: {

        contentBase:  './dist',

        compress:  false,

        port:  9010,

        stats:  'errors-only',

        host:  'localhost'

    },

    plugins: [

        new CleanWebpackPlugin({

            cleanOnceBeforeBuildPatterns: ['./dist']

        }),

        // new  HtmlWebpackPlugin({

        //     template:'./src/index.html'

        // })

    ]

}