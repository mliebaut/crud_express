const express = require('express')
const Liste = require("./data/liste.js")
const bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("listening on port 3000")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/client/index.html")
})

app.get('/liste', (req, res) => {
    res.send(Liste)
})

app.delete('/liste/:id', (req, res) => {
    for (let i = 0; i < Liste.length; i++) {
        if (Liste[i].id == req.params.id) {
            Liste.splice(i, 1)
            break;
        }
    }
    return res.sendStatus(200);
})

app.post('/liste', (req, res) => {
    let objet = {
        id : req.body.id,
        name : req.body.name,
        race : req.body.race,
        color : req.body.color
    }
    Liste.push(objet);
    return res.send(objet);
})

app.get('/liste/:id', (req, res) => {
    for (let i = 0; i < Liste.length; i++) {
        if (Liste[i].id == req.params.id) {
            obj = Liste[i];
            break;
        }
    }
    return res.send(obj);
})

app.put('/liste/:id', (req, res) => {
    for (let i = 0; i < Liste.length; i++) {
        if (Liste[i].id == req.params.id) {
            Liste[i].id = req.body.id;
            Liste[i].name = req.body.name;
            Liste[i].race = req.body.race;
            Liste[i].color = req.body.color;
            break;
        }
    }
    return res.send(obj);
})




app.use('/pages', express.static('./client/pages'))
app.use('/js', express.static('./client/js')) 