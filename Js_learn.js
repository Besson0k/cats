'use strict';
function bind(func, contest) {
    return function () {
        return func.apply (contest, arguments);
    };
}

var user = {
    firstName: "Vasya",
    sayHi: function (who) {
        alert( this.firstName + ": Hi, " + who);
    }
};

var sayHi = bind(user.sayHi, user);

sayHi("Janny");
sayHi("Petya");
sayHi("Olga");