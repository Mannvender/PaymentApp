const route = require('express').Router();
const crypto = require('crypto');

const key = 'IK06geeD';
const salt = 'rr4AWWklYu';

let productInfo = 'test product';
let firstName = 'test user';
let email = 'test@gmail.com';
let amount = 100;
let txnID = 123;
let udf1 = "";
let hash;
let phone = "8368604427";
let value;

let hashSequence = "";
hashSequence += key + "|" + txnID + "|" + amount + "|" + productInfo + "|" + firstName + "|" + email + "|" + phone + "|" + udf1 + "|" + salt;
console.log(hashSequence);


// create hahs
hash = crypto.createHmac('sha512', key);
hash.update(hashSequence);
value = hash.digest('hex');

// print result
console.log(value);

// hash = crypto.createHmac('sha512', hashSequence);


route.get('/', (req, res) => {
    res.send({hash: value})
});

exports = module.exports = route;