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
// start the server 
app.listen(4000);
//confirm server running
console.log('express running on port 4000');
