"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exercises = require('./controllers/exercises.controller');
//create a new express application
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/exercises', exercises);
// start the server/ use random port on render server as 4000 as the fallback
const port = process.env.PORT || 4000;
app.listen(port, () => {
    //confirm server running
    console.log('express running on port {port}');
});
