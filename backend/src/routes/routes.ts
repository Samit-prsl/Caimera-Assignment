import express, { Router } from 'express'
import Questions from '../controllers/setQuestions'
import Score from '../controllers/Score'
import User from '../controllers/User'
import auth from '../middleware/auth'

const router : Router = express()
router.post('/user',User.registerFunc)
router.post('/score',Score.registerScoresFunc)
router.get('/questions',Questions.setQuestions)
router.get('/user',auth,User.getUser)
router.put('/answer/:id',Questions.correctAnswer)

export default router