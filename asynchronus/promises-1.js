const cart = ["shoes", "pant", "kurta"];

const api = {
    createOrder(cart) {
        return new Promise((resolve) => {
            console.log("Creating order...");
            setTimeout(() => {
                console.log("Order created for:", cart);
                resolve();
            }, 1000);
        });
    },

    proceedToPayment() {
        return new Promise((resolve) => {
            console.log("Proceeding to payment...");
            setTimeout(() => {
                console.log("Payment successful");
                resolve();
            }, 1000);
        });
    },

    showOrderSummary() {
        return new Promise((resolve) => {
            console.log("Showing order summary...");
            setTimeout(() => {
                console.log("Order summary displayed");
                resolve();
            }, 1000);
        });
    },

    updateWallet() {
        console.log("Wallet updated ✅");
    }
};

api
    .createOrder(cart)
    .then(() => api.proceedToPayment())
    .then(() => api.showOrderSummary())
    .then(() => api.updateWallet())
    .catch((err) => console.error(err));
