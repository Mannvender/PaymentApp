// const Entry = require('../../db').Entry
const route = require('express').Router();

route.use('/', (req, res) => {
    res.send("payment success")
})


exports = module.exports = route