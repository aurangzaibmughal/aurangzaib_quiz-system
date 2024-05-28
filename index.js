#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.what is the correct way to check if two values are not equal in typescript?",
        choices: ["a == b", "a===b", "a = b", "a != b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2 . which of follwing charecters is the commonly allowed in veriable name in typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.which operator is commonly use for starting concatenation in typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.In typescript , whish symbol is commonly used to terminate?",
        choices: [".", ",", ";", ":"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.which method of inquirer.js is used to start the prompt in typescript?",
        choices: ["start()", "Prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a != b":
        console.log("1.Correct!");
        ++score;
        break;
    default:
        console.log("1.Incorrect!");
}
switch (quiz.question_2) {
    case "$":
        console.log("2.Correct!");
        ++score;
        break;
        22;
    default:
        console.log("2.Incorrect!");
}
switch (quiz.question_3) {
    case "+":
        console.log("3.Correct!");
        ++score;
        break;
    default:
        console.log("3.Incorrect!");
}
switch (quiz.question_4) {
    case ";":
        console.log("4.Correct!");
        ++score;
        break;
    default:
        console.log("4.Incorrect!");
}
switch (quiz.question_5) {
    case "Prompt()":
        console.log("5.Correct!");
        ++score;
        break;
    default:
        console.log("5.Incorrect!");
}
console.log(`Score: ${score}`);
