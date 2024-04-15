// JavaScript for dynamic header navigation links
document.addEventListener("DOMContentLoaded", function() {
  const pages = [
      {link:"index.html", text:"Home"},
      {link:"Characters.html", text:"Characters"},
      {link:"Games.html", text:"Games"},
      {link:"Story.html", text:"Story"},
  ];
  const navigation = document.querySelector('#navigation-list');
  pages.forEach(page => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = page.link;
      link.textContent = page.text; 
      listItem.appendChild(link);
      navigation.appendChild(listItem);
  });
});

var allQuestions = [
    {
      question: "Who wrote Alice in Wonderland?",
      options: ["Lewis Carroll", "J.K. Rowling", "Roald Dahl", "Stephen King"],
      answer: 0
    }, 
    {
      question: "What year was Alice's Adventures in Wonderland published?",
      options: ["1865", "1965", "1915", "1800"],
      answer: 0
    },
    {
      question: "What is the queen's famous line in the book?",
      options: ["Off to the guillotine", "Banish her", "Off with her head", "Imprison her"],
      answer: 2
    },
    {
      question: "What wastes away time?",
      options: ["Caterpillar", "Mad Hatter", "Cheshire Cat", "White Rabbit"],
      answer: 3
    },
    {
      question: "What did Alice fall down?",
      options: ["Rabbit hole", "Staircase", "Cliff", "Well"],
      answer: 0
    }, 
    {
      question: "What is the color of the roses the gardeners were painting?",
      options: ["Red", "White", "Blue", "yellow"],
      answer: 0
    },
    {
      question: "Who illustrated the original Alice's Adventures in Wonderland?",
      options: ["John Tenniel", "Quentin Blake", "Beatrix Potter", "Lewis Carroll"],
      answer: 0
    },
    {
      question: "What is the name of Alice's cat?",
      options: ["Tigger", "Duchess", "Dinah", "Mittens"],
      answer: 2
    },
    {
      question: "What does the bottle that Alice drinks say?",
      options: ["Drink me", "Open me", "Eat me", "Taste me"],
      answer: 0
    },
    {
      question: "From which English city does Alice hail from?",
      options: ["Oxford", "Cambridge", "Bristol", "York"],
      answer: 0
    },
    {
      question: "Whose house did Alice visit?",
      options: ["White Rabbit's", "Mad Hatter's", "Cheshire Cat's", "Queen of Hearts'"],
      answer: 0
    },
    {
      question: "What classic game is parodied in the Queen's garden?",
      options: ["Chess", "Checkers", "Croquet", "Polo"],
      answer: 2
    },
    {
      question: "Whom does Alice meet at the tea party?",
      options: ["White Rabbit and Cheshire Cat", "Mad Hatter and March Hare", "Tweedledee and Tweedledum", "Queen and King of Hearts"],
      answer: 1
    }
  ];

  var currentQuestion = 0;

function loadQuestion() {
  if(currentQuestion >= allQuestions.length) {
    document.getElementById("question").textContent = "End of Quiz!";
    return;
  }
  document.getElementById("question").textContent = allQuestions[currentQuestion].question;
  var options = allQuestions[currentQuestion].options;
  for (var i = 0; i < options.length; i++) {
    document.getElementById("btn" + i).textContent = options[i];
    document.getElementById("btn" + i).onclick = checkAnswer(i);
  }
}

function checkAnswer(i) {
  return function() {
    var correctAnswer = allQuestions[currentQuestion].answer;
    if (i === correctAnswer) {
      document.getElementById("result").textContent = "Correct!";
      document.getElementById("result").style.color = "green";
    } else {
      document.getElementById("result").textContent = "Wrong answer!";
      document.getElementById("result").style.color = "red";
    }
  }
}

function loadNextQuestion() {
  currentQuestion++;
  document.getElementById("result").textContent = "";
  loadQuestion();
}

// Load the first question
loadQuestion();

var facts = [
    "Fact 1: Alice in Wonderland is inspired by a real girl named Alice Liddell.",
    "Fact 2: The story was first told during a boat trip on the River Thames in Oxford.",
    "Fact 3: The character known as the Mad Hatter is never actually referred to as 'Mad Hatter' in the book, only 'the Hatter'.",
    "Fact 4: The Cheshire Cat is named after a cheese that was molded into the shape of a grinning cat.",
    "Fact 5: The Queen of Hearts is often considered to represent Queen Victoria.",
    "Fact 6: In the original book, the Queen’s soldiers are actually cards, not men.",
    "Fact 7: Charles Dodgson, better known as Lewis Carroll, was a mathematician and Logic professor at Christ Church College, Oxford.",
    "Fact 8: The White Rabbit's pocket watch plays a key role in the story.",
    "Fact 9: Alice is often viewed as a symbol of the end of childhood innocence.",
    "Fact 10: The story is known for its unusual, dreamlike, and seemingly random qualities.",
    "Fact 11: Alice's Adventures in Wonderland was first published in 1865.",
    "Fact 12: The book was initially banned in China because animals should not use human language.",
    "Fact 13: In the story, time has been arrested because the Mad Hatter had an argument with Time.",
    "Fact 14: The phrase 'Mad as a Hatter' comes from the fact that hatters used to use mercury in hat making which affected their nerves causing them to twitch.",
    "Fact 15: The characters of Tweedledum and Tweedledee did not appear until the sequel, Through the Looking-Glass, and What Alice Found There.",
    "Fact 16: Some people interpret the story of Alice in Wonderland as a political satire against the Victorian monarchy.",
    "Fact 17: Walt Disney’s adaptation of Alice's Adventures in Wonderland is one of the most famous versions of the story.",
    "Fact 18: Lewis Carroll also wrote poetry, phantasmagoria, and acrostics.",
    "Fact 19: Alice Liddell insisted Lewis Carroll write down the story, which eventually became Alice's Adventures in Wonderland.",
    "Fact 20: John Tenniel, the illustrator of the original books, was a political cartoonist for Punch magazine."
];
  
  function showFact() {
    // random index for accessing facts
    var index = Math.floor(Math.random() * facts.length);

    var factButton = document.querySelector('.fact-button');
    var clickSound = document.getElementById('clickSound');
    
    factButton.addEventListener('click', function() {
        clickSound.play();
    });   
    
    // display the fact
    document.getElementById("funFact").style.display = "block";
    document.getElementById("funFact").innerHTML = facts[index];
  }

  document.querySelector('.fact-button').addEventListener('click', function(event){
    var mainElem = document.querySelector('#main-content')
    var rect = mainElem.getBoundingClientRect();
    
    var maxX = rect.width - this.offsetWidth;
    var maxY = rect.height - this.offsetHeight;

    var randomX = Math.floor(Math.random()*maxX);
    var randomY = Math.floor(Math.random()*maxY);

    this.style.position = 'absolute';
    this.style.left = rect.left + randomX + 'px';
    this.style.top = rect.top + randomY + 'px';
    
    var funFact = document.getElementById('funFact')
    funFact.style.position = 'absolute';
    funFact.style.left = rect.left + Math.floor(Math.random()*maxX) + 'px';
    funFact.style.top = rect.top + Math.floor(Math.random()*maxY) + 'px';
});

// JavaScript for Footer enhancement
let currentYear = new Date().getFullYear(); // Get current year
let copyRightEl = document.querySelector('&copy; 2024 Down the Rabbit Hole') // Select the paragraph where copyright year is mentioned
let oldText = copyRightEl.innerText; // Store the existing text
copyRightEl.innerText = oldText.replace('2024', currentYear); // Replace '2024' with current year

let emailField = document.querySelector('#userEmail'); // ID of the email input field in your form
let form = document.querySelector('#emailForm'); // ID of your form

form.addEventListener('submit', function(event) {
  let email = emailField.value; // get input value
  let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; // basic regex for email validation

  if (!regex.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault(); // prevent form from submitting
  }
});