/** app.js - Main node executable
 *
 */
// Require paths
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
app.use(express.static(path.join(__dirname, 'public'))); // serve static
app.listen(80, function () {
    console.log('Example app listening on port 80!');
});
//mongoose.connect('mongodb://localhost/web_db');
app.get('/', function (req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});
app.get('/api/db', function (req, res) {
    console.log(req.body);
    res.redirect('/');
});
app.get('/api/hello', function (req, res) {
    res.send('Hello World!');
});
