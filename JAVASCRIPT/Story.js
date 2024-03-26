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
const correctAnswers = ["b", "c", "a", "b", "d", "c"];
const body = document.body;

/*=================================================
Quiz Popup Display
=================================================*/
quizButton.addEventListener("click", function () {
    quiz.classList.add('popup-hidden');
    overlay.classList.add('overlay-hidden');
});

/*=================================================
Quiz Popup Hide
=================================================*/
function closeQuiz() {
    quiz.classList.remove("popup-visible");
    quiz.classList.add("popup-hidden");
}

/*=================================================
Checking Answers
=================================================*/
function checkAnswer() {
    for (let i = 0; i < correctAnswers.length; i++) {
        let selectedAnswer;
        let answers = document.querySelectorAll(`input[name="question${i + 1}"]`);

        for (let answer of answers) {
            answer.parentNode.classList.remove("correct", "incorrect");

            if (answer.checked) {
                selectedAnswer = answer.value;

                if (selectedAnswer === correctAnswers[i]) {
                    answer.parentNode.classList.add("correct");
                    alert("Correct Answer");
                } else {
                    answer.parentNode.classList.add("incorrect");
                    alert("Incorrect Answer");
                }
            }
        }
    }
}

/*=================================================
Quiz Button Event
=================================================*/
document.querySelector("#quizButton").addEventListener("click", function () {
    document.querySelector("#quizPopup").style.display = "block";
});