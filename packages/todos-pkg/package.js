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

  api.use('meteor-platform');
  api.use('accounts-ui');
  api.use('accounts-password');

  api.addFiles(['lib/collections/tasks.js'], ['client', 'server']);
  api.export('Tasks', ['client', 'server']);

  api.addFiles(['server/initializeTasks.js'], ['server']);
  api.addFiles(['server/todos_server.js'], ['server']);

  api.addFiles(['client/todos-pkg.html'], ['client']);  // MUST add all templates FIRST, so helpers can find them
  api.addFiles(['client/todos-pkg.js'], ['client']);    // Now put list your helpers **in execution order**.

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('warehouseman:todos-pkg');
  api.addFiles('tests/todos-pkg-tests.js');
});
