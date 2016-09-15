var express = require('express');
var path = require('path');
var app = express();
//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
app.get('/', function (req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});
app.use(express.static(path.join(__dirname, 'public'))); // load the single view file (angular will handle the page changes on the front-end) });