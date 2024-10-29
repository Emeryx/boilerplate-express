require('dotenv').config()
bodyParser = require('body-parser')
let express = require('express');
let app = express();
console.log('Hello World')
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => { // Middleware function for all routes
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
app.get("/", (req, res) => { // 2, req = request object. res = response object.
    res.sendFile(__dirname + '/views/index.html')
})
app.use('/public', express.static(__dirname + '/public'))
app.get('/json', (req, res) => {
    res.json({"message": process.env.MESSAGE_STYLE=="uppercase"?"HELLO JSON":"Hello json"})
})
const fetchTime = (req, res, next) => {
    req.time = new Date().toString()
    next()
}
app.get('/now', fetchTime, (req, res) => {
    res.json({time: req.time})
})
app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params.word})
})
app.get('/name', (req, res) => {
    const firstName = req.query.first
    const lastName = req.query.last
    res.json({name: `${firstName} ${lastName}`})
})
app.post('/name', (req, res) => {
    const firstName = req.body.first
    const lastName = req.body.last
    res.json({name: `${firstName} ${lastName}`})
})

module.exports = app;
