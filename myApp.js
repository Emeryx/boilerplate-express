require('dotenv').config()
let express = require('express');
let app = express();
console.log('Hello World') // 1
app.get("/", (req, res) => { // 2, req = request object. res = response object.
    res.sendFile(__dirname + '/views/index.html')
})
app.use('/public', express.static(__dirname + '/public'))
app.get('/json', (req, res) => {
    res.json({"message": process.env.MESSAGE_STYLE=="uppercase"?"HELLO JSON":"Hello json"})
})




























 module.exports = app;
