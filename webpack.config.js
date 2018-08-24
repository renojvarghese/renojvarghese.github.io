const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const pug = {
    test: /\.pug$/,
    use: ["html-loader?attrs=false", "pug-html-loader"]
};
const babel = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
};
const css = {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader"]
    })
};
const config = {
    entry: { main: "./src/app.js" },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [babel, pug, css]
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.pug",
            inject: false
        }),
        new ExtractTextPlugin({ filename: "main.css" })
    ]
};

module.exports = config;
