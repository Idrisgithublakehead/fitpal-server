"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const exerciseSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: 
    }
});
