Package.describe({
  summary: "Phantom JS wrapper",
  version: "1.0.0",
  git: "https://github.com/dfischer/meteor-phantomjs"
});

Npm.depends({
	'phantomjs': '1.9.7-15'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('dfischer:phantomjs.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dfischer:phantomjs');
  api.addFiles('dfischer:phantomjs-tests.js');
});
