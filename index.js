const express = require('express');
const router = require('./router');

const app = express();

app.set('view engine', 'ejs');
app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('> server up and running on PORT: ' + PORT));
