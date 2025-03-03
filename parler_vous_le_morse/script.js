import { latinToMorse, morseToLatin } from "../dictionnaire.js";

const getLatinCharacterList = (string) => {
    let res = [];
    for (const letter of string) {
        res.push(letter)
    }
    return res;
}

const translateLatinCharacter = (char) => {
    return latinToMorse[char];
}

const encode = (string) => {
    let array = getLatinCharacterList(string);
    let res = [];
    array.forEach((letter) => {
        res.push(translateLatinCharacter(letter.toUpperCase()))
    })
    return res;
}

console.log(encode("Abc azedsd"))