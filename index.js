var express = require('express');
var app = express();
var path = require('path');
//var jobs = require('./jobs');
//var skills = require('./skills');
var mongodb = require('mongodb').MongoClient;

app.use(express.static('public'));
app.use('/resume', express.static('public'));
app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/resume', function(req,res){
    mongodb.connect("mongodb://localhost:27017/resume", function(err, db){
        if (err) { return console.dir(err); }
        else {
            var jobColl = db.collection("jobs");
            var skillColl = db.collection("skills");
            jobColl.find({}).toArray(function(err, jobs){
                skillColl.find({}).toArray(function(err, skills){
                    res.render('index', {jobs: jobs, skills: skills});
                });
            });
        }
    });
});

app.listen(3000);
