function sum(a) {
    var correctSum = a;
    function f(b) {
        correctSum +=b;
        return f;
    }
    f.toString = function() {
        return correctSum;
    };
    return f;
}

alert( sum(1)(2) );
alert( sum(5)(-1)(2) );
alert( sum(6)(-1)(-2)(-3) );
alert( sum(0)(1)(2)(3)(4)(5) );