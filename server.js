//IMPORTING ADHRIT EXPRESS
const express = require('express')
const path = require('path')
const app = express()

//Setting view engine as ejs
app.set('view engine', 'ejs')

//load assets
app.use('/css', express.static(path.resolve(__dirname,'assets/css')))
app.use('/js', express.static(path.resolve(__dirname,'assets/js')))
app.use('/img', express.static(path.resolve(__dirname,'assets/img')))

//home route
app.get('/', (req,res) =>{
    res.render('index')
})

//setting PORT for app
app.listen(1200)