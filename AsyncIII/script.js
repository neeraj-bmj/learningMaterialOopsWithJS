// This code demonstrates the concept of "callback hell" in JavaScript.
// Callback hell is a situation where multiple nested callbacks are used to handle asynchronous operations.

// CallBack Hell :

// Callbacks are functions that are passed as arguments to other functions and are executed after the completion of a task.
// In this example, we have three steps that need to be completerd in order. Each step is represented by a function that takes a callback as an argument.
// The callback is executed after the step is completed. This creates a "callback hell" situation where the code becomes difficult to read and maintain.

//1) callBack Hell

function stepOne(callback) {
  setTimeout(function () {
    console.log("step one completed");
    callback();
  }, 1000);
}
function stepTwo(callback) {
  setTimeout(function () {
    console.log("step two completed");
    callback();
  }, 1000);
}
function stepThree(callback) {
  setTimeout(function () {
    console.log("step three completed");
    callback();
  }, 1000);
}

// Call

// stepOne(function(){
//     stepTwo(function(){
//         stepThree(function(){
//             console.log("All steps completed By Callback Hell.");
//         })
//     })
// })

// To avoid this, we can use promises or async/await syntax.
// However, for the sake of this example, we will stick to callbacks.

//2) Using Promises
// promises are a way to handle asynchronous operations in JavaScript. They allow us to write cleaner and more readavble code by avoiding nested callbacks.
// A promise represents a value that may be available now, or in the future, or never.
// It is an object that can be in one of three states: pending, fulfilled (resolved), or rejected.
// When a promise is fulfilled (Resolved), it means that the operations was successful and the value is available.
// When a promise is rejected, it means that the operation failed and an error occurred.
// When a promise is pending, it means that the operations is still in progress and the value is not yet available.

function One() {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      console.log("one completd");
      resolved();
    }, 1000);
  });
}
function Two() {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      console.log("two completd");
      resolved();
    }, 1000);
  });
}
function Three() {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      console.log("Three completd");
      resolved();
    }, 1000);
  });
}

//Call

// One()
// .then(Two)
// .then(Three)
// .finally(function(){
//     console.log("All steps completed By Promises.")
// })

// Task One ):

//1) Simulate a food delivery process using promises.
// Create three functions: orderFood, prepareFood, and deliverFood. Each function should return a promise that resolves after a certain amount of time (e.g., 2 seconds for orderFood, 3 seconds for prepareFood, and 1 second for deliverFood). Chain the promises together to simulate the entire food delivery process.
// add Bonus : add a chance to reject the promise in the deliverFood function. If the promise is rejected, log an error message that "❌ Delivery failed".
// Use the finally method to log a message indicating that the food has been delivered.

function orderFood() {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      // console.log("💛 Food ordered");
      resolved();
    }, 2000);
  });
}
function prepareFood() {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      // console.log("🟢 Food prepared");
      resolved();
    }, 3000);
  });
}
function deliverFood() {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      let chance = Math.random();
      // console.log("chance = " + chance);
      if (chance < 0.7) {
        // console.log("✅ Food delivered");
        resolved();
      } else {
        console.log("❌ Delivery failed");
        // rejected("Delivery failed due to some issue.");
      }
    }, 1000);
  });
}

// Call

// orderFood()
// .then(function(){
//     console.log("💛 Food ordered");
//     return prepareFood();
// })
// .then(function(){
//     console.log("🟢 Food prepared");
//     return deliverFood();
// })
// .then(function(){
//         console.log("✅ Food delivered");
// })
// .catch(function(error){console.log("Error : " + error)})
// .finally(function(){
//     console.log("Food delivery process completed.");
// })

// Task Two ):
//2) Chained Promises: user -> post -> comment
// Create three functions:
// 1. getUser() -> resolved with { id :1 , name : "neeraj"}
// 2. getPost() -> resolved with list of the posts of the user
// 3. getComment() -> resolved with comments of the post
// chained with .then() method. and log the final output in the console.

function getUser() {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      let user = { id: 1, name: "Neeraj Gupta" };
      resolved(user);
    });
  });
}
function getPost(userId) {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      let post = ["hello post", "Post two", "This is a third post"];
      resolved(post);
    });
  });
}
function getComment() {
  return new Promise(function (resolved, rejected) {
    setTimeout(function () {
      let comment = ["This is a comment", "This is another comment"];
      resolved(comment);
    });
  });
}

// Call

// getUser()
// .then(function(data){
//     console.log(data);
//     console.log(`user name = ${data.name}`);
//     console.log(`user id = ${data.id}`);
//     return getPost(data.id);
// })
// .then(function(allPosts){
//     console.log(allPosts);
//     return getComment();
// })
// .then(function(allComments){
//     console.log(allComments);
// })
// .finally(function(){
//     console.log("All steps completed By Promises.");
// })

// task three ):
// 3) feke API delay

// Task :
// write a function fakeApiCall(endpoint) that:
// accepts a string like "users"  or "posts"
// resolves with some dummy data after a random delay between 1 and 3 secoonds.

let fakeApiCall = function (endpoint) {
  return new Promise(function (resolved, rejected) {
    let delay = Math.floor(Math.random() * 2000 + 1000);
    setTimeout(function () {
      if (endpoint === "users") {
        let users = [
          { id: 1, name: "Neeraj Gupta" },
          { id: 2, name: "Rahul Gupta" },
          { id: 3, name: "Anuragh Gupta" },
          { id: 4, name: "Shubham Gupta" },
          { id: 5, name: "Shivam Gupta" },
        ];
        resolved(users);
      } else if (endpoint === "posts") {
        let posts = [
          { id: 1, posts: "Hello Post 1"},
          { id: 2, posts: "Hello Post 2"},
          { id: 3, posts: "Hello Post 3"},
          { id: 4, posts: "Hello Post 4"},
          { id: 5, posts: "Hello Post 5"},
        ];
        resolved(posts);
      } else {
        console.log(" ❌  Invalid endpoint");
        rejected();
      }
    }, delay);
  });
};


// Call

// call for users
// fakeApiCall("posts")
// .then(function(data){
//     console.log(data);
// })

// call for posts

// fakeApiCall("users")
// .then(function(data){
//     console.log(data);
// })

// call for invalid endpoint

// fakeApiCall("hello")
// .then(function(data){
//     console.log(data);
// })



