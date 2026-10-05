import mongoose, { Schema } from "mongoose";
import { isStringLiteral, StringLiteral } from "typescript/unstable/ast";


interface IExercise{
    name: string;
    duration: number;
    intensity: String;
    date: Date;

}

const exerciseSchema = new Schema({
        name: {
            type: String,
            trim: true,
            required: true 

        },

        duration: {
            type: Number,
            min: 1
        }, 

        intensity: {
            type: String, 
            enum: ['low', 'medium', 'high']


        },
        date: {
            type: Date,
            default: Date.now
        }


})



// create model and make public

const Exercise = mongoose.model<IExercise>('exercise', exerciseSchema);
export default Exercise;
