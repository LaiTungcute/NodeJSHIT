const express = require('express')
const app = express()
const port = 3000;
const path = require('path'); 
const router = require('./Routers/index.router');

//Dùng để nối các đường dẫn với nhau: path.join(__dirname, 'Views')
console.log(__dirname);
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.use('/static',express.static(path.join(__dirname, 'public')));

//Dẫn tới router
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})