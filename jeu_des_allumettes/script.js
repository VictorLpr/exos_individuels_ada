const submit = document.getElementById("submit");
const matches = document.getElementById("matches");
const packLeft = document.querySelector(".pack");
const message = document.querySelector(".message");
const playerActiv = document.querySelector(".player")
const game = document.querySelector(".game");
const matchesContainer = document.querySelector(".matches-container");
const start = document.getElementById("start");
const welcome = document.querySelector(".welcome")
const playerNumber = document.getElementById("player-number")

let pack = 50;
let maxPulled = 6;
let player = 1;
let playerMax;

function initializeMatches() {
    matchesContainer.innerHTML = ""; 
    for (let i = 0; i < pack; i++) {
        let match = document.createElement("div");
        match.classList.add("match");
        matchesContainer.appendChild(match);
    }
}

function removeMatches(count) {
    let matches = document.querySelectorAll(".match");
    for (let i = 0; i < count; i++) {
        if (matches[matches.length - 1 - i]) {
            matches[matches.length - 1 - i].classList.add("fade-out");
            console.log("ok")
            setTimeout(() => matches[matches.length - 1 - i].remove(), 300); 
        }
    }
}

initializeMatches();

function nextPlayer () {
    if (player == playerMax) {
        player = 1;
    } else {
        player++;
    }

}

function didIWin () {
    if (pack == 0) {
        game.style.display = "none"
        message.innerText = `bravo Joueur ${player}!`
        return;
    } else if (pack < maxPulled) {
        maxPulled = pack;
        matches.setAttribute("max", `${maxPulled}`)
    }
}

function pullFromPack (pulled) {
    pack -= pulled;
    packLeft.innerText = `il reste ${pack} allumettes`;
    didIWin();
    removeMatches(pulled);
    nextPlayer();
}

start.addEventListener("click", () => {
    playerMax = playerNumber.value;
    game.style.display = "block";
    welcome.style.display = "none";


})

submit.addEventListener("click", () => {
    if (matches.value > maxPulled || matches.value < 1) {
        matches.value = "";
        matches.focus()
        message.innerText = `le nombre doit être compris entre 1 et ${maxPulled}`;
    } else {
        message.innerText = "";
        pullFromPack (matches.value)
        playerActiv.innerText = `Joueur ${player} joue`
    }
} )