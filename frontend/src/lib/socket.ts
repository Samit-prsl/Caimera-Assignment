import io from 'socket.io-client'
export const socket = io(import.meta.env.VITE_SOCKET_URL)

export const joinRoom = ()=>{
        socket.emit("joinQuiz",'quiz-room')
        alert('A new question is awaiting for you!')
    }

export const sendAnswer = (answer:string) => {
        socket.emit('send',{room:'quiz-room',answer})  
        return answer
}

