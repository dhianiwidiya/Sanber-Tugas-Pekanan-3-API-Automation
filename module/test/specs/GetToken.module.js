//ini adalah contoh api automation with common js
import request from "supertest";
import { expect } from "chai";
import { loginToken } from "../function/loginToken.spec.js";

const baseUrl = "https://kasir-api.belajarqa.com";

//Describe the test suit
describe("Get Token Scenario" ,() => {
    //let loginToken;
    it ('Possitive - success Get Access Token' , async() => {
    const payload = {
        "email": "tokotest@yopmail.com",
        "password": "qwerty123456"
    }
     //send request
    const response = await request(baseUrl) //baseUrl
        .post("/authentications") //endpoint
        .send(payload)//request body
        .set("Content-Type","application/json") //Header

    //Assertion using Chai
    expect((await response).status).to.equal(201)
        let accessToken = (await response).body.data.accessToken
    console.log(await loginToken)
    })

    it ('Possitive - success Implement Token', async() => {
    console.log(await loginToken)
    })
    it ('Import token', async() => {
        let accessToken = await loginToken()
    console.log(await loginToken)
    } )
})