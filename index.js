#! /usr/bin/env node

var fs = require('fs');
var formidable = require('formidable');
var git = require('./lib/git')(__dirname);
var http = require('http');
var hyperglue = require('hyperglue');
var _ = require('lodash');
var html = fs.readFileSync(__dirname + '/index.html');
var port = process.env.PORT || 8080;

function handlePost (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields) {
        console.dir(fields);
        res.writeHead(200);
        res.end('git branch -D ' + fields.branches.join(' '));
    });
}

function handleGet (req, res) {
    git.branches(function (err, branches) {
        var data = _.map(branches, function (b) {
            return {
                '.branch-id': { value: b },
                '.branch-name': b
            }
        });

        res.writeHead(200);
        res.end(hyperglue(html, {
            '.branch-item': data
        }).outerHTML);
    });
}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') return handlePost(req, res);

    handleGet(req, res);
});

server.listen(port);
console.log('Listening on ' + port);
