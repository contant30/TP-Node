const express = require("express");
const app = express();
const { connectDB} = require('./db/db');
const courseRouter = require('./router/courseRouter');
const categoryRouter = require('./router/categoryRouter');
const authRouter = require('./router/authRouter');

require('dotenv').config();

app.use(express.json());

connectDB();

app.use('/api/courses', courseRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/auth', authRouter);

app.get('/',(req,res)=>{
    res.send('Hello toi');
});

app.listen(3000, () =>{
    console.log('Server démarré sur le port 3000')
});
