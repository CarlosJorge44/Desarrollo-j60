const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const Usuario = require("./routes/usuario");
var cookieSession = require("cookie-parser");
var session = require("session");

//Instanciando el servidor de paginas
const app = express();
//Seteando el puerto
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname), "views");
app.set("view engine", "ejs");
app.use("/", Usuario);
//Empezando a escuchar las peticiones
app.listen(app.get("port"), () =>{
    console.log(`Aplicaion iniciada ${app.get("port")}`)
});

