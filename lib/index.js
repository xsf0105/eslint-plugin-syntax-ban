/**
 * @fileoverview no console time
 * @author Allan91
 */
"use strict";

module.exports = {
    rules: {
        'no-console-time': require('./rules/no-console-time'),
        "no-object-values": require("./rules/no-object-values"),
    },
    configs: {
        recommended: {
            rules: {
                'demofortutorial/no-console-time': 2, // 可以省略 eslint-plugin 前缀
            },
        },
        "no-2017": {
            rules: {
                "demofortutorial/no-object-values": "error",
            }
        }
    },
};


