export function tryWord(word, base) {
    word = word.toLowerCase()
    if (word === base) {
        return true
    } else {
        let arrayBase = base.split('');
        let arrayWord = word.split('');
        let wellPlaced = [];
        let notInWord = [];
        let missplaced = [];


        for (let i = 0; i < arrayWord.length; i++) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
            } else if (arrayBase.includes(arrayWord[i])) {
                missplaced.push(arrayWord[i])
            } else {
                notInWord.push(arrayWord[i])
            }
        }
        return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
    }
}

function guess() {
    let base = 'dictionnaire'
    let wordInput = document.getElementById("word")
    let word = wordInput.value
    let result = tryWord(word, base)

    console.log(result)
    if (result === true) {
        document.getElementById("win").innerText = 'Vous avez gagné'
    }
    wordInput.value = ''
    document.getElementById("try").innerText = word
    document.getElementById("well").innerText = result.wellPlaced ? `Bien placé: ${result.wellPlaced.join(', ')}` : ""
    document.getElementById("miss").innerText = result.missplaced ? `Mal placé: ${result.missplaced.join(', ')}` : ""
    document.getElementById("not").innerText = result.notInWord ? `Pas dans le mot: ${result.notInWord.join(', ')}` : ""
}