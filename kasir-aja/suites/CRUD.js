// const { login } = require("../object/login")
const { addCategory } = require("../object/category/add-category")
const { getCategory } = require("../object/category/get-category-detail")
const { putCategory } = require("../object/category/update-category")
const { deleteCategory} = require ("../object/category/delete-category")
const { expect } = require("chai")
const user = require("../data/user.json")
const { describe } = require("mocha/mocha")


 describe("CRUD Restfull Category",   ()=>{

    const token = user.data.accessToken;
   
    describe('Success Add Category', function () {
        it('should return a 200 status code', async function () {
        
            const response = await addCategory(token);
        //  console.log(response.body);
            categoryID = response.body.data.categoryId
            expect(categoryID).not.equal(null)
            expect(response.status).equal(201);
        });
    });
    
    describe('Success Get Category', function () {
        it('should return a 200 status code', async function () {
            // console.log(categoryID);
            const response = await getCategory(token,categoryID);
            
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal('success');
            expect(response.body.data.category.name).to.equal('makanan ringan');
            expect(response.body.data.category.description).to.equal('makanan ringan dari indofood');

        });
    });
    
    describe('Success Put Category', function () {
        it('should return a 200 status code', async function () {
            // console.log(categoryID);
            const response = await putCategory(token,categoryID);
            // console.log(response.body);
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal('success');
            expect(response.body.data.name).to.equal('update-minuman');
        });
    });

    describe('Success Delete Category', function () {
        it('should return a 200 status code', async function () {
            // console.log(categoryID);
            const response = await deleteCategory(token,categoryID);
            console.log(response.body);
            expect(response.status).to.equal(200);
            expect(response.body.status).to.equal('success');
            expect(response.body.data).to.eql({});
        });
    });
})