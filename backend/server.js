const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");
const connectDB = require("./Config/db");
const colors = require("colors")
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
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

// Error Handling
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server ${PORT}`.yellow.bold));