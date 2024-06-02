
//frontend

const cors = require('cors')

const path = require('path')

const express = require('express')
const app = express()

app.use(cors())
app.use(express.static('public'))

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'))
})

const PORT = process.env.PORT || 9090
app.listen(PORT,() => console.log(`Listening to PORT ${PORT}`))