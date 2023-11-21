const express = require('express');
const {engine} = require('express-handlebars');
const mysql = require('mysql');
const session = require('express-session');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/registro')

const app = express();
app.set('port', 4000);

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs',
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'MySqlJK00*',
    port: 3306,
    database: 'ultimate_pos'
}));

app.use(session({
    secret: 'secret',
    saveUninitialized: true
}));

app.listen(app.get('port'), () => {
    console.log('listening on port: ', app.get('port'));
});

app.use('/', loginRoutes);

app.use('/', registerRoutes);

app.get('/', (req, res) => {
    res.render('login');
});
