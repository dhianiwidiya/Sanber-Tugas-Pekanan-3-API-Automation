import request from "supertest";
import { expect } from "chai";
import { createUser } from "../function/createUser.spec.js";
import { loginToken } from "../function/loginToken.spec.js";

const baseUrl = "https://kasir-api.belajarqa.com";

describe("Get User Detail", ()=> {
    it ('Positive - success get User Detail', async()=>{
        let accessToken = await loginToken()
        console.log(accessToken)
        let userId = await createUser()
        console.log(userId)
        const response = await request(baseUrl)
             .get("/users/"+userId)
             .set('Authorization', 'Bearer ' + accessToken) //head

        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})
