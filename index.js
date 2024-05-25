import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 3455;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
if (pinAnswer.pin === mypin) {
    console.log("Your Pin is Correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Pleae select option",
            type: "list",
            choices: ["withdraw", "Fast cash", "check balance"],
        }
    ]);
    // if user select withdraw
    if (operationAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance -= amountAns.amount;
            console.log(`The remaining balance is ${balance}`);
        }
        else {
            console.log(`You have insufficient balance`);
        }
    }
    //if user select fast cash
    else if (operationAns.operations === "Fast cash") {
        let FastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"]
            }
        ]);
        if (FastcashAns.amount <= myBalance) {
            let balance2 = myBalance - FastcashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log(`You have insufficient amount`);
        }
    }
    else if (operationAns.operations === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("your pin is wrong");
}
