var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');

var ccaaRouters = require("./routes/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.send("<h1>Bienvenido al Server</h1>");
});

app.listen(port, function(){
    console.log("LA APP ESTA EN EL PUERTO " + port);
});