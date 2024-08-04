"use strict";
// 1st Project 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let totalbill = 0;
let paymentopts = ["creditcard", "cash", "jazzcash"];
paymentopts.map((arr) => {
    console.log(arr);
});
let fruits = [
    { id: 1, item: "Apple", price: 10 },
    { id: 2, item: "Orange", price: 20 },
    { id: 3, item: "Peach", price: 30 },
    { id: 4, item: "Banana", price: 40 },
];
let vegetables = [
    { id: 1, item: "Potato", price: 10 },
    { id: 2, item: "Tomato", price: 20 },
    { id: 3, item: "cucumber", price: 30 },
];
let getGrocery = () => __awaiter(void 0, void 0, void 0, function* () {
    let item = yield inquirer_1.default.prompt([
        {
            name: "choice",
            type: "list",
            message: "what do you want to shop today?",
            choices: ["fruits", "vegetables", "checkout"],
        },
    ]);
    if (item.choice === "fruits") {
        let fruitsa = yield inquirer_1.default.prompt([
            {
                name: "choice",
                type: "list",
                message: "what do you want to shop today",
                choices: [fruits[0].item, fruits[1].item, fruits[2].item, fruits[3].item]
            },
        ]);
        let quan = yield inquirer_1.default.prompt([{
                name: "quantity",
                type: "number",
                message: "Quantity",
            }]);
    }
    ;
    let checkout = (totalbill) => __awaiter(void 0, void 0, void 0, function* () {
        let check = yield inquirer_1.default.prompt([{
                name: "checkout",
                type: "list",
                message: "What is your preffered checkout method?",
                choices: paymentopts,
            }]);
        for (let i = 0; i < paymentopts.length; i++) {
            if (check.checkout === paymentopts[i]) {
                console.log(chalk_1.default.magenta('your payment of ${totalbill} is being processed using ${check.checkout}'));
            }
        }
    });
});
getGrocery();
