import { expect, test } from '../node_modules/vitest'
import { tryWord } from './script.js'

test('Cas de démarrage #1 : bonne réponse', () => {
    expect(tryWord("hello",'hello')).toBe(true)
})

test('Cas de démarrage #2', () => {
    expect(tryWord("hello",'hell')).toEqual({ wellPlaced: ['h', 'e', 'l', 'l'], missplaced: [], notInWord: ['o'] })
})

test('Mot vide', () => {
    expect(tryWord("", "hello")).toEqual({
        wellPlaced: [],
        missplaced: [],
        notInWord: []
    });
});

test('Mot cible vide', () => {
    expect(tryWord("hello", "")).toEqual({
        wellPlaced: [],
        missplaced: [],
        notInWord: ['h', 'e', 'l', 'l', 'o']
    });
});