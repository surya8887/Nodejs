// Step 1: Fake async APIs (using callbacks)
function getUser(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: "Vijay" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    callback(null, [
      { id: 1, title: "JS Basics" },
      { id: 2, title: "Async JS" }
    ]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    callback(null, ["Great post!", "Very helpful"]);
  }, 1000);
}



// Step 2: Using them → Callback Hell
getUser(1, (err, user) => {
  if (err) return console.error(err);

  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);

    getComments(posts[0].id, (err, comments) => {
      if (err) return console.error(err);

      console.log("User:", user.name);
      console.log("Post:", posts[0].title);
      console.log("Comments:", comments);
    });
  });
});


