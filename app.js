const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const userRouter = require('./routes/userRuoter')

app.use('/', userRouter)


app.listen(PORT, () => { console.log(`Server litsening on ${PORT}`) })