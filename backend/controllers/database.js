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
    //Simple CRUD not really safe
    app.get("/", (request, response)=>{
        pool.query("SELECT * FROM ideas", (error, result, field)=>{
            if(error) throw error;
            console.log("Listed all records");
            response.send(result);
        });
    });
    app.post('/', (request, response)=>{
        const sql = "INSERT INTO ideas(title, description, date) VALUES ('"+request.body.title+"','"+request.body.description+"','"+request.body.date+"')";
        pool.query(sql, (error, result)=>{
            if (error) throw error;
            console.log("1 record inserted");
            response.send("1 record inserted");
        });
    });
    app.delete("/", (request, response)=>{
        const sql = "DELETE FROM ideas WHERE id=" + request.body.id;
        pool.query(sql, (error, result)=>{
            if(error) throw error;
            console.log("1 record deleted");
            response.send("1 record deleted");
        });
    });
    app.put("/", (request, response)=>{
        const sql = "UPDATE ideas SET title='"+request.body.title+"', description='"+request.body.description+"', date='"+request.body.date+"' WHERE id="+request.body.id;
        pool.query(sql, (error,result)=>{
            if(error) throw error;
            console.log("1 record updated");
            response.send("1 record updated");
        });
    });
}