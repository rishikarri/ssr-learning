const path = require("path");
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = [
    merge(common, {
        name: 'server-webpack-config',
        target: 'node',
        entry: './server.js',
        externals: [nodeExternals()],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "server-bundle.js",
        }
    }),
    merge(common, {
        name: 'client-webpack-config',
        entry: './client.js',
        output: {
            path: path.resolve(__dirname, "dist/client-dist"),
            filename: "client-bundle.js",
        }
    })
];
