# pkgd-todos
The "Try Meteor" To Do List tutorial shoe-horned into a package.

This is a "learn by failing" exercise.  Please see my questions in the Meteor forum.

Lessons learned from Step #2 -- "Templates"  ([“Try Meteor” as a package. Snag #1. Can a package export a template?](https://forums.meteor.com/t/solved-try-meteor-as-a-package-snag-1-can-a-package-export-a-template/3641))

 1. You **can** put templates in a package but then this line in package.js becomes **obligatory** :  `api.use('templating');`
 2. Files listed with `api.addFiles( ... );` MUST be listed in execution order, to avoid errors like, `Uncaught TypeError: Cannot read property 'helpers' of undefined.`

Lessons learned from Step #3 -- "Collections" ([“Try Meteor” as a package. Snag #2. Client can’t see Collection.insert() even if autopublish is used](https://forums.meteor.com/t/try-meteor-as-a-package-snag-2-client-cant-see-collection-insert-even-if-autopublish-is-used/3658))

 1. I was getting the error "insert failed: Method not found" in the browser console.  The reason for it was failing to put , 'client', 'server' in square brackets (as an array) thus leaving 'server' ignored.  It's probably wise to **always** put all those parameters in square brackets, even if there is only one element to the array, simply to protect against that kind of hard-to-spot syntax error.

Lessons learned from Steps #4 through #8 -- "

 1. Everything worked exactly as in the non-packaged tutorial; relocated to suit package structure, however.

Lessons learned from step #9 -- "

 1. Again, everything worked exactly as in the non-packaged tutorial


------


