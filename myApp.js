let express = require('express');
let app = express();
console.log('Hello World') // 1
app.get("/", (req, res) => { // 2, req = request object. res = response object.
    res.sendFile(__dirname + '/views/index.html')
})
app.use('/public', express.static(__dirname + '/public'))





























 module.exports = app;
