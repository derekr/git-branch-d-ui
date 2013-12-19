var exec = require('child_process').exec;
var _ = require('lodash');

var git = {};

git.branches = function (callback) {
    exec('git branch --no-color', function (err, stdout, stderr) {
        if (err) return callback(err);

        var branches = _.map(stdout.split("\n"), function (b) {
            b = b.replace(/\s*/g, '');
            b = b.replace(/^\*/, '');
            return b;
        });

        callback(null, _.compact(branches));
    });
};

module.exports = function (repo) {
    return git;
};
