//ini adalah contoh api automation with module js
import request from "supertest";
import { expect } from "chai";
import { createUser } from "../function/createUser.spec.js";
import { loginToken } from "../function/loginToken.spec.js";

const baseUrl = "https://kasir-api.belajarqa.com";

//Describe the test suit
describe("Create User Toko Test" ,() => {
    it ('Positive - success Create User' , async() => {
    let accessToken = await loginToken()
    let user;
    const payload = {
        "name": "Toko-Test",
        "email": "tokotest@yopmail.com",
        "password": "qwerty123456"
     }
     //send request
    const response = await request(baseUrl) //baseUrl
    .post("/users") //endpoint
    .send(payload)//request body
    .set('Authorization', 'Bearer ' + accessToken) 

    //Assertion using Chai
    expect((await response).status).to.equal(201)
    user = (await response).body.name
    console.log((await response).body)
    })
    it ("Positive - success Post User with name Toko-Test", async() =>{
        let accessToken = await loginToken()
        const response = await request(baseUrl)
        //const user = await createUser()
        console.log((await response).createUser)
    })
})