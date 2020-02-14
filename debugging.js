const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));


app.get('/', function(req, res) {
    var name = req.query.name || 'there';
    res.send(`Hello ${name}!`)
})

app.listen(port, function() {console.log(`Example app listening on port ${port}!`)})

