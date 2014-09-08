var phantomjs = Npm.require('phantomjs'), path = Npm.require('path');
process.env.PATH += ':' + path.dirname(phantomjs.path);
