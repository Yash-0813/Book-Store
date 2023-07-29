const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();


//Middleware
app.use(express.json());
app.use(cors());
app.use("/books", router)

mongoose.connect(
    "mongodb+srv://yashgupta2361:Yash0813@book.65hrbl6.mongodb.net/?retryWrites=true&w=majority"
)
    .then(() => console.log("Connected to Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));