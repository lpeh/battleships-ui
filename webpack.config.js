const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.vanilla\.css$/i, // Targets only CSS files generated by vanilla-extract
                use: devMode ? ["style-loader", "css-loader"] : [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: require.resolve('css-loader'),
                    options: {
                      url: false // Required as image imports should be handled via JS/TS import statements
                    }
                  }
                ]
              }
        ],
    },
    plugins: [
        new VanillaExtractPlugin()
    ].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}