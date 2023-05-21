const express = require('express')
const os = require('os')
const cluster = require('cluster')
const port = process.env.PORT ||6000

const cpuNums = os.cpus().length;

if(cluster.isPrimary){

    for(let i=0;i<cpuNums;i++){
        cluster.fork();
    }

    cluster.on('exit',()=>{
        cluster.fork()
    })
}
else{
    const app= express()
    app.get("/home",(req,res)=>{

        let result = 0
     
        for(let i=0;i<10000;i++){
        
         result +=i
        
     }
        return res.json({processid:process.pid,result})
     
     })
     
     app.listen(port,()=>{
         console.log(`server running on ${port} and Processid:${process.pid}`)
     })
}
