const request = require('supertest');

const { expect } = require('chai');

async function addCategory(token) {
    const requestBody = {
        name: 'makanan ringan',
        description: 'makanan ringan dari indofood'
    };

    const apiRequest = request('https://kasir-api.belajarqa.com')
        .post('/categories')
        .set('Authorization', 'Bearer '+token)
        .set('Content-Type', 'application/json')
        .send(requestBody);

    const response = await apiRequest; // Get the response

    return response;
    
}


module.exports = {addCategory};
