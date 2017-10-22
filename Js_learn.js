var user = {
    firstName: "Vasya",
    sayHi: function () {
        alert( this.firstName);
    }
};setTimeout(user.sayHi.bind(user), 1000);