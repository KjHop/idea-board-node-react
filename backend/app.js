const express = require('express');
const databaseController = require("./controllers/database");

const app = express();

databaseController(app);

app.listen(8000, "192.168.8.100");
console.log("Lisening on 192.168.8.100:8000");