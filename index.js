const express=require('express');
require('dotenv').config();
const PORT=process.env.PORT;
const app=express();


// setup middleware

app.use(express.json());

// create routes
const todoRoutes=require('./routes/todos');

// mount routes

app.use('/api/v1',todoRoutes)



// Listen on PORT
app.listen(PORT,()=>{
    console.log("server started at ",PORT);
    
})


// call for database
const connection=require('./config/database');




// default route
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to the default page</h1>");
})



