const express=require('express')
const morgan=require('morgan')
const cors=require('cors')
const dotenv=require('dotenv')

//create express

let app=express()
dotenv.config({path:'./config/config.env'})

let port=process.env.PORT
let host=process.env.Host
let db_url=process.env.Mango_DB_Local

app.use(cors())
app.use(morgan('tiny'))

app.use(express.json())

app.get("/",(req,resp)=>{
    resp.send("Home Page")
})
app.use("/user",userRouter)
maongoose.connect(db_url)
         .then((resp)=>{
            console.log("maongo Db connection successful")
         })
         .catch((err)=>{
            console.log(err)
         })
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log("server is running")
})



