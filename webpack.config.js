'use strict';

let fs = require('fs');
let path = require('path');
let rimraf = require('rimraf');
let isBuild = process.env.WEBPACK_ENV === 'build'; // eslint-disable-line

// 处理入口文件
// const ENTRY_DIR = __dirname + '/src';
const ENTRY_DIR = path.resolve('./src');

let entryObj = {};
let readDirToEntryObj = (dir) => {
    let files = fs.readdirSync(dir);

    files.forEach((fileName) => {
        let isFile = fs.statSync(path.join(dir, fileName)).isFile();
        let filePath = `${dir}/${fileName}`;

        if (!isFile) {
            readDirToEntryObj(filePath);
        } else if (/\.js$/i.test(fileName)) {
            entryObj[filePath.replace(`${ENTRY_DIR}/`, '')
                .replace(/\.js$/i, '')] = filePath;
        }
    });
};

readDirToEntryObj(ENTRY_DIR);

// 处理外部引用
let packageJson = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf-8'));
let externalsObj = {};

if (packageJson.dependencies) {
    for (let key in packageJson.dependencies) {
        externalsObj[key] = key;
    }
}

// 处理loaders
let loaders = [
    {
        test: /\.json$/,
        loader: 'json-loader',
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
    },
    {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    browsers: ['android >= 4.0', 'ios_saf >= 7.0'],
                    remove: false,
                },
            },
        ],
    },
];

if (isBuild) {
    loaders = loaders.concat([
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader?minimize',
                {
                    loader: 'postcss-loader',
                    options: {
                        browsers: ['android >= 4.0', 'ios_saf >= 7.0'],
                        remove: false,
                    },
                },
                'less-loader?sourceMap',
            ],
        },
    ]);
} else {
    loaders = loaders.concat([
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        browsers: ['android >= 4.0', 'ios_saf >= 7.0'],
                        remove: false,
                    },
                },
                'less-loader?sourceMap',
            ],
        },
    ]);
}

// 处理plugins
let plugins = [];

if (isBuild) {
    plugins = plugins.concat([]);
}

// 处理output
let outputObj = {
    path: path.resolve('./lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
};

if (isBuild) {
    // 删除构建目录下的文件
    rimraf.sync(path.resolve('./lib'));
}

let config = {
    entry: entryObj,
    devtool: isBuild ? false : 'source-map',
    output: outputObj,
    externals: externalsObj,
    resolve: {
        modules: [
            path.join('./src'),
            'node_modules',
        ],
        extensions: ['.js', '.xtpl', '.less', '.json'],
    },
    module: {
        rules: loaders,
    },
    plugins,
};

module.exports = config;
