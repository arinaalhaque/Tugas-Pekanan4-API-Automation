const request = require("supertest")
const { expect } = require("chai")

//create user
describe("registration", () =>{
    it ("Response status is 201", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
    .post("/registration")
    .send({
        "name": "nama Toko",
        "email": "sample@ex.com",
        "password": "123adsfadf@",
    })
        console.log(JSON.stringify(await response.body))
        //assertion
        expect(await response.status).equal(201)
    })
})