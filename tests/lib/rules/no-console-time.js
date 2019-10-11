'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

let rule = require('../../../lib/rules/no-console-time');

let RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

let ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 10,
    },
});

ruleTester.run('no-console-time', rule, {

    valid: [
        '_.time({a:1});',
        "_.time('abc');",
        "_.time(['a', 'b', 'c']);",
        "lodash.time('abc');",
        'lodash.time({a:1});',
        'abc.time',
        "lodash.time(['a', 'b', 'c']);",
    ],

    invalid: [
        {
            code: 'console.time()',
            errors: [
                {
                    messageId: 'avoidMethod',
                },
            ],
        },
        {
            code: "console.time.call({}, 'hello')",
            errors: [
                {
                    messageId: 'avoidMethod',
                },
            ],
        },
        {
            code: "console.time.apply({}, ['hello'])",
            errors: [
                {
                    messageId: 'avoidMethod',
                },
            ],
        },
        {
            code: 'console.time.call(new Int32Array([1, 2, 3, 4, 5]));',
            errors: 1,
        },
    ],
});
