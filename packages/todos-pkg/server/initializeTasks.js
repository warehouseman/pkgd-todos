Meteor.startup(function () {
  console.log("~~~~~~~~~ " + Tasks.find().count());
  if (Tasks.find().count() === 0) {
    Tasks.insert({
             text: "Initial task"
      , createdAt: new Date()         // current time
      ,     owner: "start up"         // _id of logged in user
      ,  username: "nobody"           // username of logged in user
    });
  }
});

