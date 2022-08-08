import superagent from "superagent";
import { newUser, urlMain } from "./const";

describe("API testing of jsonplaceholder.typicode.com website", () => {
    let res: any;
    test("Check the request returns 200 OK status code", async () => {
        try {
            res = await superagent.get(urlMain);
        } catch (err: any) {
            console.log(err.message);
        }
        expect(res.status).toBe(200);
    });
    test("Check that there is the post with the id 5", async () => {
        try {
            res = await superagent.get(urlMain);
        } catch (err: any) {
            console.log(err.message);
        }
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: 5,
                }),
            ]),
        );
    });
    test("Check POST request returns 201 CREATED status code", async () => {
        try {
            res = await superagent.post(urlMain).set("Content-Type", "application/json").send({
                title: newUser.title,
                body: newUser.body,
                userId: newUser.userId,
            });
        } catch (err: any) {
            console.log(err.message);
        }
        expect(res.status).toBe(201);
    });
    test("Check POST request creates a new post", async () => {
        try {
            res = await superagent.post(urlMain).set("Content-Type", "application/json").send({
                title: newUser.title,
                body: newUser.body,
                userId: newUser.userId,
            });
        } catch (err: any) {
            console.log(err.message);
        }
        expect(res.body.title).toEqual(newUser.title);
        expect(res.body.body).toEqual(newUser.body);
        expect(res.body.userId).toEqual(newUser.userId);
    });
    test("Check PUT request returns 200 OK status code", async () => {
        try {
            res = await superagent
                .put("https://jsonplaceholder.typicode.com/posts/1")
                // .query({ id: 1 })
                .set("Content-Type", "application/json")
                .send({
                    id: 1,
                    title: newUser.title,
                    body: newUser.body,
                    userId: newUser.userId,
                });
        } catch (err: any) {
            console.log(err.message);
        }
        expect(res.status).toBe(200);
    });
    test("Check PUT request updates the post", async () => {
        try {
            res = await superagent
                .put("https://jsonplaceholder.typicode.com/posts/1")
                // .query({ id: 1 })
                .set("Content-Type", "application/json")
                .send({
                    id: 1,
                    title: newUser.title,
                    body: newUser.body,
                    userId: newUser.userId,
                });
        } catch (err: any) {
            console.log(err.message);
        }
        expect(res.body.id).toEqual(1);
        expect(res.body.title).toEqual(newUser.title);
        expect(res.body.body).toEqual(newUser.body);
        expect(res.body.userId).toEqual(newUser.userId);
    });
    test("Check DELETE request returns 200 OK status code", async () => {
        try {
            res = await superagent
                .delete("https://jsonplaceholder.typicode.com/posts/1")
                // .query({ id: 1 })
                .set("Content-Type", "application/json");
        } catch (err: any) {
            console.log(err.message);
        }
        expect(res.status).toBe(200);
    });
});
