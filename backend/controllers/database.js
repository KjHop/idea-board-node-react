const mysql = require("mysql");
const bodyParser = require('body-parser');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "test",
    password: "testtest1",
    database: "ideaboard",
});

module.exports = app =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended:true
    }));

    app.get("/", (request, response)=>{
        pool.query("SELECT * FROM ideas", (error, result, field)=>{
            if(error) throw error;
            response.send(result);
        });
    });
    app.post('/', (request, response)=>{
        const sql = "INSERT INTO ideas(title, description, date) VALUES ('"+request.body.title+"','"+request.body.description+"','"+request.body.date+"')";
        pool.query(sql, (error, result)=>{
            if (error) throw error
            console.log("1 record inserted");
            response.send();
        });
    });
}