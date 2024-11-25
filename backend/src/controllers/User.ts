import{Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/user'
const registerFunc = async (req:Request,res:Response) => {
    const {username} = req.body
    try {
        
        const isUser = await User.findOne({username})
        if(isUser)
        return res.status(409).json('Username already exists!')
        const newUser = new User({username:username})
        await newUser.save()
        const SECRET_KEY : any = process.env.SECRET_KEY

        const token : string = jwt.sign({ username: User,role:"username" },SECRET_KEY , {
            expiresIn : "24h" })

        return res.status(201).json({"username":newUser,"token":token})

    } catch (err) {
        return err
    }
}

const getUser = async(req:any,res:Response) =>{
    const username = req.user
    try {
        const isUser = await User.findOne({username})
        if(isUser)
        return res.status(200).json(isUser)
    } catch (error) {
        return res.status(409).json("User not found!")
    }
}

export default {registerFunc,getUser}