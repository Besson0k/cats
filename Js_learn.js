function f(x) {
    return Math.random() * x;
}

function makeCaching(f) { 
    var cach = {};
    return function(x) {
        if (!(x in cach)) {
            cach[x] = f.call(this, x);
        }
        return cach[x];
    };
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b );

b = f(2);
alert( a == b );