const isProdEnv = process.env.NODE_ENV === "production";
const path = require("path");

module.exports = {
    mode: isProdEnv ? "production" : "development",
    context: path.join(__dirname, "src"),
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
}