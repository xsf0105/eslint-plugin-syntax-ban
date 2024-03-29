# eslint-plugin-syntax-ban

* 本文用于讲解如何禁用 JS 语法的 eslint plugin 的实现，以及使用。[详细讲解](https://juejin.im/post/5d91be23f265da5ba532a07e)

## Example
在前端工程中禁用 `console.time()` 和 `Object.value()` 方法。支持开发者继续拓展～

## How to use

```bash
yan add eslint-pulgin-syntax-ban

or

npm install eslint-plugin-syntax-ban -D
```

## How to config
`.eslintrc.js`
使用插件所有规则：
```diff
module.exports = {
    extends: [
+        'plugin:eslint-plugin-syntax-ban/recommended'
    ],
+    plugins: [
+        'syntax-ban' // 可省略 `eslint-plugin-` 前缀
+    ],
};
```

或单独使用插件中的条规则：
```diff
module.exports = {
+    plugins: [
+        'syntax-ban' // 可省略 `eslint-plugin-` 前缀
+    ],
+    rules: {
+        "syntax-ban/no-object-values": "error",
+    }
};
```
