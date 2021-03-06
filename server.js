const express = require('express')
const path = require('path')

const app = express();
const Server_Port = process.env.PORT || 2345

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join('frontend')))
app.use('/api', require('./routes/api').route)

app.listen(Server_Port, () => console.log('Server started at http://localhost:2345')
)