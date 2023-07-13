var startBtn = document.querySelector(".start");
var timeEl = document.querySelector(".time");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var result = document.querySelector(".result");


var secondsLeft = 50;
var questionIndex = 0;
var score = 0;
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "Strings", solution: false },
            { text: "Booleans", solution: false },
            { text: "Alerts", solution: true },
            { text: "Numbers", solution: false },
        ]
    },
    {
        question: "The condition in an if/ else statement is enclosed with:",
        answers: [
            { text: "Quotes", solution: false },
            { text: "Curly brackets", solution: false },
            { text: "Parenthesis", solution: true },
            { text: "square brackets", solution: false },
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: [
            { text: "Numbers and strings", solution: false },
            { text: "Other arrays", solution: false },
            { text: "Booleans", solution: false },
            { text: "All of the above", solution: true },
        ]
    },
    {
        question: "When assigning a string to a variable, it must be enclosed within:",
        answers: [
            { text: "Commas", solution: false },
            { text: "Curly brackets", solution: false },
            { text: "Quotes", solution: true },
            { text: "Parenthesis", solution: false },
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "JavaScript", solution: false },
            { text: "Terminal/bash", solution: false },
            { text: "For loops", solution: false },
            { text: "Console.log", solution: true },
        ]
    },

];

//display questions
function getQuestion() {
    var currentQuestion = questions[questionIndex];
    questionEl.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        var button = document.createElement("button");
        button.innerHTML = answers.text;
        answerEl.appendChild(button);


        if (answers.solution) {
            button.dataset.solution = answers.solution;
        }

        button.addEventListener("click", function (e) {
            var selectedAnswer = e.target;
            var isCorrect = selectedAnswer.dataset.solution === "true";
            if (isCorrect) {
                result.textContent = "Correct!";
                score++;
                // nextQuesiton();
            } else {
                result.textContent = "Wrong!";
                secondsLeft -= 10;
                // nextQuesiton();
            } 
            nextQuesiton();
        });

    });
}

//reset old question
function reset() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

//timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            done();
        }

    }, 1000);
}

//go to next question
function nextQuesiton() {
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        reset();
        getQuestion();
    } else {
        done();
    }
}

//end quiz
function done() {
    reset();
    questionEl.innerHTML = "All Done"; 
}

// previous scores
function previousScores() {

}




//start quiz
startBtn.addEventListener("click", function () {
    questionIndex = 0;
    score = 0;
    startBtn.style.display = "none";
    setTime();
    getQuestion();
    

});


