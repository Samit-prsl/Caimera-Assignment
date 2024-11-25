import{Request,Response} from 'express'
import Scores from '../models/scoreboard'

const registerScoresFunc = async (req:Request,res:Response) => {
    const {username,score} = req.body
    try {
        const newUser = new Scores({username,score})
        await newUser.save()
        return res.status(201).json("Score saved successfully!")

    } catch (err) {
        return err
    }
}

export default {registerScoresFunc}