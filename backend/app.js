const express = require('express');
const databaseController = require("./controllers/database");

const app = express();

//Enable CORS
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "http://192.168.8.100:3000");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
    );
    response.header("Access-Control-Allow-Credentials", "true");
    response.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    next();
});

databaseController(app);

app.listen(8000, "192.168.8.100");
console.log("Lisening on 192.168.8.100:8000");