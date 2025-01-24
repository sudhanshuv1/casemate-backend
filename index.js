const express = require("express");
const connectDB = require("./config/connectDB")
const  = require('cors')

const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin')
const usersRouter = require('./routes/users')
const profileRouter = require('./routes/profiles')
const appointmentRouter = require('./routes/appointments')
const postRouter = require('./routes/post')

const app = express();
require('dotenv').config()
connectDB()
app.use(express.json())
app.use(cors())
app.use('/uploads',express.static(__dirname + '/uploads'))

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/admin',adminRouter)
app.use('/api/v1/users',usersRouter)
app.use('/api/v1/profiles',profileRouter)
app.use('/api/v1/booking',appointmentRouter)
app.use('/api/v1/post',postRouter)


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server listening on port ${port}!`))