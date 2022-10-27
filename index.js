const express = require('express')
const app = express();
const port = process.env.POR || 5000;

const cors = require('cors')
app.use(cors());
const course = require('./course.json');

app.get('/', (req, res) => {
    res.send("course API is running Now!");
})
app.get('/course', (req, res) => {
    res.send(course)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = course.find(n => n.course_id === id);
    res.send(selectedcourse);
})
app.listen(5000)
