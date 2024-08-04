import { input, select, Separator, checkbox, number, confirm } from '@inquirer/prompts';
import chalk from 'chalk';

const answer = await input({ message: 'Enter your name' });
console.log(typeof(answer))

//Select

let choice = await select({message: 'Pls choose yor fav lang', 
    choices: [
        {name : "TS/JS" , value: "ts/js", description: "Typescript / JavaScript"},
        {name : "Tpython" , value: "py", description: "Python Data Scientist "},
        {name : "Oracle" , value: "oric", description: "Database"},
        new Separator(),
        {name : "C++" , value: "c++", description: "c++", disabled: "temporarliy Disabled"},

],
})
console.log(choice);

//Checkbox

const result = await checkbox({
    message: 'Select a package manager',
    choices: [
      { name: 'npm', value: 'npm' },
      { name: 'yarn', value: 'yarn' },
      new Separator(),
      { name: 'pnpm', value: 'pnpm', disabled: true },
      {
        name: 'pnpm',
        value: 'pnpm',
        disabled: '(pnpm is not available)',
      },
    ],
  });

  console.log(result)

// NUMBER
let message = await number ({message : "Please enter your age"})
console.log(message);

//CONFIRM
let another_choice = await confirm ({message : " are you sure"})
console.log((another_choice));











//EXAMPLES:
//INPUT
  const user_input = await input ({message :  "Enter your Full Name :"})
  console.log(chalk.bgCyan(`your full Name is ${user_input}`));
  

//Login Form with Select

