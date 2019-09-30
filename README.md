# eslint-plugin-plugintutorial

#### 如何使用？
安装包
```js
npm install eslint-plugin-plugintutorial -D
```

项目中配置
`.eslintrc.js`
```js
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:eslint-plugin-plugintutorial/recommended'
    ],
    env: {
        node: true,
        browser: true
    },
    plugins: [
        'plugintutorial'
    ]
};
```
