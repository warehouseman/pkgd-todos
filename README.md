# pkgd-todos
The "Try Meteor" To Do List tutorial shoe-horned into a package.

This is a "learn by failing" exercise.  Please see my questions in the Meteor forum.

Lessons from step #2 -- "Templates"  ([“Try Meteor” as a package. Snag #1. Can a package export a template?](https://forums.meteor.com/t/solved-try-meteor-as-a-package-snag-1-can-a-package-export-a-template/3641))

 1. You **can** put templates in a package but then this line in package.js becomes **obligatory** :  `api.use('templating');`
 2. Files listed with `api.addFiles( ... );` MUST be listed in execution order, to avoid errors like, `Uncaught TypeError: Cannot read property 'helpers' of undefined.`

Problems with Step #3 -- Collections ([“Try Meteor” as a package. Snag #2. Client can’t see Collection.insert() even if autopublish is used](https://forums.meteor.com/t/try-meteor-as-a-package-snag-2-client-cant-see-collection-insert-even-if-autopublish-is-used/3658))

 1. I am getting the error "insert failed: Method not found" in the browser console.



------


