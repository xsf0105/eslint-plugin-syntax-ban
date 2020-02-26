/**
 * @fileoverview no console.time()
 * @author Allan91
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "no console.time()",
            category: "Fill something",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ],
        messages: {
            avoidMethod: "console method '{{name}}' is forbidden.",
        },
    },

    create: function(context) {
        return {
            'CallExpression MemberExpression': (node) => { // 键名为ast中选择器名
                // 如果在ast中满足以下条件，就用 context.report() 进行对外警告⚠️
                if (node.property.name === 'time' && node.object.name === 'console') {
                    context.report({
                        node,
                        messageId: 'avoidMethod',
                        data: {
                            name: 'time',
                        },
                    });
                }
            },
        };
    }
};
