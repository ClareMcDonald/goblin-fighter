import { renderGoblin } from './utils.js';

// import functions and grab DOM elements
const defeatedGoblinsEl = document.getElementById('defeated-goblins');
const fighterEl = document.getElementById('fighter');
const fighterHpEl = document.getElementById('fighter-hp');
const gameOverMessageEl = document.getElementById('game-over');
const form = document.querySelector('form');
const goblinsEl = document.getElementById('display-goblins');

/* console.log(
    defeatedGoblinsEl,
    fighterEl,
    fighterHpEl,
    gameOverMessageEl,
    form,
    goblinInputEl,
    challengeGoblinButton,
    goblinsEl
); */

// let state
let defeatedGoblins = 0;
let fighterHp = 10;

let goblins = [
    {
        name: 'BlingBlob',
        hp: 3,
    },
    {
        name: 'Mabel the Terrible',
        hp: 3,
    }
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const goblinName = data.get('goblin-input');
    
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5)
    };

    goblins.push(newGoblin);
  
    displayGoblins();
});

function displayGoblins() {
    goblinsEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

      
        goblinEl.addEventListener('click', () => {

            displayGoblins();
        });

        goblinsEl.append(goblinEl);
    }
}

