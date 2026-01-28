// console.log("Namaste");

// setTimeout(function () {
//     console.log("JavaScript");
// }, 2000);

// console.log("Session-2");

// ------------------ ASYNC CALLBACK FLOW ------------------

const cart = ["shoes", "pant", "kurta"];

const api = {
    createOrder(cart, callback) {
        console.log("Creating order...");
        setTimeout(() => {
            console.log("Order created for:", cart);
            callback();
        }, 1000);
    },

    proceedToPayment(callback) {
        console.log("Proceeding to payment...");
        setTimeout(() => {
            console.log("Payment successful");
            callback();
        }, 1000);
    },

    showOrderSummary(callback) {
        console.log("Showing order summary...");
        setTimeout(() => {
            console.log("Order summary displayed");
            callback();
        }, 1000);
    },

    updateWallet() {
        console.log("Wallet updated ✅");
    }
};

// Callback hell (but works!)
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
});
