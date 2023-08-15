const express = require("express");

const app = express();

app.get("/", function(req, res){
       var date = new Date();
        res.write("<html><body>");
        res.write("<h1>Hello there !!</h1>");
        res.write("<h2>Current date & time is: <i>"+date+"</i></h2>")
        res.write("</body></html>");
        res.send();
});


app.listen(process.env.PORT || 3000, function(){
  console.log("server is up and running...");
});