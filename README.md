# eslint-plugin-demofortutorial

* 本文用于讲解如何自己开发 eslint 插件以及如何在项目中使用。[详细讲解](https://juejin.im/post/5d91be23f265da5ba532a07e)

## 本插件用途
在项目禁用 `console.time()` 和 `Object.value()` 方法。

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
        'plugin:eslint-plugin-demofortutorial/recommended' // 这里对应的是 eslint 插件中的 configs，如： `recommended`、`no-2017`等，用于集中管理配置多个 `rule` 规则
    ],
    plugins: [
        'demofortutorial' // 省略 `eslint-plugin-` 前缀
    ],`
    // rules 中对应 eslint 插件中的 `rules`，不同于上面 extends、可以单独配置某一条 `rule` 规则
    // rules: {
    //     "demofortutorial/no-object-values": "error"
    // }
};
```

