import request from "supertest";
import { baseUrl }  from "../../Data/config.js"

export async function createUser(){
        const payloadtoken = {
            "email": "tokotest@yopmail.com",
            "password": "qwerty123456"
        }
         //send request
        const responseAccessToken = await request(baseUrl) //baseUrl
        .post("/authentications") //endpoint
        .send(payloadtoken)//request body
        .set("Content-Type","application/json") //Header
    
        let accessToken = (await responseAccessToken).body.data.accessToken
    //const accessToken = await loginToken()
    //console.log(accessToken)
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