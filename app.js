const express = require('express')
const app = express()

const port = process.env.Port || 5000



app.get("/home",(req,res)=>{

    let result = 0
 
    for(let i=0;i<10000;i++){
    
     result +=i
    
 }
    return res.json({processid:process.pid,result})
 
 })



app.listen(port,()=>{
    console.log(`server running on port :${port}`)
})