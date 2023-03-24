const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use(express.static(path.join(__dirname, 'Views')))

app.get('/', (req, res) => {
  res.render('index.html');
})

app.get('/login', (req, res) => {
  res.render('login.html');
})

app.get('/register', (req, res) => {
  res.render('register.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})