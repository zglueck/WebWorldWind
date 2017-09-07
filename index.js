var requirejs = require('requirejs');

var path = require('path');
var requirejs = require('requirejs');

requirejs.config({
        paths : {
            'WorldWind' : path.join(__dirname, 'src')
        },
        nodeRequire : require
    });

module.exports = requirejs('WorldWind/WorldWind');