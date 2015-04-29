if (Meteor.isClient) {
  // This code only runs on the client
  Template.todos.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });  
}

