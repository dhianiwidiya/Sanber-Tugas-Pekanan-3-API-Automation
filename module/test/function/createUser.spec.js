import request from "supertest";
import { baseUrl }  from "../../Data/config.js"
import { loginToken } from "../function/loginToken.spec.js";

export async function createUser(){
    let accessToken = await loginToken()
    console.log(accessToken)
    const payload = 
    {
        "name": "Toko-Test",
        "email": "tokotest@yopmail.com",
        "password": "qwerty123456"
     }
    //send request
    const response = await request(baseUrl)
         .post("/users")
         .send(payload) //request body
         .set('Authorization', 'Bearer ' + accessToken) //header
   
    let userId = (await response).body.data.userId
    return userId
}