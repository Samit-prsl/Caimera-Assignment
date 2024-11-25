import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 8000;

io.on("connection", (socket) => {
  //console.log(`User connected: ${socket.id}`);

  socket.on('joinQuiz', (quiz) => {
    socket.join(quiz);
    //console.log(`User joined room: ${quiz}`);
  });

  socket.on('send', (message) => {
    //console.log(message?.room);
    io.to(message?.room)?.emit('receive', message);
  });

  socket.on("disconnect", () => {
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
