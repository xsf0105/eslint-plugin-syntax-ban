let webpack = require('webpack');
process.env.WEBPACK_ENV = 'build';

webpack(require('./webpack.config.js'), (err, stats) => {
    if (err) {
        throw err;
    }
    process.stdout.write(`${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
    })}\n`);
});
