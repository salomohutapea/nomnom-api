require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const Menu = require('../src/models/menumodel')
const Pesanan = require('../src/models/pesananmodel')

//Middleware
app.use(bodyParser.json())
app.use(cors())

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    res.send('Nom Nom API ')
})

// Request any data from database collection
app.get('/data', (req, res) => {
    const data = mongoose.model(req.query.q)

    // Find data in database and pass the data to view
    data.find({}, function (err, data) {
        res.send(data)
    })

})

app.post('/newmenu', async (req, res) => {

    // Add new menu to database
    req.
        if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send('Harap masukkan menu')
        res.status(403)
    } 
    
    else {
        const menu = new Menu(req.body)

        menu = await menu.save()

        res.send('Menu berhasil ditambahkan')
        res.status(200)
    }
})

app.post('/tambahpesanan', async (req, res) => {

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send('Pesanan kosong')
        res.status(402)
    }

    else {
        const pesanan = new Pesanan(req.body)
        pesanan = await pesanan.save()
    }
})



app.listen(process.env.PORT || 2000)