var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("views", "view");
app.set("view engine", "ejs");

app.get("/post_form", calculate);
app.listen("5000", function(){
	console.log("It's working");
});

function calculate(req, res) {
   var weight = req.query.weight;
   var type = req.query.type;
   var rate = calculate_rate(type, weight); 
    const params = {rate: rate, weight: weight, type: type};
   res.render('results', params);
}

function calculate_rate(type, weight) {
    let rate;
    let base;
    switch(type) {
        case "stamped":
        base = 0.55;
        break;
        case "metered":
        base = 0.50;
        break;
        case "large":
        base = 1.00;
        break;
        default:
        rate = 0.187
        break;
    }
    rate = base + (0.15 * (Number(weight) -1));
    var theRate = rate.toFixed(2);
   return theRate;
}