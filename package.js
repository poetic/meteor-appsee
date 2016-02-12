Package.describe({
  name: 'poetic:meteor-appsee',
  version: '0.0.1',
  summary: 'Meteor package wrapper for appsee',
  git: 'https://github.com/poetic/meteor-appsee',
  documentation: 'README.md'
});

Cordova.depends({
  'cordova-plugin-appsee': '2.1.55'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('appsee.js', 'web.cordova');
});

Package.onTest(function(api) {
});
