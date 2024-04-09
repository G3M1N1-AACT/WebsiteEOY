/*=================================================
Audio Playback
=================================================*/
var audio = new Audio("C:\\Users\\daw10\\OneDrive\\Documentos\\PROG1185\\WebsiteEOY\\SOUNDS\\AIW.mp3");
audio.play();

/*=================================================
Variables Declaration
=================================================*/
var quiz = document.getElementById("quizPopup");
var quizButton = document.getElementById("quizButton");
const correctAnswers = ['b', 'c', 'b', 'd', 'd', 'a', 'd', 'b', 'c', 'd', 'b', 'b', 'c', 'b', 'd', 'c', 'b', 'c'];
const body = document.body;

/*=================================================
Quiz Popup Display
=================================================*/
quizButton.addEventListener("click", function () {
    quiz.style.display = 'block';
});

/*=================================================
Quiz Popup Hide
=================================================*/
function closeQuiz() {
    quiz.style.display = 'none';
}
document.querySelector("#closeQuiz").addEventListener('click', closeQuiz);
/*=================================================
Checking Answers
=================================================*/
function submitAndCheckAnswers() {
    let score = 0;

    for(let i=0; i<correctAnswers.length; i++) {
        let questionNum = i+1;
        let userAnswer = document.querySelector(`input[name="question${questionNum}"]:checked`);

        let answers = document.querySelectorAll(`input[name="question${questionNum}"]`);

        // clear previous answers
        for (let answer of answers) {
            answer.parentNode.classList.remove("correct", "incorrect");
        }
        
        if(userAnswer && userAnswer.value === correctAnswers[i]) {
            userAnswer.parentNode.classList.add("correct");
            score++;
        } else {
            if (userAnswer) {
                userAnswer.parentNode.classList.add("incorrect");
            }
            // highlight the correct answer
            for (let answer of answers) {
                if (answer.value === correctAnswers[i]) {
                    answer.parentNode.classList.add("correct");
                    break;
                }
            }
        }
    }

    alert(`Your total score is ${score} out of ${correctAnswers.length}.`);

    // Reset all answers
    let allAnswers = document.querySelectorAll("input[type=radio]");
    for(let i=0; i<allAnswers.length; i++) {
        allAnswers[i].checked = false;
    }
}
document.querySelector("#submitQuiz").addEventListener('click', submitAndCheckAnswers);

/*================================================
Quiz closure
==================================================*/
function closeQuiz() {
    quiz.style.display = 'none';
}

/*=================================================
Quiz Button Event
=================================================*/
document.querySelector("#quizButton").addEventListener("click", function () {
    document.querySelector("#quizPopup").style.display = "block";
    document.querySelector("#closeQuiz").addEventListener("click", closeQuiz);
});
