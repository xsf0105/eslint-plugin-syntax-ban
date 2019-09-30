'use strict';

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

module.exports = {
    rules: {
        'no-console-time': require('./rules/no-console-time'),
    },
    configs: {
        recommended: {
            rules: {
                'plugintutorial/no-console-time': 2, // 可以省略 eslint-plugin 前缀
            },
        },
    },
};
