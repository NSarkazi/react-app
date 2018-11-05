var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendet: true}));

require('./users');

var List = require('./users');
    // [ 
    // {
    //     id: 1,
    //     name: 'number one',
    //     link: "http://www.ibm.com"
    // },
    // {
    //     id: 2,
    //     name: 'number two',
    //     link: "http://www.iconfinder.com",
    // },
    // {
    //     id: 3,
    //     name: 'number three',
    //     link: "http://www.iconfinder2.com"
    // }
    // ];

app.get('/', function (req, res) {
    res.send('hello api')
})

app.get('/List', function (req, res) {
    res.send(List);
})

app.get('/List/:id', function (req, res){
    console.log(req.params);
    var artist = List.find(function (artist) {
        return artist.id === Number(req.params.id)
    });
    res.send(artist);
})
app.post('/List', function(req, res) {
    console.log(req.body);
    res.send('post data');
})

app.listen(3012, function () {
    console.log('API app started');
})