import superagent from "superagent";
import { urlMain, setHeader, urlMainID1 } from "../helpers/constantsMain";
import { newUser } from "../helpers/constantUser";
import { statusCode200, statusCode201 } from "../helpers/statusCode";
import { expectedId5, expectedId1 } from "../helpers/expectedResult";

describe("API testing of jsonplaceholder.typicode.com website", () => {
    let res: any;
    test("Check GET request returns 200 OK status code", async () => {
        res = await superagent.get(urlMain);
        expect(res.status).toBe(statusCode200);
    });
    test("Check GET request returns the post with the id 5", async () => {
        res = await superagent.get(urlMain);
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: expectedId5 })]));
    });
    test("Check POST request returns 201 CREATED status code", async () => {
        res = await superagent.post(urlMain).set({ setHeader }).send({
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.status).toBe(statusCode201);
    });
    test("Check POST request creates a new post", async () => {
        res = await superagent.post(urlMain).set({ setHeader }).send({
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.body.title).toEqual(newUser.title);
        expect(res.body.body).toEqual(newUser.body);
        expect(res.body.userId).toEqual(newUser.userId);
    });
    test("Check PUT request returns 200 OK status code", async () => {
        res = await superagent.put(urlMainID1).set({ setHeader }).send({
            id: 1,
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.status).toBe(statusCode200);
    });
    test("Check PUT request updates the post", async () => {
        res = await superagent.put(urlMainID1).set({ setHeader }).send({
            id: 1,
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.body.id).toEqual(expectedId1);
        expect(res.body.title).toEqual(newUser.title);
        expect(res.body.body).toEqual(newUser.body);
        expect(res.body.userId).toEqual(newUser.userId);
    });
    test("Check DELETE request returns 200 OK status code", async () => {
        res = await superagent.delete(urlMainID1).set({ setHeader });
        expect(res.status).toBe(statusCode200);
    });
});
