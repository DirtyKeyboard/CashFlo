const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config()
const { Pool } = require('pg')
const jwt = require('jsonwebtoken')
const pool = new Pool ({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})

const authToken = (req, res, next) => {
    const authHeader = req.headers['token']
    const token = authHeader && authHeader.split(' ')[1] //Bearer { token }
    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
            req.user = user;
        next()
    })

}

app.get('/', async(req, res) => { 
    res.status(200).send({msg: "Hi!"})
})

app.listen(process.env.BACKEND_PORT || 5533, () => {
    console.log("Listening on port " + process.env.BACKEND_PORT || 5533);
})