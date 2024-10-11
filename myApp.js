let express = require('express');
let app = express();
console.log('Hello World') // 1
app.get("/", (req, res) => { // 2, req = request object. res = response object.
    res.sendFile('/views/index.html')
})


































 module.exports = app;
