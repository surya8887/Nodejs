const getCurrentDate = () => new Date.toISOString()

const formateCurreny = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: currency,

    }).format(amount)
}
exports.getCurrentDate = getCurrentDate;
exports.formateCurreny = formateCurreny;

console.log(formateCurreny(200));
