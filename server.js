var express=require('express')
var app=express()

app.get('/',function(req,res){
    res.end("Hello World!")
})
app.listen(8080,()=>console.log("listening to port 8080"))