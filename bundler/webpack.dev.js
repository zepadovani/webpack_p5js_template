const { merge } = require('webpack-merge')  
const commonConfiguration = require('./webpack.common.js')

module.exports = merge(
    commonConfiguration,
    {
        mode: 'development',
        devServer:
        {
            host: "local-ip",
            static: {
                directory: '../dist',
            },
            open: true,
            https: false
        }
    }
)
