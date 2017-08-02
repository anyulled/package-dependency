const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const chalk = require("chalk");

module.exports = (env = {prod: false}) => {
    let config, plugins = [new CleanWebpackPlugin(["dist"])];
    console.log(`Production: ${chalk.red.bold(env.prod)}`);
    config = {
        entry: env.prod !== true ? "./index.js" : "./export.js",
        output: {
            path: `${__dirname}/dist`,
            filename: "bundle.js",

        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    options: {
                        presets: ["es2015", "react"]
                    }
                }
            ]
        },
        devtool: "source-map",
        plugins: plugins
    };
    if (env.prod) {
        config.externals = [nodeExternals()];
        config.output.library = "dependent-app";
        config.output.libraryTarget = 'umd';
        config.output.umdNamedDefine = true;
    } else {
        plugins.push(
            new HtmlWebpackPlugin({title: "Dependent App"}),
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(true),
                VERSION: JSON.stringify("5fa3b9"),
                BROWSER_SUPPORTS_HTML5: true,
                TWO: "1+1"
            })
        );
    }
    console.log(`Entry: ${chalk.bold.blue(config.entry)}`);
    return config;
};