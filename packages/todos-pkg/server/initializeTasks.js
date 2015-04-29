Meteor.startup(function () {
	console.log("~~~~~~~~~ " + Tasks.find().count());
  if (Tasks.find().count() === 0) {
    Tasks.insert({ text: "Initial task", createdAt: new Date() });
  }
});

