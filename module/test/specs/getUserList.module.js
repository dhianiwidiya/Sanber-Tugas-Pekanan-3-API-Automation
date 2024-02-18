import request from "supertest";
import { expect } from "chai";
import { loginToken } from "../function/loginToken.spec.js";
//import { createUser } from "../function/createUser.spec.js";

const baseUrl = "https://kasir-api.belajarqa.com";
const paramq = "Toko-Test"
const paramp = "1"

describe ("Get All User list" ,() => {
    it ('Positive - success get All User with param' ,async () => {
        let accessToken = await loginToken()
        let response = await request(baseUrl) //baseUrl
            .get("/users"+"?q=${paramq}&p=${paramp}") //endpoint with query params
            .set('Authorization', 'Bearer ' + accessToken) 
        //Assertion using Chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
    it ('Positive - success get data role user' ,async () => {
        let accessToken = await loginToken()
        const response = await request(baseUrl)
        //Assertion using Chai
        console.log((await response).getUserParam)
       // console.log((await response).body)
    })
})
