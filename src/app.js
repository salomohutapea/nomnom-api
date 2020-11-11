require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Menu = require('../src/models/menumodel')

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// Set ejs file as default view
app.set('view engine', 'ejs')

// Define static folder, such as CSS and images
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.send('Nom Nom API')
})

// Request any data from database collection
app.get('/:data', (req, res) => {
    const data = mongoose.model(req.params.data)

    // Find menus in database and pass the data to view
    data.find({}, function (err, data) {
        res.send(data)
    })
})

app.post('/newmenu', async (req, res) => {

    // Add new menu to database

    const newMenu = new Menu(req.body)

    try {
        newMenu = await menu.save()
    } catch {

    }
})

app.listen(process.env.PORT || 2000)