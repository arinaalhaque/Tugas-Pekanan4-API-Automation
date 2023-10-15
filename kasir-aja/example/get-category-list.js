const request = require("supertest")
const { expect } = require("chai")

//get category detail
describe("get category detail ", () =>{
    it ("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
    .get("/categories/72460eff-9951-4927-8c01-80ce525b2dbe")
    .set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwYzk1YjQ4LTBiYzctNDBmNC05YmIyLTZjZWI5NTA1NWE5MCIsImNvbXBhbnlJZCI6ImYyNzk0MDM3LTFhNjYtNGM3Yi1iMzA4LTE4NTgzMDVhMDJjMiIsImlhdCI6MTY5NzIwODAwM30.cZrnWEvHi8Waaod6pRSPLh137sdwYbMiKVi6agtLvyA')
        console.log(JSON.stringify(await response.body))
        //assertion
        expect(await response.status).equal(200)
    })
})