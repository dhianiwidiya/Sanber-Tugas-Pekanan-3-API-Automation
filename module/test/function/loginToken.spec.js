import request from "supertest";
import { baseUrl } from "../../Data/config.js"

export async function loginToken(){
    const payload = {
        "email": "tokotest@yopmail.com",
        "password": "qwerty123456"
    }
     //send request
    const response = await request(baseUrl) //baseUrl
    .post("/authentications") //endpoint
    .send(payload)//request body
    .set("Content-Type","application/json") //Header

    let accessToken = (await response).body.data.accessToken
    return (await accessToken)
}
//Pemanggilan versi common JS
//module.exports = {createToken}