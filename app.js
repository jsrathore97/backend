const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

const api = require('./api/api')

const morgan = require('morgan');
app.use(morgan('dev'));     // Morgan says which APIs is Hitting from front-end

app.listen(port, ()=>{
    console.log("Node JS / Express JS Server connected");
})

app.use(api);
