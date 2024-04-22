// 1 - Start Letters
let letters = "abcdefghijklmnopqrstuvwxyz";
let LettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".container .row .letters");
LettersArray.forEach( letter => {
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className = 'letter-box';
    lettersContainer.appendChild(span);
});
// End Letters 

// 2 - Object Of Words + Categories
const words = {
    programming: ["php ", "javascript", "go", "scala", "css", "Html", "mysql", "python"],
    test: ["goq ", "goq ", "goq ", "goq ", "goq ", "goq ", "goq ", "goq "],
    movies: ["Prestige ", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein ", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine ", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber]

let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue =  randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

console.log("allKeys => " + allKeys);
console.log("Number Key  =>" + randomPropNumber);
console.log("Keys  =>" + randomPropName );
    
console.log("Value key => " + randomPropValue );
console.log("Number value => " + randomValueNumber );
console.log("value => " + randomValueValue );
// End Object Of Words + Categories

// Start Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace = Array.from(randomValueValue);

// Start Create Spans Depened On Word
lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");

    if (letter === ' '){
        emptySpan.className = 'with-space';
    }
    lettersGuessContainer.appendChild(emptySpan);
});

console.log("lettersAndSpace  =>  " + lettersAndSpace);
// End Letters Guess Element

// Start Handle Clicking On Letters
let guessSpans = document.querySelectorAll(".letters-guess span")
let wrongAttempts = 0;
let successAttempts = 0;
let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) =>{
    let theStatus = false;
    if(e.target.className === 'letter-box'){
        e.target.classList.add("clicked")

        let theClickedLetter = e.target.innerHTML.toLowerCase();
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        // If clicked true
        theChosenWord.forEach((wordLetter, wordIndex) => {
            if(theClickedLetter == wordLetter){
                theStatus = true;
                guessSpans.forEach( (span, spanIndex) => {

                    if(wordIndex === spanIndex){
                        span.innerHTML = theClickedLetter;
                    }

                });
            }
        });
        
        // If Clicked false
        if ( theStatus !== true ) {

            wrongAttempts++;

            theDraw.classList.add(`wrong-${wrongAttempts}`);
            
            // Stop Game
            if (wrongAttempts === 8) {
                lettersContainer.classList.add("finished");
                endGame()
            }

            console.log(theStatus);
            console.log(wrongAttempts);

        }else {
            
        }
    }
});
// End Handle Clicking On Letters

// End game function
function endGame() {
    let div = document.createElement("div");
    let divText = document.createTextNode(`Game over, the word is ${randomValueValue}`);
    div.appendChild(divText);
    div.className = 'popup';
    document.body.appendChild(div);
}