const jwt = require('jsonwebtoken')

let user_payload={
    "email":"rahul@gmail.com",
    "password" : "123456"
}

//secret key
let secretkey="abcxyz123"
let token=jwt.sign(user_payload,secretkey,{expresIn:60*60})
/*jwt.sign(user_payload,secretkey,(err,token)=>{
    if (err) throw err
    token=token
    console.log(token)   //
})
*/
console.log(token)

jwt.verify(token,secretkey,(err,payload)=>{
    if(err) throw err
    console.log(payload)
})