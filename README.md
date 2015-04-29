# pkgd-todos
The "Try Meteor" To Do List tutorial shoe-horned into a package.

This is a "learn by failing" exercise.  Please see my questions in the Meteor forum.

Lessons from step #2 -- "Templates"

 1. You **can** put templates in a package but then this line in package.js becomes **obligatory** :  `api.use('templating');`
 2. Files listed with `api.addFiles( ... );` MUST be listed in execution order, to avoid errors like, `Uncaught TypeError: Cannot read property 'helpers' of undefined.`

------


