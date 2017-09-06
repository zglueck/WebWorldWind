var requirejs = require('requirejs');

requirejs.config({
        baseUrl: 'src',
        name: '../tools/almond',
        include: ['WorldWind'],
        optimize: 'none',
        out: 'worldwind.js',
        wrap: {
            startFile: 'tools/wrap.start',
            endFile: 'tools/wrap.end'
        }
    });

module.exports = requirejs('WorldWind');