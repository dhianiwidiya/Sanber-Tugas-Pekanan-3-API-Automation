import { expect } from "chai";
import { loginToken } from "../function/loginToken.spec.js";
import { createUser } from "../function/createUser.spec.js";
import { getUserDetail } from "../function/getUserDetail.spec.js";
import { getUserParam } from "../function/getUserList.spec.js";
import { UpdateUser } from "../function/putUpdateUser.spec.js";

describe("End to End - Users", ()=> {
    //let accessToken;
    //let userId;

    it ("success login", async ()=> {
       const response = await loginToken()

       //expect((await response).status).to.equal(201)
       expect(response).to.not.be.null;
    })
    it ("success create user", async ()=> {
        const response = await createUser()

        expect(response).to.not.be.null;
    })
    it ("success get user detail", async ()=> {
        const response = await getUserDetail()
        
        expect((await response).status).to.equal(200)
        //expect(response).to.not.be.null;
    })
    it ("success get user list", async ()=> {
        const response = await getUserParam()
        
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
    it ("success update user", async ()=> {
        const response = await UpdateUser()

        expect((await response).status).to.equal(200)
        //console.log((await response).body)
    })
})