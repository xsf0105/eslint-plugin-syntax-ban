# eslint-plugin-plugintutorial

- 本文用于讲解如何自己开发 `eslint` 插件以及如何在项目中使用。[TODO:详细讲解]()

#### 本插件如何使用？
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

#### 如何开发一个你自己的 eslint 插件

[TODO:详细讲解]()