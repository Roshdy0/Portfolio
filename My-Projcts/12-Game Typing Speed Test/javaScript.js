/*
    Advices
    - Always Check The Console
    - Take Your Time To Name The Identifiers
    - DRY

    Steps To Create The Project
    
    [01] Create HTML Markup
    [02] Add Styling And Separate From Logic
    [03] Create The App Logic

    ---- [01] Add Levels
    ---- [02] Show Level And Seconds

    ---- [03] Add Array Of Words
    ---- [04] ِAdd Start Game Button

    ---- [05] Generate Upcoming Words
    ---- [06] Disable Copy Word And Paste Event + Focus On Input
    ---- [07] Start Play Function
    ---- [08] Start The Time And Count Score
    ---- [09] Add The Error And Success Messages

// Stop 1 

    [04] Your Trainings To Add Features
    ---- [01] Save Score To Local Storage With Date
    ---- [02] Choose Levels From Select Box  [Done]
    ---- [03] Break The Logic To More Functions [Done]
    ---- [04] Choose Array Of Words For Every Level [Done]
    ---- [05] Write Game Instruction With Dynamic Values [Done]
    ---- [06] Add 3 Seconds For The First Word

    New Learn
        1 - turn type from sting to number
            name = "20";    =>      parseInt(name);

        2 - turn variable from local to global 
            var nameVariable = value;    
                =>
            nameFunction();             ->      A - run function it have variable
            nameVariable = value;       ->      B - use variable without keywords

        3 - Replace newArray with oldArray
            oldArray.splice(0, oldArray.length, ...newArray);

        4 - Conditional Operators
            ( = )   =>  Assignment operator -> nameVariable = value
            ( == )  =>  Comparison operator -> Comparison value
            ( === ) =>  Identical  operator -> Data Type
*/

    const words = [
        "Hello", "Programming", "Code", "Javascript", "Town", "Country", "Testing", "Youtube", "Linkedin", "Twitter", "Github", "Leetcode", "Internet", "Python", "Scala", "Destructuring", "Paradigm", "Styling", "Cascade", "Documentation", "Coding", "Funny", "Working", "Dependencies", "Task", "Runner", "Roles", "Test", "Rust", "Playing"
    ];

    const wordsEasy = [
        "Code", "Town", "Font","Task", "Test"
    ]

    const wordsNormal = [
        "Country", "Testing", "Youtube", "Twitter", "Github", "Python", "Paradigm", "Styling", "Cascade", "Runner", "Playing"
    ]

    const wordsHard = [
        "Programming", "Javascript", "Linkedin", "Leetcode", "Internet", "Destructuring", "Documentation", "Dependencies"
    ]

    const lvls = {
        "Easy": 5, 
        "Normal": 3, 
        "Hard": 2
    };

// All Variable
let startButton = document.querySelector(".start"),
    lvlNameSpan = document.querySelector(".message .lvl"),
    secondsSpan = document.querySelector(".message .seconds"),
    theWord = document.querySelector(".the-word"),
    upcomingWords = document.querySelector(".upcoming-words"),
    input = document.querySelector(".input"),
    timeLeftSpan = document.querySelector(".time span"),
    scoreGot = document.querySelector(".score .got"),
    scoreTotal = document.querySelector(".score .total"),
    finishMessage = document.querySelector(".finish"),

// Select Level
    chose = document.querySelector(".chose"),
    levels = document.querySelector(".levels"),
    allLevels = document.querySelectorAll(".levels"),
    level = document.querySelector(".level"),
    buttonEasy = document.querySelector(".level.easy"),
    buttonNormal = document.querySelector(".level.normal"),
    buttonHard = document.querySelector(".level.hard"),

// Hint
    buttonHint = document.querySelector(".instruction .button"),
    boxHint = document.querySelector(".instruction .ex");

// 1 - Disable paste event in input 
input.onpaste = function () {
    return false;
}


// 2 - Hint
buttonHint.onclick = function() {

    if (boxHint.classList == ("ex") ) {
        boxHint.classList.add("popup") ;
    } else {
        boxHint.classList.remove("hiddenPopup") ;
    }

    // When click boxHint will hidden
        boxHint.onclick = function() {
            boxHint.classList.add("hiddenPopup");
        }
}


// 2 - show list level
chose.onclick = function() {
    levels.classList.toggle("active");
}


// 3 - Start select level ( Easy - Normal - Hard )
buttonEasy.onclick = function() {
    funEasy() ;
    funTime() ;
}

buttonNormal.onclick = function() {
    funNormal() ;
    funTime() ;
}

buttonHard.onclick = function() {
    funHard();
    funTime() ;
}


// 4 - When click button start function genWords will start
startButton.onclick = function () {
    this.remove();
    input.focus();

    // Generate word function 
    genWords();
}

// Default Level 
funEasy() ;
funTime() ;


// All function 

function funEasy() {
    // Show level east and display other level
        buttonEasy.classList.toggle("active");
        buttonNormal.classList.toggle("hidden");
        buttonHard.classList.toggle("hidden");

    // Replace array words with array words easy 
    words.splice(0, words.length, ...wordsEasy);

    // change level name
    defaultLevelName = "Easy";
    let defaultLevelSeconds = lvls[defaultLevelName];
    
    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;
}

function funNormal() {
    buttonNormal.classList.toggle("active");
    buttonEasy.classList.toggle("hidden");
    buttonHard.classList.toggle("hidden");
    words.splice(0, words.length, ...wordsNormal);

    defaultLevelName = "Normal";
    defaultLevelSeconds = 3;

    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;
}

function funHard() {
    buttonHard.classList.toggle("active");
    buttonEasy.classList.toggle("hidden");
    buttonNormal.classList.toggle("hidden");
    words.splice(0, words.length, ...wordsHard);

    defaultLevelName = "Hard";
    defaultLevelSeconds = 2;

    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;
}

function funTime() {
    if ( defaultLevelName == "Easy" ) {
        defaultLevelSeconds = 5;
    } else if ( defaultLevelName == "Normal") {
        defaultLevelSeconds = 3;
    } else {
        defaultLevelSeconds = 2;
    }
}

// Create function Generate word and startPlay will start
function genWords() {
    // Get random word from array
    let randomWord = words[Math.floor(Math.random() * words.length)];

    // get word index
    let wordIndex = words.indexOf(randomWord);

    // remove word from array 
    words.splice(wordIndex, 1);

    // Show the random word
    theWord.innerHTML = randomWord;
    // empty upcoming words 
    upcomingWords.innerHTML = ' ';

    // Generate Words 
        for (let i = 0; i < words.length; i++){
            let div = document.createElement("div");
            let txt = document.createTextNode(words[i]);
            div.appendChild(txt);
            upcomingWords.appendChild(div);
        }

    // Call start play function
    startPlay() ;
}

// Create function Start Play 
function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds

    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;

        if (timeLeftSpan.innerHTML === "0") {
            clearInterval(start);
            
            // Compare Words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                scoreGot.innerHTML++;
                
                if (words.length > 0) {

                    genWords();

                } else {
                    let span = document.createElement("span");
                    span.className = 'good';
                    let spanText = document.createTextNode("Congratz");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    // Remove Upcoming Words Box
                    upcomingWords.remove();
                }
                    
            } else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
        
    }, 1000);
}