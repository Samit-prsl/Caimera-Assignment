import  express,{Application,Response} from "express"
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import routes from "./routes/routes"
import { dbConnection } from "./db"

const app : Application = express()
const PORT : any = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.get('/',(res:Response):void=>{
    res.status(200).json('Working fine in typescript')
})
app.use('/api',routes)

dbConnection()
  .then(() => {
    console.log(`Mongodb connected`);
  })
  .catch((err: any): void => {
    console.log(err);
  })
  .finally((): void => {
    app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
  });


