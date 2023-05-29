const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(
    "mongodb+srv://Saad_Rakhmaev:el.impoluto@cluster0.hqvtrcr.mongodb.net/cofeSoulaaa"
)
.then(() => console.log("server conenected"))
.catch(() => console.log("error"));

app.use(express.json())
app.use(require("./routes/drinks.route"))

app.listen(4000, () => {
    console.log('cofe connected')
})