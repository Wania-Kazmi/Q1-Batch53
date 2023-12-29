import inquirer from "inquirer";
import chalk from "chalk";
interface Item {
  [key: string]: string | number;
  id: number;
  item: string;
  price: number;
}

let paymentOPts = ["credit card", "cash", "Jazz Cash"];

/* paymentOPts.map((arr) => {
  console.log(arr);
}); */

let totalbill: number = 0;

let fruits: Item[] = [
  { id: 1, item: "Apple", price: 10 },
  { id: 2, item: "Orange", price: 20 },
  { id: 3, item: "Peach", price: 30 },
];
let vegetables: Item[] = [
  { id: 1, item: "Cucumber", price: 10 },
  { id: 2, item: "Potato", price: 20 },
  { id: 3, item: "Tomatto", price: 30 },
];

let getGrocery = async () => {
  let item = await inquirer.prompt([
    {
      name: "choice",
      type: "list",
      message: "What you would shop today \n",
      choices: ["Fruit", "Vegetable", "Checkout"],
    },
  ]);
  if (item.choice === "Fruit") {
    let fruit = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Which vegetable you like",
        choices: [fruits[0].item, fruits[1].item, fruits[2].item],
      },
    ]);
    let quan = await inquirer.prompt([
      {
        name: "quantity",
        type: "number",
        message: "Quantity:",
      },
    ]);
    if (fruit.choice === fruits[0].item) {
      totalbill = totalbill + quan.quantity * fruits[0].price;
    } else if (fruit.choice === fruits[1].item) {
      totalbill = totalbill + quan.quantity * fruits[1].price;
    } else if (fruit.choice === fruits[2].item) {
      totalbill = totalbill + quan.quantity * fruits[2].price;
    }
  }
  if (item.choice === "Vegetable") {
    let vegetable = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Which vegetable you like",
        choices: [vegetables[0].item, vegetables[1].item, vegetables[2].item],
      },
    ]);
    let quan = await inquirer.prompt([
      {
        name: "quantity",
        type: "number",
        message: "Quantity:",
      },
    ]);
    if (vegetable.choice === vegetables[0].item) {
      totalbill = totalbill + quan.quantity * vegetables[0].price;
    } else if (vegetable.choice === vegetables[1].item) {
      totalbill = totalbill + quan.quantity * vegetables[1].price;
    } else if (vegetable.choice === vegetables[2].item) {
      totalbill = totalbill + quan.quantity * vegetables[2].price;
    }
  }
  console.log(`Total Bill is ${totalbill}`);
  checkOut(totalbill);
};

let checkOut = async (totalbill: number) => {
  let check = await inquirer.prompt([
    {
      name: "checkout",
      type: "list",
      message: "What is your preffered checkout method",
      choices: paymentOPts,
    },
  ]);
  for (let i = 0; i < paymentOPts.length; i++) {
    if (check.checkout === paymentOPts[i]) {
      console.log(
        chalk.strikethrough(
          chalk.red(
            `Your payment of ${totalbill} is processed using ${check.checkout}`
          )
        )
      );
    }
  }
};

getGrocery();
