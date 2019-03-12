var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("views", "view");
app.set("view engine", "ejs");

app.listen(process.env.PORT, function(){
	console.log("It's working");
});