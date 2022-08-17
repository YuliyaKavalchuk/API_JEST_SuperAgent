import superagent from "superagent";
import { url_Main, set_Header, url_Main_ID_1 } from "../helpers/constantsMain";
import { newUser } from "../helpers/constantUser";
import { status_Code_200, status_Code_201 } from "../helpers/statusCode";
import { expected_Id_5, expected_Id_1 } from "../helpers/expectedResult";

describe("API testing of jsonplaceholder.typicode.com website", () => {
    let res: any;
    test("Check GET request returns 200 OK status code", async () => {
        res = await superagent.get(url_Main);
        expect(res.status).toBe(status_Code_200);
    });
    test("Check GET request returns the post with the id 5", async () => {
        res = await superagent.get(url_Main);
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: expected_Id_5 })]));
    });
    test("Check POST request returns 201 CREATED status code", async () => {
        res = await superagent.post(url_Main).set({ set_Header }).send({
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.status).toBe(status_Code_201);
    });
    test("Check POST request creates a new post", async () => {
        res = await superagent.post(url_Main).set({ set_Header }).send({
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.body.title).toEqual(newUser.title);
        expect(res.body.body).toEqual(newUser.body);
        expect(res.body.userId).toEqual(newUser.userId);
    });
    test("Check PUT request returns 200 OK status code", async () => {
        res = await superagent.put(url_Main_ID_1).set({ set_Header }).send({
            id: 1,
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.status).toBe(status_Code_200);
    });
    test("Check PUT request updates the post", async () => {
        res = await superagent.put(url_Main_ID_1).set({ set_Header }).send({
            id: 1,
            title: newUser.title,
            body: newUser.body,
            userId: newUser.userId,
        });
        expect(res.body.id).toEqual(expected_Id_1);
        expect(res.body.title).toEqual(newUser.title);
        expect(res.body.body).toEqual(newUser.body);
        expect(res.body.userId).toEqual(newUser.userId);
    });
    test("Check DELETE request returns 200 OK status code", async () => {
        res = await superagent.delete(url_Main_ID_1).set({ set_Header });
        expect(res.status).toBe(status_Code_200);
    });
});
