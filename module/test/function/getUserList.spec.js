import request from "supertest";
import { baseUrl } from "../../Data/config.js"
import { loginToken } from "../function/loginToken.spec.js";

export async function getUserParam(paramq,paramp){
    let accessToken = await loginToken()
    let response = await request(baseUrl) //baseUrl
        .get("/users"+"?q=${paramq}&p=${paramp}") //endpoint with query params
        .set('Authorization', 'Bearer ' + accessToken) 
    return (await response)

}