const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");
const connectDB = require("./Config/db");
const colors = require("colors")
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // To accept JSON data

app.get('/', (req,res) => {
    res.send("api yo")
});

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)
app.use('/api/message',messageRoutes)

// Error Handling
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen(5000, console.log(`Server ${PORT}`.yellow.bold));
// const io = require('socket.io')