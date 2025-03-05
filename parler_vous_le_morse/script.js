// import { latinToMorse, morseToLatin } from "./dictionnaire.js";

const morse = document.querySelector("#morse")
const latin = document.querySelector("#latin")
const submit = document.querySelector("#translate")
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
    ' ':'/'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    '/': ' '
  }


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
    let res = "";
    for (let i = 0; i < array.length; i++) {
        res += translateLatinCharacter(array[i].toUpperCase());
        res += " "
    }
    return res;
}

const getMorseCharacterList = (string) => {
    let res = [];
    for (let i = 0; i < string.length; i++) {
        let letter = "";
        for (let j = i ; string[j] != " " && j < string.length; j++) {
            letter += string[j];
            i = j;
        }
        if (letter != "") res.push(letter);
    }
    return res;
}


const translateMorseCharacter = (char) => {
    return morseToLatin[char];
}

const decode = (string) => {
    let array = getMorseCharacterList(string);
    let res = "";
    for (let i = 0; i < array.length; i++) {
        if (i == 0) res += translateMorseCharacter(array[i]);
        else res += translateMorseCharacter(array[i]).toLowerCase();
    }
    return res;
}

submit.addEventListener("click", () => {
    if (latin.value) {
        morse.value = encode(latin.value)
    } else if (morse.value) {
        latin.value = decode(morse.value)
    }
})