var user = {
    firstName: "Filya",
    surname: "Ivanov"
}

Object.defineProperty(user, "fullName", {
    get: function() {
        return this.firstName + ' ' + this.surname;
    },
    set: function(value) {
        var split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    }
});
user.fullName = "Vasya Pypkin";
alert( user.firstName );
alert( user.surname );
