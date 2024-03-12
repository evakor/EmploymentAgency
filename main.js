const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/employee', (req, res) => {
    res.render('pages/employee');
});
app.get('/employer', (req, res) => {
  res.render('pages/employer');
});

app.get('/jobs', (req, res) => {
  res.render('pages/jobs');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
