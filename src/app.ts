import express, { Application } from "express";



const exercises:any = require('./controllers/exercises.controller');



//create a new express application
const app: Application = express();

app.use(express.json());


app.use('/api/v1/exercises', exercises);

// start the server 
app.listen(4000);

//confirm server running
console.log('express running on port 4000');

