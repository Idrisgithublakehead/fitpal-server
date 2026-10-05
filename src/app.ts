import express, { Application } from "express";
import mongoose, { mongo } from "mongoose";




const exercises:any = require('./controllers/exercises.controller');



//create a new express application
const app: Application = express();

app.use(express.json());


// mongoose db connection

const db: string = process.env.DB || '';

mongoose.connect(db)
    .then(() => console.log('connected to MONGODB'))
    .catch((err) => console.log(`connection ERROR: ${err}`));


app.use('/api/v1/exercises', exercises);

// start the server/ use random port on render server as 4000 as the fallback
const port = process.env.PORT || 4000;


app.listen(port, () => {
    //confirm server running
console.log('express running on port {port}');
});




