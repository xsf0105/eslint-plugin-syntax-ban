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
                '@fe-base/beibei/no-console-time': 2,
            },
        },
    },
};
