'use strict';
function bind(func, contest) {
    return function () {
        return func.apply (contest, arguments);
    };
}

var user = {
    firstName: "Vasya",
    sayHi: function () {
        alert( this.firstName);
    }
};

setTimeout(bind(user.sayHi, user), 1000);