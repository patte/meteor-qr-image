Package.describe({
  name: 'patte:meteor-qr-image',
  version: '0.0.1',
  summary: 'wraps npm package qr-image',
  git: 'https://github.com/patte/meteor-qr-image.git',
  documentation: 'README.md'
});

Npm.depends({
  'qr-image': '3.1.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3');
  api.addFiles('patte:meteor-qr-image.js', 'server');
  api.export('QRimage', 'server')	
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('patte:meteor-qr-image');
  api.addFiles('patte:meteor-qr-image-tests.js');
});
