const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://carlos0020:965653843@certus.4lun5.mongodb.net/?retryWrites=true&w=majority";

let client;

if(!client){
    try{
        client = new MongoClient(uri,);
    }catch(e){
        console.log("Couldn't connect to Mongo");
    }
}
module.exports = client;
