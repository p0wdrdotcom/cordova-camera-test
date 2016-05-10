var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'client', 'index.js'),
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'www', 'js'),
        filename: 'dist.js',
        pathinfo: true,
        devtoolModuleFilenameTemplate: 'file:///[resource-path]'
    }
};