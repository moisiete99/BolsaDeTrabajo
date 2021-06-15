const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT)

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(require('./routes/'));

//app.use('/')

app.listen(3500, () => {
    console.log('Server on port:', 3500);
});