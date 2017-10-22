function f(a, b) {
    alert( this);
    alert( a + b );
}

var g = f.bind("Contest");
g(1, 3);