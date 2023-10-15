const request = require("supertest")
const { expect } = require("chai")

async function putCategory(token,categoryID) {
    const requestBody = {
        "name": "update-minuman",
        "description": "no-minuman"
    };
    const apiRequest = request("https://kasir-api.belajarqa.com")
        .put("/categories/"+categoryID)
        .set('Authorization', 'Bearer '+token)
        .set('Content-Type', 'application/json')
        .send(requestBody);
        

    const response = await apiRequest; // Get the response

    return response;
    
}


module.exports = {putCategory};