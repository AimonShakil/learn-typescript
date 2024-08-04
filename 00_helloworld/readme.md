Hello World Steps:

Install Node.js from https://nodejs.org/

Install TypeScript 4.9+ using Node Package Manager command (https://www.typescriptlang.org/download):

 	npm install -g typescript
Install VSCode from https://code.visualstudio.com/Download

Read: https://bobbyhadz.com/blog/typescript-generate-tsconfig-json

Read: https://www.typescripttutorial.net/typescript-tutorial/typescript-hello-world/

Generate tsconfig.json by giving this command:

 tsc --init
If you want to run TypeScript tsc command in Windows Powershell:

Open Powershell in Adminstrator mode

Run command:

 Set-ExecutionPolicy RemoteSigned
Policy updated and now you can run tsc command in powershell.

For more Details Check this out

Make it a Node.js project by giving the following command:

 npm init -y
Install types for Node.js

 npm i @types/node -D
Create .gitignore file

Create file app.ts

We have used string type to store and print the message.

Note that the most basic types in TypeScript correspond to the seven basic kinds of primitives in JavaScript:

1. null
2. undefined
3. boolean // true or false
4. string // "", "Hello World"
5. number // 0, 5.1, -9
6. bigint // 0n, 5n, -10n
7. symbol // Symbol(), Symbol("hi"),
Transpile JavaScript by running:

 tsc
Run transpiled javascript by running the following command:

node app


## Node 
Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. 