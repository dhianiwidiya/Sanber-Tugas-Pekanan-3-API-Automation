//ini adalah contoh api automation with module js
import request from "supertest";
import { expect } from "chai";
import { createUser } from "../function/createUser.spec.js";
import { loginToken } from "../function/loginToken.spec.js";

const baseUrl = "https://kasir-api.belajarqa.com";

describe("Update User", ()=> {
    it ('Positive - success update User', async()=>{
        let accessToken = await loginToken()
        let userId = await createUser()
        const payload = {
            "name": "toko with space",
            "email": "tokospace@example.com"
        }
        let response = await request(baseUrl) //baseUrl
            .put("/users/"+userId)//endpoint
            .send(payload)
            .set('Authorization', 'Bearer ' + accessToken) 

        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})