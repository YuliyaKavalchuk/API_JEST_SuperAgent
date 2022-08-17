import superagent from "superagent";
import { URL_MAIN, SET_HEADER, URL_MAIN_ID_1 } from "../helpers/constantsMain";
import { newUser } from "../helpers/constantUser";
import { STATUS_CODE_200, STATUS_CODE_201 } from "../helpers/statusCode";
import { EXPECTED_ID_5, EXPECTED_ID_1 } from "../helpers/expectedResult";

describe("API testing of jsonplaceholder.typicode.com website", () => {
    let res: any;
    test("Check GET request returns 200 OK status code", async () => {
        res = await superagent.get(URL_MAIN);
        expect(res.status).toBe(STATUS_CODE_200);
    });
    test("Check GET request returns the post with the id 5", async () => {
        res = await superagent.get(URL_MAIN);
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: EXPECTED_ID_5 })]));
    });
    test("Check POST request returns 201 CREATED status code", async () => {
        res = await superagent.post(URL_MAIN).set({ SET_HEADER }).send({
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.status).toBe(STATUS_CODE_201);
    });
    test("Check POST request creates a new post", async () => {
        res = await superagent.post(URL_MAIN).set({ SET_HEADER }).send({
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.body.title).toEqual(newUser.title);
        expect(res.body.body).toEqual(newUser.body);
        expect(res.body.userId).toEqual(newUser.userId);
    });
    test("Check PUT request returns 200 OK status code", async () => {
        res = await superagent.put(URL_MAIN_ID_1).set({ SET_HEADER }).send({
            id: 1,
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.status).toBe(STATUS_CODE_200);
    });
    test("Check PUT request updates the post", async () => {
        res = await superagent.put(URL_MAIN_ID_1).set({ SET_HEADER }).send({
            id: 1,
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.body.id).toEqual(EXPECTED_ID_1);
        expect(res.body.title).toEqual(newUser.title);
        expect(res.body.body).toEqual(newUser.body);
        expect(res.body.userId).toEqual(newUser.userId);
    });
    test("Check DELETE request returns 200 OK status code", async () => {
        res = await superagent.delete(URL_MAIN_ID_1).set({ SET_HEADER });
        expect(res.status).toBe(STATUS_CODE_200);
    });
});
