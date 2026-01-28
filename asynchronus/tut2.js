// A closure is a function bundled together with its lexical scope, allowing it to access variables from an outer function even after that outer function has executed.

function outer() {
    let a = 10
    function innter() {
        return a;
    }
    return innter;
}


const value = outer();
console.log(value());

/*
Step-by-step execution

outer() is called

A new execution context is created.

a is declared and set to 10.

inner() is defined. It references a.

outer() returns inner

Important twist: outer() finishes execution.

Normally, local variables would be destroyed.

But inner() is returned and still needs a.

Closure is created

JavaScript keeps a alive in memory.

inner() carries a reference to its lexical scope (where a lives).

value() is called

value is actually inner.

It looks for a.

Finds a = 10 in the preserved scope.

Returns 10.

*/

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z())