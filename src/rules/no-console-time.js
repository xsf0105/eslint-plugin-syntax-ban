module.exports = {
    meta: {
        docs: {
            description: 'no console time',
            category: 'console methods',
            recommended: true,
        },
        fixable: null,
        schema: [],
        messages: {
            avoidMethod: "console method '{{name}}' is forbidden.",
        },
    },

    create(context) {
        return {
            'CallExpression MemberExpression': (node) => {
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
    },
};
