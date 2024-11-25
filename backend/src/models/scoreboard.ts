import mongoose from "mongoose"

const scoreSchema  = new mongoose.Schema({
    username : {
        type : String,
        unique : true
    },
    score : {
        type : String
    }
})

const Scores = mongoose.model('scoreboard',scoreSchema)
export default Scores