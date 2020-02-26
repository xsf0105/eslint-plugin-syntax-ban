/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

// const RuleTester = require("../../tester")
let RuleTester = require('eslint').RuleTester;
const rule = require("../../../lib/rules/no-object-values.js")

new RuleTester().run("no-object-values", rule, {
    valid: ["Object", "Object.assign"],
    invalid: [
        {
            code: "Object.values",
            errors: ["ES2017 'Object.values' method is forbidden."],
        },
    ],
})
