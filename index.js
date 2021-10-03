//Student Name: Adam Vandyke
//Student Num: 101023594

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8089;

app.use('/hello', require('./public/hello'))
app.use('/user', require('./public/user'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
