'use strict';
function bind(func, context) {
    return function() { // (*)
        return func.apply(context, arguments);
    };
}

function f(a, b) {
    alert( this );
    alert( a + b );
}

var g = bind(f, "Context");
g(1, 2);