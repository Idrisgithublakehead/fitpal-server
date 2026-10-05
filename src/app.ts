import express, { Application } from "express";



const exercises:any = require('./controllers/exercises.controller');



//create a new express application
const app: Application = express();

app.use(express.json());


app.use('/api/v1/exercises', exercises);

// start the server/ use random port on render server as 4000 as the fallback
const port = process.env.PORT || 4000;


app.listen(port, () => {
    //confirm server running
console.log('express running on port {port}');
});




