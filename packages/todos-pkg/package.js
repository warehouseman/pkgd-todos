Package.describe({
  name: 'warehouseman:todos-pkg',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'The "Try Meteor" To Do List tutorial in a package.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 1.1.0.2.
  api.versionsFrom('1.1.0.2');

  api.addFiles(['client/todos-pkg.js', 'client/todos-pkg.html']);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('warehouseman:todos-pkg');
  api.addFiles('tests/todos-pkg-tests.js');
});
