var phantomjs = Npm.require('phantomjs'), path = Npm.require('path'); // include
process.env.PATH += ':' + path.dirname(phantomjs.path);
