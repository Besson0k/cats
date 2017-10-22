function checkNumber(value) {
    return typeof value == 'number';
}
function typeCheck(f, checks) {
    return function () {
        for (var i = 0; i < arguments.length; i++) {
            if (!checks[i](arguments[i])){
                alert("Nocorrect arguments № " + (+i+1));
                return;
            }
        }
        return f.apply(this, arguments);
    }
}

function sum(a, b) {
    return a + b;
}

sum = typeCheck(sum, [checkNumber, checkNumber]);

alert( sum(1,3) );
sum(true, null);
sum(1, ["array", "in", "sum!?"]);