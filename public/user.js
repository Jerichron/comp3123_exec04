//Student Name: Adam Vandyke
//Student Num: 101023594

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`{ "firstname" : "${req.query.firstname}", "lastname" : "${req.query.lastname}" }`);
})

router.post('/', (req, res) => {
    res.send(`{ "firstname" : "${req.query.firstname}", "lastname" : "${req.query.lastname}" }`);
})

module.exports = router;