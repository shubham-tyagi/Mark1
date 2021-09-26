var readLineSync = require("readline-sync");
let name = readLineSync.question("Enter your name pls : ");
console.log("Welcome,", name);

var questionAnswers = [
	{
		question: "What is my home town : ",
		answer: "ghaziabad",
	},
	{
		question: "What is my favourite color : ",
		answer: "black",
	},
	{
		question: "What is my Age : ",
		answer: "21",
	},
	{
		question: "What do i prefer Mountains or Beaches : ",
		answer: "mountains",
	},
	{
		question: "What is my favourite sport : ",
		answer: "cricket",
	},
];

function askQuestions() {
	let count = 0;
	for (let i = 0; i < questionAnswers.length; i++) {
		let ans = readLineSync.question(questionAnswers[i].question);
		if (ans.toLowerCase() == questionAnswers[i].answer.toLowerCase()) count++;
	}
	// count++;
	return count;
}
let score = askQuestions();
console.log("Your score is ", score);
