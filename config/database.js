const db=require('mysql2');
require('dotenv').config();
const {host,user,password,database}=process.env;

const connection=db.createConnection({
    host:host,
    user:user,
    password:password,
    database:database
})
console.log("DB connection established");
module.exports=connection;
