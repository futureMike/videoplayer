var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,  'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const api = require("./routes/api");
app.use("/api", api);
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname,  'dist/index.html'));
});

app.listen(port, (err)=>{
    if(err){
        console.log('server error: ' + err);
    } else {
        console.log("Coercion Video Player rocking port " + port);
    }    

});






