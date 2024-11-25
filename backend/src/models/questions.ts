import mongoose from "mongoose"

const questionSchema  = new mongoose.Schema({
    question : {
        type : String,
        unique : true
    },
    answer : {
        type:String
    },
    correct : {
        type : Boolean,
        default : false
    },
    winner : {
        type : String
    }
})

const questions = mongoose.model('score',questionSchema)
export default questions