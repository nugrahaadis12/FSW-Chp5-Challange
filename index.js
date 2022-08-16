const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const jsonParser = bodyParser.json()

app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/assets-Chp3', express.static(__dirname + '/assets-Chp3'))
app.use('/assets-Chp4', express.static(__dirname + '/assets-Chp4'))

app.get('/', function (req, res) {
    let data = fs.readFileSync('./users.json')
    res.send(data)
})

app.get('/Challange-3', function (req, res) {
    res.sendFile(path.join(__dirname + "/view/challange-3.html"))
})

app.get('/Challange-4', function (req, res) {
    res.sendFile(path.join(__dirname + "/view/challange-4.html"))
})

//login API
app.post('/Login', jsonParser, (req, res) => {
    let data = JSON.parse(fs.readFileSync('./users.json'))
    let check = false
    for (let i = 0; i < data.length; i++) {
        if (data[i].password === (req.body.password) && data[i].username === (req.body.username)) {
            check = true
            console.log(`the data number ${i + 1} is ${check}`)
        }
    }
    if (check) {
        res.send("Authorized")
    } else {
        res.status(401).send("Unauthorized")
    }


    // if (result === req.body.password) {
    //     res.send("Authorized")
    // } else {
    //     res.status(401).send("Unauthorized")
    // }

    // const PASSWORD = "sdasadj343e"
    // if (PASSWORD === req.body.password) {
    //     res.send("Authorized")
    // } else {
    //     res.status(401).send("Unauthorized")
    // }
})
app.listen(5000)