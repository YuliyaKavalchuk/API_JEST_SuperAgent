import { ALPHABET, SPACE_INPUT } from "./constantsForFunctions";

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomString(length: number): string {
    let result: string = SPACE_INPUT;
    let characters: string = ALPHABET + ALPHABET.toUpperCase();
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
