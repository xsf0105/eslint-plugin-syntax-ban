
const test = require('ava');
const index = require('../src/index');
const noConsoleTime = require('../src/rules/no-console-time');
const babelEslint =  require('babel-eslint');
const esquery = require('esquery');

test('index output', (t) => {
    t.plan(2);
    t.is(Object.keys(index.rules).length, 2);
    t.is(Object.keys(index.configs.recommended.rules).length, 2);
});

test('no-console-time', (t) => {
    t.is(Object.keys(noConsoleTime.meta.docs).length, 3);
    t.is(noConsoleTime.meta.fixable, null);
    t.is(noConsoleTime.meta.schema.length, 0);
    t.is(noConsoleTime.meta.messages.avoidMethod, "console method '{{name}}' is forbidden.");
    t.is(Object.keys(noConsoleTime.create({
        report: () => null,
    })).length, 1);
    const result = babelEslint.parseForESLint(`
        console.time(123)
        function b() {}`, {
        ecmaVersion: 10,
        sourceType: 'module',
    });
    const selectorAst = esquery.parse('CallExpression MemberExpression');
    const matches = esquery.match(result.ast, selectorAst);
    matches.forEach((node) => {
        t.is(noConsoleTime.create({
            report: () => null,
        })['CallExpression MemberExpression'](node), undefined);
    });
});
