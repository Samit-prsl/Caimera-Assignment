import{Request,Response} from 'express'
import { generateProblem } from '../utils/questions'
import questions from '../models/questions'

const setQuestions = async (req:Request,res:Response) => {
    try {
        const newQuestion = await questions.findOne({correct:false})
        return res.status(201).json(newQuestion)

    } catch (err) {
        return err
    }
}

const correctAnswer = async (req:Request,res:Response) => {
    const {answer,participant} = req.body
    const {id} = req.params
    try {
       const getQuestion = await questions.findById(id)
       if(getQuestion?.answer! === answer){
        const updateQuestionAndAnswer = await questions.findByIdAndUpdate(id,{correct:true,winner:participant},{new:true})
        return res.status(200).json(updateQuestionAndAnswer)
       }
       return res.status(404).json("Error!")

    } catch (err) {
        return err
    }
}


export default {setQuestions,correctAnswer}