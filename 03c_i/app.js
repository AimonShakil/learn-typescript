"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
const chalk_1 = __importDefault(require("chalk"));
const answer = await (0, prompts_1.input)({ message: 'Enter your name' });
console.log(typeof (answer));
//Select
let choice = await (0, prompts_1.select)({ message: 'Pls choose yor fav lang',
    choices: [
        { name: "TS/JS", value: "ts/js", description: "Typescript / JavaScript" },
        { name: "Tpython", value: "py", description: "Python Data Scientist " },
        { name: "Oracle", value: "oric", description: "Database" },
        new prompts_1.Separator(),
        { name: "C++", value: "c++", description: "c++", disabled: "temporarliy Disabled" },
    ],
});
console.log(choice);
//Checkbox
const result = await (0, prompts_1.checkbox)({
    message: 'Select a package manager',
    choices: [
        { name: 'npm', value: 'npm' },
        { name: 'yarn', value: 'yarn' },
        new prompts_1.Separator(),
        { name: 'pnpm', value: 'pnpm', disabled: true },
        {
            name: 'pnpm',
            value: 'pnpm',
            disabled: '(pnpm is not available)',
        },
    ],
});
console.log(result);
// NUMBER
let message = await (0, prompts_1.number)({ message: "Please enter your age" });
console.log(message);
//CONFIRM
let another_choice = await (0, prompts_1.confirm)({ message: " are you sure" });
console.log((another_choice));
//EXAMPLES:
//INPUT
const user_input = await (0, prompts_1.input)({ message: "Enter your Full Name :" });
console.log(chalk_1.default.bgCyan(`your full Name is ${user_input}`));
//Login Form with Select
