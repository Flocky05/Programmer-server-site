const express = require('express')
const app = express();
const port = process.env.POR || 5000;

const cors = require('cors')
app.use(cors());
const course = require('./course.json');

app.get('/', (req, res) => {
    res.send("News API is running Now!");
})
app.get('/course', (req, res) => {
    res.send(course)
})
app.listen(5000)
