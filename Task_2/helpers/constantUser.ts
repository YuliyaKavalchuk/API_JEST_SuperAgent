import { getRandomInt, getRandomString } from "../Functions";

export const newUser: { title: string; body: string; userId: number } = {
    title: "Test" + getRandomInt(0, 100),
    body: getRandomString(50),
    userId: getRandomInt(10, 100),
};
