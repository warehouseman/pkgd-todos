Tasks = new Mongo.Collection("tasks");

Meteor.startup(function () {
  if (Tasks.find().count() === 0) {
    Tasks.insert({ text: "Initial task", createdAt: new Date() });
  }
});
