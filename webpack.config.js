const isProdEnv = process.env.NODE_ENV === "production";
const path = require( "path" );
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: isProdEnv ? "production" : "development",
    context: path.join( __dirname, "src" ),
    devtool: dev ? "none" : "source-map",
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    }
};
