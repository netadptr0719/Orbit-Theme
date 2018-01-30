var express = require('express');
var app = express();
var path = require('path');
var jobs = require('./jobs');
var skills = require('./skills');

app.use(express.static('public'));
app.use('/resume', express.static('public'));
app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/resume', function(req,res){
    res.render('index', {jobs: jobs, skills: skills});
});

app.listen(3000);
