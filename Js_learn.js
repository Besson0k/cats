function blind(func, context) {
    return function () {
        return func.apply(context, arguments);
    };
}

function f() {
    alert (this);
}

var g = blind(f, "Context");

g();