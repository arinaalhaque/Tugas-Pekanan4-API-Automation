const request = require("supertest")

async function login(user){
    const response = await request("https://kasir-api.belajarqa.com")
    .post("/authentications")
    .send(user)
    console.log(JSON.stringify(await response.body))
    return (await response)
}

module.exports = {
    login
}