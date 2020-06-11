const express = require("express")
const cors = require("cors") // Cross Origin Resource Sharing
const mongoose = require("mongoose") //Mongoose is a MongoDB "object modeling tool" designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
require('dotenv').config();  // Getting variables defined in env files

const app = express();
const port = process.env.PORT || 5000; // Using port 5000

app.use(cors()); // Allow Cross Origin Resource Sharing (CORS)
app.use(express.json());

// MongoDB Connection Start
const uri = process.env.ATLAS_URI; // Getting the MongoDB URL saved in .env file.
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true})//Preparing a connection with MongoDB

const connection = mongoose.connection; // Connecting with MongoDB.
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");  
})
// End

// Getting the routes
const exerciseRouter = require('./routes/exercise')
const UsersRouter = require('./routes/users')

app.use('/exercise',exerciseRouter) // Defines what will happen on /exercise route
app.use('/users', UsersRouter)  // Defines what will happen on /users route

// Connecting to port
app.listen(port,()=> {
    console.log(`Sever is running on port : ${port}`);
    
})