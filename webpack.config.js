const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sitemap = require("./sitemap.json");

const plugins = sitemap.map(function(page, i) {
    return new HtmlWebpackPlugin({
        filename: page.filename,
        template: page.template,

        dir: page.dir,

        inject: false
    });
});
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
const scss = {
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "clean-css-loader",
            options: {
                compatibility: "ie9",
                level: 2,
                inline: ["remote"]
            }
        },
        "postcss-loader",
        "sass-loader"
    ]
};
const config = {
    entry: { main: "./src/main.js" },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [babel, pug, scss]
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist/"),
        watchContentBase: true,
        port: 8000
    },
    plugins: [
        ...plugins,
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ]
};

module.exports = config;
