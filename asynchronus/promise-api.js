function fetchProduct() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Running Shoes" }), 800);
    });
}

function fetchReviews() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Great!", "Worth the price"]), 1200);
    });
}

function fetchRecommendations() {
    return new Promise((reject) => {
        setTimeout(() => reject("Recommendation service down"), 1500);
    });
}

function fetchAds() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Adidas Ad", "Nike Ad"]), 500);
    });
}
// Promise.all([p1,p2,p3,....]) => [res1,res2,res3,......],

Promise.all([
    fetchProduct(),
    fetchReviews(),
    fetchRecommendations(),
])
    .then(([product, reviews, recommendations]) => {
        console.log("Page loaded", { product, reviews, recommendations });
    })
    .catch((error) => {
        console.error("Page failed to load:", error);
    });

//  Promise.allSetteld([p1,p2,p3])
Promise.allSettled([
    fetchProduct(),
    fetchReviews(),
    fetchRecommendations(),
    fetchAds(),
]).then((results) => {
    const data = {};

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            data[index] = result.value;
        } else {
            data[index] = null;
            console.warn("Service failed:", result.reason);
        }
    });

    console.log("Page rendered with partial data", data);
});

//  Promse.race([])
function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject("Request timeout"), ms)
  );
}

Promise.race([
  fetchProduct(),
  timeout(600),
])
  .then((data) => {
    console.log("Product loaded:", data);
  })
  .catch((error) => {
    console.error("Failed:", error);
  });

//   Promise.any([p1,p2,p3])

function fetchFromServerA() {
  return new Promise((reject) =>
    setTimeout(() => reject("Server A down"), 500)
  );
}

function fetchFromServerB() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data from Server B"), 1000)
  );
}

function fetchFromServerC() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data from Server C"), 1500)
  );
}

Promise.any([
  fetchFromServerA(),
  fetchFromServerB(),
  fetchFromServerC(),
])
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("All servers failed", error);
  });
