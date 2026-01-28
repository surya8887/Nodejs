function add(a, b, callback) {
    const result = a + b;
    callback(result)
}

function printValue(value) {
    console.log(value);

}

add(10, 39, printValue)


function sum(a, b, callback) {
    const result = a + b;
    return () => {
        callback(result)
    }
}

const ans = sum(10, 30, (value) => {
    console.log(value);

});
ans();

function add1(a, b, callback) {
    let result = a + b;
    callback(result)
    return () => console.log(result);

}

const ans1 = add1(10,31,()=>{})
ans1();

