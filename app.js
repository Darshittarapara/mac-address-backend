const express = require('express')
const dotenv =require('dotenv')
const macRouter = require('./router/macaddress')
dotenv.config({path: "./config.env"})
const app = express()

app.use((req, res,next) => {
    console.log(req.host)
    next()
})
app.use('/admin', macRouter)
app.listen(process.env.PORT, () => {
    console.log('server start')
})