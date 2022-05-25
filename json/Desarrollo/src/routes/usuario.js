const {render} = require('ejs');
const express = require('express');
const {json} = require('body-parser');
const router = express.Router();
const request = require('request'); 
const client = require('../libs/dbconnect')

router.get('/', (req, res) => {
    client.connect(
        async(err) => {
            const collection = client.db("pruebasdb").collection("producto");
            let producto = collection.find().toArray();
            console.log(producto[1]);
        }
    );
    res.render("./views/usuario/principal");
});

module.exports = router;