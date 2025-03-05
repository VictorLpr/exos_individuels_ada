import { latinToMorse, morseToLatin } from "./dictionnaire.js";

const morse = document.querySelector("#morse")
const latin = document.querySelector("#latin")
const submitLatin = document.querySelector("#translateLatin")
const submitMorse = document.querySelector("#translateMorse")




const getLatinCharacterList = (string) => {
    let res = [];
    for (const letter of string) {
        res.push(letter)
    }
    return res;
}

const translateLatinCharacter = (char) => {
    if (char == `'`) return ('.----.');
    else return latinToMorse[char];
}

const encode = (string) => {
    let array = getLatinCharacterList(string);
    let res = "";
    for (let i = 0; i < array.length; i++) {
        res += translateLatinCharacter(array[i].toUpperCase());
        res += " "
    }
    return res;
}

// const getMorseCharacterList = (string) => {
//     let res = [];
//     for (let i = 0; i < string.length; i++) {
//         let letter = "";
//         for (let j = i ; string[j] != " " && j < string.length; j++) {
//             letter += string[j];
//             i = j;
//         }
//         if (letter != "") res.push(letter);
//     }
//     return res;
// }
const getMorseCharacterList = (string) => {
    return string.split(" ");
}

const translateMorseCharacter = (char) => {
    return morseToLatin[char];
}

const decode = (string) => {
    let array = getMorseCharacterList(string);
    let res = "";
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            res += translateMorseCharacter(array[i]);
        } else if (array[i] == "") {
            continue;
        } else {
            res += translateMorseCharacter(array[i]).toLowerCase();
        }
    }
    return res;
}
submitLatin.addEventListener("click", () => {
    if (latin.value) {
        morse.value = encode(latin.value)
    } else {
        latin.focus();
    }
})

submitMorse.addEventListener("click", () => {
    if (morse.value) {
        latin.value = decode(morse.value)
    } else {
        morse.focus();
    }
})