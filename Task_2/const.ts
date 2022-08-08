import { getRandomInt, randomString } from "./Functions";
import superagent from "superagent";

export const newUser: { title: string | number; body: string; userId: number } = {
    title: "Test" + getRandomInt(0, 100),
    body: randomString(50),
    userId: getRandomInt(10, 100),
};

export const urlMain: string = "https://jsonplaceholder.typicode.com/posts";
