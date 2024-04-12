var audio = new Audio("C:\\Users\\daw10\\OneDrive\\Documentos\\PROG1185 - JAVA - DImitri\\Login_Maryssa\\WebsiteEOY\\SOUNDS\\Community Page.mp3");
audio.play();

// Characters.js
document.addEventListener("DOMContentLoaded", function() {
    const charactersData = [
        { image: "../IMAGES/Characters/Alice.png", description: "Alice : The seven-year-old protagonist of the story. Alice believes that the world is orderly and stable, and she has an insatiable curiosity about her surroundings. Wonderland challenges and frustrates her perceptions of the world." },
        { image: "../IMAGES/Characters/White Rabbit.jpg", description: "White Rabbit : The frantic, harried Wonderland creature that originally leads Alice to Wonderland. The White Rabbit is figure of some importance, but he is manic, timid, and occasionally aggressive." },
        { image: "../IMAGES/Characters/Queen and King Hearts.jpg", description: "King and Queen of Hearts : The ruler of Wonderland. The Queen is severe and domineering, continually screaming for her subjects to be beheaded. The coruler of Wonderland. The King is ineffectual and generally unlikeable, but lacks the Queen’s ruthlessness and undoes her orders of execution." },
        { image: "../IMAGES/Characters/Cheschire Cat.jpg", description: "Cheschire Cat : A perpetually grinning cat who appears and disappears at will. The Cheshire Cat displays a detached, clearheaded logic and explains Wonderland’s madness to Alice." },
        { image: "../IMAGES/Characters/The Duchess.png", description: "The Duchess : The Queen’s uncommonly ugly cousin. The Duchess behaves rudely to Alice at first, but later treats her so affectionately that her advances feel threatening." },
        { image: "../IMAGES/Characters/Caterpillar.jpg", description: "The Caterpillar : A Wonderland creature. The Caterpillar sits on a mushroom, smokes a hookah, and treats Alice with contempt. He directs Alice to the magic mushroom that allows her to shrink and grow." },
        { image: "../IMAGES/Characters/Mad Hatter.jpg", description: "The Mad Hatter : A small, impolite hatter who lives in perpetual tea-time. The Mad Hatter enjoys frustrating Alice." },
        { image: "../IMAGES/Characters/Dormouse.webp", description: "Dormouse : The Mad Hatter and March Hare’s companion. The Dormouse sits at the tea table and drifts in and out of sleep." },
        { image: "../IMAGES/Characters/Knav Of Hearts.jpg", description: "The Knave of Hearts : An attendant to the King and Queen. The Knave has been accused of stealing the Queen’s tarts." },
        { image: "../IMAGES/Characters/The Dodo.jpg", description: "The Dodo : A Wonderland creature. The Dodo tends to use big words, and others accuse him of not knowing their meanings. He proposes that the animals participate in a Caucus race" },
        { image: "../IMAGES/Characters/The Cook.jpg", description: "The Cook : The Duchess’s cook, who causes everyone to sneeze with the amount of pepper she uses in her cooking. The Cook is ill-tempered, throwing objects at the Duchess and refusing to give evidence at the trial." },
        { image: "../IMAGES/Characters/The Pigeon.jpg", description: "The Pigeon : A Wonderland creature who believes Alice is a serpent. The pigeon is sulky and angry and thinks Alice is after her eggs." },
        { image: "../IMAGES/Characters/257.jpg", description: "Two, Five and Seven : The playing-card gardeners. Two, Five, and Seven are fearful and fumbling, especially in the presence of the Queen." },
        { image: "../IMAGES/Characters/BillLizard.jpg", description: "The Lizard : Bill is perceived by Alice to be someone who does all of the hard work for the White Rabbit and the other denizens of Wonderland." },
        { image: "../IMAGES/Characters/Frog Footman.jpg", description: "The Frog Footman : The Duchess’s footman. The Frog-footman is stupid and accustomed to the fact that nothing makes sense in Wonderland" },
        { image: "../IMAGES/Characters/M.webp", description: "Mallymkun : Portrayed as a white female mouse named Mallymkun, or Mally for short. She is a swordfighter in training and she also has a secret love for the Mad Hatter" },
        { image: "../IMAGES/Characters/Tweedlebum.jpg", description: "Tweedledum : Identical twins and two fat brothers dressed in schoolboy uniforms and wearing red propeller caps. They take particular delight in reciting poems and songs. They're playful and jolly, which can make them seem a little annoying. They enjoy company and will always insist in a little game." },
        { image: "../IMAGES/Characters/March Hare.jpg", description: "The March Hare : The Mad Hatter’s tea-time companion. The March Hare takes great pleasure in frustrating Alice." },
    ];
    const main = document.querySelector('main');
    let previousPopUp = null;

    charactersData.forEach((character) => {
        // Create character container
        const characterContainer = document.createElement('div');
        characterContainer.classList.add('character');

        // Create image element
        const image = document.createElement('img');
        image.src = character.image;
        image.alt = character.description;

        // Append image to character container
        characterContainer.appendChild(image);

        const popupTextBox = document.createElement('div');
        popupTextBox.classList.add('popup');
        popupTextBox.style.display = 'none';
        popupTextBox.innerHTML = `<p>${character.description}</p>`;

        characterContainer.appendChild(popupTextBox);

        // Append character container to main
        main.appendChild(characterContainer);

        characterContainer.addEventListener('click', (event) => {
            if(previousPopUp && previousPopUp !== popupTextBox) {
                previousPopUp.style.display = 'none';
            }
            popupTextBox.style.display = popupTextBox.style.display === 'none' ? 'block' : 'none';
            previousPopUp = popupTextBox;
        });

    });
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