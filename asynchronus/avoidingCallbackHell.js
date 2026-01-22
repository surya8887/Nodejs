// ------------------------------------
// Step 1: Callback-based async APIs
// ------------------------------------

function getUser(userId, callback) {
  setTimeout(() => {
    if (!userId) {
      callback(new Error("User ID is required"));
      return;
    }
    callback(null, { id: userId, name: "Vijay" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    if (!userId) {
      callback(new Error("User ID is required to fetch posts"));
      return;
    }
    callback(null, [
      { id: 1, title: "JS Basics" },
      { id: 2, title: "Async JS" }
    ]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    if (!postId) {
      callback(new Error("Post ID is required to fetch comments"));
      return;
    }
    callback(null, ["Great post!", "Very helpful"]);
  }, 1000);
}

// ------------------------------------
// Step 2: Promisify callback APIs
// ------------------------------------

function getUserAsync(userId) {
  return new Promise((resolve, reject) => {
    getUser(userId, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

function getPostsAsync(userId) {
  return new Promise((resolve, reject) => {
    getPosts(userId, (err, posts) => {
      if (err) reject(err);
      else resolve(posts);
    });
  });
}

function getCommentsAsync(postId) {
  return new Promise((resolve, reject) => {
    getComments(postId, (err, comments) => {
      if (err) reject(err);
      else resolve(comments);
    });
  });
}

// ------------------------------------
// Step 3: async/await (no callback hell)
// ------------------------------------

async function processUserData(userId) {
  try {
    const user = await getUserAsync(userId);
    const posts = await getPostsAsync(user.id);
    const comments = await getCommentsAsync(posts[0].id);

    console.log("User:", user.name);
    console.log("Post:", posts[0].title);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// ------------------------------------
// Step 4: Run
// ------------------------------------

processUserData(1);
