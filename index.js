

var options = {
    baseUrl: 'src',
    name: '../tools/almond',
    include: ['WorldWind'],
    optimize: 'none',
    out: 'worldwind.js',
    wrap: {
        startFile: 'tools/wrap.start',
        endFile: 'tools/wrap.end'
    }
};

var requirejs = require('requirejs').requirejs(options);

module.exports = requirejs('WorldWind');