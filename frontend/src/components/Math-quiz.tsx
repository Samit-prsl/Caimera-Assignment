import { useState, useEffect, useContext } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Req from '@/contexts/Requests'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { questions } from '@/types/types'
import { joinRoom, sendAnswer, socket } from '@/lib/socket'

export function MathQuiz() {
  const [problem, setProblem] = useState('')
  const [answer, setAnswer] = useState('')
  const [correctAnswer,setCorrectAnswer] = useState('')
  const [Correct,setCorrect] = useState<boolean>()
  const [id, setid] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  let res = ''
  const {get,put} = useContext(Req)

  useEffect(() => {
    joinRoom();
    socket.on('receive', (message) => {
      console.log('Message received:', message);
      window.location.reload();
    });
    generateProblem();
    return () => {
      socket.off('receive'); 
    };
  }, []);


  useEffect(()=>{
    if(Correct){
      generateProblem()
    }
  },[Correct])

// async function currentUser() {
//   await get<string>('api/user').then((data:string)=>{console.log(data)}).catch(()=>{alert('soemthing went wrong')})
// }
// useEffect(()=>{
//   console.log('hjfh');
  
// socket.on('receive',(msg)=>{
//   console.log(msg);
  
// })
// },[socket])

async function generateProblem() {
  await get<questions>('api/questions')
  .then((data:questions)=>{
    setCorrect(data.correct)
    setid(data._id)
    setProblem(data.problem);
    setCorrectAnswer(data.answer)})
    .catch(()=>alert('something went wrong'))
}

  const checkAnswer = async() => {
    if(answer === '') {
      return alert('No answer given!')
    }
    if (answer === correctAnswer) {
      setIsCorrect(true)
      res = sendAnswer(answer)
     if(res === correctAnswer) {
      const winner = 'anonymous'
       await put(`api/answer/${id}`,{answer,winner})
       .then((data)=>{console.log(data)})
       .catch(()=>{console.log(`something went wrong`);
       });
    }
      setTimeout(generateProblem, 3000)
    }
    else {
      setIsCorrect(false)
    }
  }

  return (
    <Card className="w-full max-w-md bg-purple-200">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Current Problem</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-3xl font-semibold">{problem}</p>
        <Input
          type="text"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="mb-4"
        />
        <Button onClick={checkAnswer} className="w-full">
          Submit Answer
        </Button>
      </CardContent>
      <CardFooter>
        {isCorrect && (
          <p className="text-green-500 font-semibold">
            Correct! You won this round. New problem in 3 seconds...
          </p>
        )}
         {!isCorrect && answer != '' && (
          <p className="text-red-500 font-semibold">
            Wrong answer
          </p>
        )}
      </CardFooter>
    </Card>
  )
}