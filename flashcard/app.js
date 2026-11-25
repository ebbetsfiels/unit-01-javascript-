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
//checkpoint 3 
let current = 0;

function showCard(index) {
  const card = deck[index];
  document.getElementById("cardLabel").textContent = card.getLabel();
  document.getElementById("cardQuestion").textContent = card.question;

  const answerEl = document.getElementById("cardAnswer");
  answerEl.textContent = card.answer;
  answerEl.style.display = "none";

  document.getElementById("cardNumber").textContent =
    "Card " + (index + 1) + " of " + deck.length;
}

function flipCard() {
  const answerEl = document.getElementById("cardAnswer");
  if (answerEl.style.display === "none") {
    answerEl.style.display = "block";
  } else {
    answerEl.style.display = "none";
  }
}

function nextCard() {
  current = (current + 1) % deck.length;
  showCard(current);
}

function highlightCard() {
  document.getElementById("card").className = "card highlight";
}

function unhighlightCard() {
  document.getElementById("card").className = "card";
}

function checkKey(event) {
  if (event.key === "ArrowRight") {
    nextCard();
  }
}

function startApp() {
  showCard(current);

  document.getElementById("nextBtn").addEventListener("click", nextCard);

  const cardEl = document.getElementById("card");
  cardEl.onmouseover = highlightCard;
  cardEl.onmouseout = unhighlightCard;

  document.addEventListener("keydown", checkKey);
}
//checkpoint 4

let gotIt = 0;
let missed = 0;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleCard() {
  current = getRandom(0, deck.length - 1);
  showCard(current);
}

function updateScore() {
  const total = gotIt + missed;
  const scoreEl = document.getElementById("scoreMsg");

  if (total === 0) {
    scoreEl.textContent = "No cards scored yet.";
  } else {
    const percent = (gotIt / total) * 100;
    let feedback = "";

    if (percent >= 90) {
      feedback = "Exam ready!";
    } else if (percent >= 70) {
      feedback = "Almost there. Keep flipping.";
    } else {
      feedback = "Flip your missed cards again.";
    }

    scoreEl.textContent =
      gotIt +
      " of " +
      total +
      " correct (" +
      percent.toFixed(1) +
      "%). " +
      feedback;
  }
}

function markGot() {
  gotIt += 1;
  updateScore();
  nextCard();
}

function markMissed() {
  missed += 1;
  updateScore();
  nextCard();
}

function resetScore() {
  if (confirm("Reset your score to 0?")) {
    gotIt = 0;
    missed = 0;
    updateScore();
  }
}

function showCountdown() {
  const today = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((EXAM_DATE - today) / msPerDay);
  const formattedDate = EXAM_DATE.toLocaleDateString("en-US");
  const countdownEl = document.getElementById("countdown");

  if (daysLeft > 0) {
    countdownEl.textContent =
      daysLeft + " days until exam day (" + formattedDate + ")";
  } else {
    countdownEl.textContent =
      "Exam day is here (" + formattedDate + "). You've got this!";
  }
}

