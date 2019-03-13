var express = require('express');
var app = express();

const { Pool } = require('pg')

const connection = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connection})

app.use(express.static("public"));
app.set("views", "view");
app.set("view engine", "ejs");

app.get("/getPerson", function(req, res) {
     let id = req.query.id;
     let sql = "SELECT * FROM person WHERE id = $1";
     pool.query = (sql, [id], function(error, result) {
         if (error) {
             console.log("There was an error");
            } else {
                console.log("The result is " + result.rows[0]);
            }
     });     

})
app.listen(process.env.PORT, function(){
	console.log("It's working");
});