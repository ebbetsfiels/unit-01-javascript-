"use strict";
const EXAM_DATE= new Date("2026,11,25")

function checkScreen(){
    if (window.innerwidth < 600){
        document.getElementById("scrrenMsg").textContent="small screen:turn your device sideways for a bigger card."
     } else{
        document.getElementById("screenMsg").textContent="window width:"+ window.innerwidth + "px"
     }
}
function startApp(){
    checkScreen();
}
// checkpoint2
// ==========================================
// Checkpoint 2: Your deck
// ==========================================

function getDomain(objective) {
  switch (objective.charAt(0)) {
    case "1":
      return "Operators, Methods, and Keywords";
    case "2":
      return "Variables, Data Types, and Functions";
    case "3":
      return "Decisions and Loops";
    case "4":
      return "Document Object Model";
    case "5":
      return "HTML Forms";
    default:
      return "Unknown domain";
  }
}

function Card(question, answer, objective) {
  this.question = question;
  this.answer = answer;
  this.objective = objective;

  this.getLabel = function () {
    return "Obj " + this.objective + " | " + getDomain(this.objective);
  };
}

const deck = [
  new Card(
    'What is the result of "5" + 3?',
    '"53" -- The + operator converts the number 3 to a string and concatenates them.',
    "1.1"
  ),
  new Card(
    "What does a++ return when evaluated in an expression?",
    "The original value of a -- Post-increment returns the value first, then adds 1.",
    "1.1"
  ),
  new Card(
    "What does typeof null return?",
    '"object" -- This is a well-known legacy bug in JavaScript.',
    "2.1"
  ),
  new Card(
    "What does typeof NaN return?",
    '"number" -- NaN stands for Not-a-Number, but its data type is still number.',
    "2.1"
  ),
  new Card(
    'What is the result of "5" == 5?',
    "true -- Loose equality converts the string to a number before comparing.",
    "3.1"
  ),
  new Card(
    'What is the result of "5" === 5?',
    "false -- Strict equality checks both value and data type without converting.",
    "3.1"
  ),
  new Card(
    "What is the result of NaN === NaN?",
    "false -- In JavaScript, NaN is never equal to anything, including itself.",
    "3.1"
  ),
  new Card(
    'What does parseInt("3.9") return?',
    "3 -- parseInt stops at the decimal point and drops everything after it.",
    "2.1"
  ),
  new Card(
    "What data type does the toFixed() method return?",
    "string -- toFixed() formats a number to fixed decimal places as a string.",
    "2.1"
  ),
  new Card(
    "What does Math.round(-2.5) return?",
    "-2 -- JavaScript rounds .5 toward positive infinity, which is -2 for -2.5.",
    "2.4"
  )
];
