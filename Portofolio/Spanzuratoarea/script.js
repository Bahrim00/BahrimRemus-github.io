'use strict';

const letterDiv = document.querySelector('.letter-div');
const hintButton = document.querySelector('.hint-btn');
const resetButton = document.querySelector('.reset-btn');
const hintDiv = document.querySelector('.hint-div');
const hintText = document.querySelector('.hint-txt');
const liveSpan = document.querySelector('.lives');
const wordDiv = document.querySelector('.word-div');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const playAgain = document.querySelector('.notif-btn');
const livesImg = document.querySelector('.lives-img');
const allButtons = document.querySelectorAll('.alpha');
const container = document.querySelector('#container')
const nextButton = document.querySelector('.next-btn');
const hintTxt = document.querySelector('.hintText')

let letters;
let lives;
let select_word;


const words = new Map([
    ['gerunziu', 'Indiciul'],
    ['verb', 'Indiciul'],
    ['perfect compus', 'Indiciul'],
    ['pasiva', 'Indiciul'],
    ['conjunctiv', 'Indiciul'],
    ['impersonal', 'Indiciul'],
    ['mai-mult-ca-perfect', 'Indiciul'],
    ['copulativ', 'Indiciul'],
    ['viitor anterior', 'Indiciul'],
    ['reflexiva', 'Indiciul'],
]);

const word_list = [...words.keys()];

const getRandomWord = function (list) {
    return list[Math.floor(Math.random() * word_list.length)];

};




function nextWord() {
    notif.classList.add('hidden');
    container.classList.remove("blur");
    letters.forEach(btn => btn.classList.remove('disabled'));

    const wordIterator = words.keys();
    let currentWord = wordIterator.next().value;
    while (currentWord !== select_word) {
        currentWord = wordIterator.next().value;
    }
    currentWord = wordIterator.next().value || words.keys().next().value;
    select_word = currentWord;
    function updateHintText(selectedWord) {
        if (selectedWord === 'gerunziu') {
            hintTxt.textContent = 'Partea de vorbire care exprimă acțiuni, stări, existența, se numeste:';
        } else if (selectedWord === 'verb') {
            hintTxt.textContent = 'Partea de vorbire care exprimă acțiuni.';
        } else if (selectedWord === 'perfect compus') {
            hintTxt.textContent = 'Verbul „am scris” este la timpul.';
        } else if (selectedWord === 'pasivă') {
            hintTxt.textContent = 'Verbul din enunțul „Vei fi plecat luna viitoare”, este la diateza: ';
        } else if (selectedWord === 'conjunctiv') {
            hintTxt.textContent = 'Verbul „să fi plecat”, este la modul:';
        } else if (selectedWord === 'impersonal') {
            hintTxt.textContent = 'Verbul „a tuna” este un verb:';
        } else if (selectedWord === 'mai-mult-ca-perfect') {
            hintTxt.textContent = 'Verbul din enunțul „mancaserăm foarte multă ciocolată” este la timpul: ';
        } else if (selectedWord === 'copulativ') {
            hintTxt.textContent = 'Verbul „a deveni” din enunțul: „Ea devine medic.” este:';
        } else if (selectedWord === 'viitor anterior') {
            hintTxt.textContent = 'Verbul „Voi fi citit” este la timpul:';
        } else if (selectedWord === 'reflexivă') {
            hintTxt.textContent = 'Verbul din enuntul: „Mă gândesc și acum la cartea pe care am terminat-o.” este la diateza:';
        }
    }
    updateHintText(select_word);

    wordDiv.innerHTML = ''; // resetează div-ul de cuvinte

    // punerea cuvântului selectat
    for (let i = 0; i < select_word.length; i++) {
        const html = `<p class="word">_</p>`;
        wordDiv.insertAdjacentHTML('beforeend', html);
    }

    // Adaugă un HTML gol între cuvinte
    const emptyHtml = '<p class="word">&nbsp;</p>';
    wordDiv.insertAdjacentHTML('beforeend', emptyHtml);
}



const init = function (state) {
    wordDiv.innerHTML = '';

    if (state === 'start') {
        // putting all letters into html
        for (const i of 'aăâbcdefghiîjklmnopqrsștțuvwxyz- ') {
            const html = `<button class="alpha">${i.toUpperCase()}</button>`;
            letterDiv.insertAdjacentHTML('beforeend', html);
        }
    } else if (state === 'reset') {
        letters.forEach(btn => {
            btn.classList.remove('disabled');
            hintDiv.classList.add('hidden');
            notif.classList.add('hidden');
        });
        notif.classList.remove('Câştigat', 'Pierdut');
    }
    const hintTxt = document.querySelector('.hintText');

    select_word = words.keys().next().value;
    document.querySelector('.next-btn').addEventListener('click', nextWord);
    lives = 6;
    livesImg.src = `/Users/remus/Desktop/Learning/Projects/Spanzuratoarea/images/start.png`;
    // capturing letters div
    letters = document.querySelectorAll('.alpha');
    liveSpan.textContent = lives;

    // putting selected word
    for (let i = 0; i < select_word.length; i++) {
        const html = `<p class="word">_</p>`;
        wordDiv.insertAdjacentHTML('beforeend', html);
    }

    if (select_word.length >= 0) {
        hintTxt.textContent = 'Verbul „mâcând” este la modul: ';
    } else {
        hintTxt.textContent = 'nimic';
    }


};

init('start');




// show notification
const showNotif = function (msg) {
    container.classList.add("blur")
    notif.classList.remove('hidden');
    notifSpan.textContent = select_word;
    notifContent.textContent = `Ai ${msg}`;
    const wrapper = document.querySelector('.wrapper');

    if (msg === 'castigat') {
        notif.classList.add('castigat');

    } else if (msg === 'pierdut') {
        notif.classList.add('pierdut');
    }
    wordDiv.innerHTML = '';

    playAgain.addEventListener('click', () => {
        notif.classList.add('hidden');
        letterDiv.classList.remove('blur');
        allButtons.forEach(button => button.classList.remove('disabled'));
        livesImg.src = '/Users/remus/Desktop/Learning/Projects/Spanzuratoarea/images/start.png';

        liveSpan.textContent = lives.toString();
        container.classList.remove('blur');
    });
    nextButton.addEventListener('click', () => {
        nextWord();

    });

};



// decrease life
const decreaseLife = function () {
    lives--;
    liveSpan.textContent = lives;
    if (lives === 0) {
        showNotif('pierdut');


    } else {
        livesImg.setAttribute('src', `/Users/remus/Desktop/Learning/Projects/Spanzuratoarea/images/${lives}.png`);
    }
};


// get multiple matching indexes of pressed letter
// to the selected word
const getindexes = function (letter) {
    let indexes = [];
    [...select_word].forEach((val, i) => {
        if (val === letter) {
            const index = i;
            indexes.push(index);
        }
    });
    //   console.log(indexes);
    return indexes;
};

// check if we get complete word
const checkWord = function () {
    let val = true;
    for (let i = 0; i < wordDiv.children.length; i++) {
        if (wordDiv.children[i].textContent === '_') {
            val = false;
        }
    }
    return val;
};

// letters event listener function
const letterPress = function () {
    const letter = this.textContent.toLowerCase();

    if (select_word.includes(letter)) {
        const indexes_list = getindexes(letter);
        indexes_list.forEach((val, i) => {
            wordDiv.children[val].textContent = this.textContent;
        });
        if (checkWord()) showNotif('castigat');
    } else {
        decreaseLife();
    }
    this.classList.add('disabled');
};

// listening to letter buttons presses
letters.forEach(btn => {
    btn.addEventListener('click', letterPress);
});

// Listening to hint btn
hintButton.addEventListener('click', function () {
    hintDiv.classList.remove('hidden');
    hintText.textContent = words.get(select_word);
});

// listening to reset btn
resetButton.addEventListener('click', function () {
    init('reset');
});

// listening to play again button
playAgain.addEventListener('click', function () {
    init('reset');
});
nextButton.addEventListener('click', function () {
    init('reset');

});



