const express = require('express')
const router = require('./router/match.router')

const PORT = 8084
const app = express()

app.use(express.json())
app.use('/api/v1/worldcup', router)

app.listen(PORT, () => console.log(`Server up on PORT ${PORT}`))