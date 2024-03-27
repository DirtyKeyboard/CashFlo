const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config()
const bcrypt = require('bcrypt');
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
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
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

app.get('/checkToken', (req,res) => {
    const authHeader = req.headers['token']
    const token = authHeader && authHeader.split(' ')[1] //Bearer { token }
    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
            req.user = user;
        delete user.exp;
        delete user.iat;
        delete user.password;
        res.status(200).send({msg: "OK", user: user})
    })
})

app.post('/register', async (req, res) => {
    try {
        const saltRounds = process.env.SALT_ROUNDS;
        const salt = await bcrypt.genSalt(parseInt(saltRounds));
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const client = await pool.connect()
        await client.query(`INSERT INTO users (email, username, password, first_name, last_name) VALUES ('${req.body.email}', '${req.body.username}', '${hashedPassword}', '${req.body.first_name}', '${req.body.last_name}');`)
        const userQuery = await client.query(`SELECT * FROM users WHERE username = '${req.body.username}';`)
        const user = userQuery.rows[0]
        client.release();
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
        res.status(200).send({accessToken: `Bearer ${token}`});
    } catch (e) {
        res.status(400).send({msg: e.detail})
    }
})

app.get('/login', async (req, res) => {
    try { 
        const query = await pool.query(`SELECT * FROM users WHERE email='${req.headers.email}';`)
        const isVerified = await bcrypt.compare(req.headers.password, query.rows[0].password)
        if (isVerified) {
            const token = jwt.sign(query.rows[0], process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
            res.status(200).send({accessToken: `Bearer ${token}`, username: query.rows[0].username, first_name: query.rows[0].first_name});
        }
        else {
            res.sendStatus(401)
        }
    }
    catch (e)
    {
        res.status(400).send({msg: e.detail})
    }
})