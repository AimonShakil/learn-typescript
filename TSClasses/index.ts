// 1st Project 

import inquirer from "inquirer";
import chalk from "chalk";
import { createRedirectInterceptor } from "undici-types/interceptors.js";
interface Item{

    [key:string]:string|number; //union literal for using both types
    // id:number; key is id item and price
    // item:string;
    // price:number;
}
let totalbill:number=0;
let paymentopts=["creditcard","cash","jazzcash"]
paymentopts.map((arr)=>{
    console.log(arr);
})
let fruits:Item[] = [
    { id:1,item:"Apple",price:10} ,   
    { id:2,item:"Orange",price:20} ,   
    { id:3,item:"Peach",price:30} ,
    { id:4,item:"Banana",price:40} ,   
]

let vegetables:Item[] = [
   {id:1,item:"Potato",price:10},
   {id:2,item:"Tomato",price:20},
   {id:3,item:"cucumber",price:30},
]

let getGrocery=async () =>{            //async: must execute first 
    let item=await inquirer.prompt([   //user dy ga value tb agy chly 
        {          //array of objects
        name:"choice",
        type:"list",
        message:"what do you want to shop today?",
        choices:["fruits","vegetables","checkout"],
    },
]);
  if(item.choice==="fruits")
  {
    let fruitsa=await inquirer.prompt([
        {
            name:"choice",
            type:"list",
            message:"what do you want to shop today" ,
          choices:[fruits[0].item,fruits[1].item,fruits[2].item,fruits[3].item]
        },
    ]);
    let quan=await inquirer.prompt([{
    
            name:"quantity",
            type:"number",
            message:"Quantity",
    }]);
    
  };
  let checkout=async (totalbill:number)=>{
    let check=await inquirer.prompt([{
     name:"checkout",
     type:"list",
     message:"What is your preffered checkout method?",
     choices:paymentopts,
    }]);
   
    for(let i=0;i<paymentopts.length;i++)
    {
    if(check.checkout===paymentopts[i])
    {
    console.log(chalk.magenta('your payment of ${totalbill} is being processed using ${check.checkout}'))
    }
    }
  }

};

getGrocery();