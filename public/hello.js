//Student Name: Adam Vandyke
//Student Num: 101023594

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Express JS");
})

module.exports = router;