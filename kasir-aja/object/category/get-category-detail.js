const request = require("supertest")
const { expect } = require("chai")

async function getCategory(token,categoryID) {
    const apiRequest = request("https://kasir-api.belajarqa.com")
        .get("/categories/"+categoryID)
        .set('Authorization', 'Bearer '+token)
        .set('Content-Type', 'application/json')
        

    const response = await apiRequest; // Get the response

    return response;
    
}


module.exports = {getCategory};
