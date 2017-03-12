module.exports = {
    entry: './src/main/js/index.ts',
    output: {
        path: __dirname + "/src/main/resources/static",
        filename: "index.js"
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    },
    devtool: 'source-map'
};