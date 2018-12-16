var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("hi there");    
});
app.get("/speak/:animal", function(req, res){
    var sounds = {
        dog:"woof woof!",
        cow: "maaaa",
        cat: "meaw"
    };
    var animal= req.params.animal;
    var sound= sounds[animal];
    res.send("the "+animal+" says "+sound);
});
app.get("/repeat/:msg/:times", function(req, res) { 
    var msg = req.params.msg;
    var times = Number(req.params.times);
    var result = "";
    for(var i=0;i<times;i++){
        result += msg+" ";
    }
    res.send(result);
});
app.get("*", function(req, res) {
    res.send("sorry this page is under maintainance!");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});