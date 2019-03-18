const isProdEnv = process.env.NODE_ENV === "production";
const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = [
    {
        name: 'server-webpack-config',
        mode: isProdEnv ? "production" : "development",
        context: path.join(__dirname, "src"),
        target: 'node',
        resolve: {
            modules: [
                path.resolve("./src"),
                "node_modules",
            ],
        },
        entry: './server.js',
        externals: [nodeExternals()],
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
            path: path.resolve(__dirname, "dist"),
            filename: "server-bundle.js",
        }
    },
    {
        name: 'client-webpack-config',
        mode: isProdEnv ? "production" : "development",
        context: path.join(__dirname, "src"),
        entry: './client.js',
        resolve: {
            modules: [
                path.resolve("./src"),
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
            path: path.resolve(__dirname, "dist/client-dist"),
            filename: "client-bundle.js",
        }
    }
];
