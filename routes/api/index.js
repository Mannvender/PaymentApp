const route = require('express').Router();

route.use('/failure', require('./failure'));
route.use('/success', require('./success'));
route.use('/hash', require('./hash'));


exports = module.exports = {
    route
};