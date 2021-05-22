var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');

var ccaaRoutes = require("./routes/ccaas");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.send("<h1>Bienvenido al Sedrver</h1>");
});

app.use('/api/datos', ccaaRoutes);

app.listen(port, function(){
    console.log("LA APP ESTA EN EL PUERTO " + port);
});