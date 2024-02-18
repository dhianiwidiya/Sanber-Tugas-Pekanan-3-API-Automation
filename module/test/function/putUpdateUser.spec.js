import request from "supertest";
import { baseUrl } from "../../Data/config.js"

async function UpdateUser(){
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

    return ((await response).body)

}