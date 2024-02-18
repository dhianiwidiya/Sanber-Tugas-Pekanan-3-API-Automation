import request from "supertest";
import { baseUrl }  from "../../Data/config.js"
import { loginToken } from "../function/loginToken.spec.js";

export async function getUserDetail(){
    let accessToken = await loginToken()
    console.log(accessToken)
    let userId = await createUser()
    //let userId = await createUser()
    //send request
    const response = await request(baseUrl)
         .get("/users"+userId)
         .set('Authorization', 'Bearer ' + accessToken) //header
    return (await response)
}
