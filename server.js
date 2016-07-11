var express=require('express')
var app=express()

app.get('/whoami',function(req,res){
    console.log(req.headers)
    function getLanguage(){
        var language=req.headers['accept-language']
        return language.match(/..-../).join("")
    }
    function getSoftware(){
        var software=req.headers['user-agent']
        return software.slice(software.search(/\(/)+1,software.search(/\)/))
    }
    var sysinfo={
        ipaddress: req.headers['x-forwarded-for'],
        language: getLanguage(),
        software: getSoftware()
    }
    res.end(JSON.stringify(sysinfo))
})
app.listen(8080,()=>console.log("listening to port 8080"))