// script.js
const quizContainer = document.getElementById('quiz');
const scoreContainer = document.getElementById('score');
const submitButton = document.querySelector('button');
const tipContainer = document.getElementById('tip')

const myQuestions = [
    {
        question: "1. What is the value of ∫(2x + 3) dx from x = 1 to x = 4?",
        answers: {
            a: "27\n", 
            b: "31\n",
            c: "35\n",
            d: "39\n"
        },
        correctAnswer: "b"
    },
    {
        question: "2. If A and B are two matrices such that A = [[1, 2], [3, 4]] and B = [[-1, 3], [2, -4]], then what is the value of A x B?",
        answers: {
            a: "[[3, 1], [5, 3]]",
            b: "[[1, 3], [5, 11]]",
            c: "[[5, -7], [11, -15]]",
            d: "[[1, -1], [-1, 1]]"
        },
        correctAnswer: "c"
    },
    {
        question: "3. If the roots of the equation x² - 5x + k = 0 are real and distinct, what is the range of values of k?",
        answers: {
            a: "k < 6",
            b: "k ≤ 6",
            c: "k ≥ 6",
            d: "k > 6"
        },
        correctAnswer: "a"
    },
    {
        question: "4. If the sum of the first n terms of an arithmetic progression is given by S(n) = 5n² - 3n, then what is the nth term of the progression?",
        answers: {
            a: "2n - 3",
            b: "3n - 2",
            c: "2n + 3",
            d: "3n + 2"
        },
        correctAnswer: "b"
    },
    {
        question: "5. If f(x) = 3x² - 4x + 1, then what is the value of f'(2)?",
        answers: {
            a: "10",
            b: "11",
            c: "12",
            d: "13"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    let output = '';

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output += `
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
        `;
    });

    quizContainer.innerHTML = output;
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;
    let tip="";

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect+=4;
        }
        else{
            numCorrect--;
        }
    });

    if(numCorrect<0){
        tip="Do no Attempt things you dont know.";
    }

    scoreContainer.innerHTML = `${numCorrect} out of ${myQuestions.length*4}`;
    tipContainer.innerHTML=`${tip}`
} 

buildQuiz();

submitButton.addEventListener('click', showResults);
