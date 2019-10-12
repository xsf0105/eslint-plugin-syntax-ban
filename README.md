# eslint-plugin-demofortutorial

* 本文用于讲解如何自己开发 eslint 插件以及如何在项目中使用。[详细讲解](https://juejin.im/post/5d91be23f265da5ba532a07e)

## 本插件用途
在项目禁用 `console.time()` 方法。

## 本插件如何使用？
安装包
```
npm install eslint-plugin-demofortutorial -D
```

## 项目中配置
`.eslintrc.js`
```
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:eslint-plugin-demofortutorial/recommended'
    ],
    plugins: [
        'demofortutorial'
    ]
};
```

