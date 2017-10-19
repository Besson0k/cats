var user = {
    firstName: "Filya",
    surname: "Ivanov",
    get fullName() {
        return this.firstName + ' ' + this.surname;
    },
    set fullName(value) {
        var split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    }
};

alert (user.fullName);
user.fullName = "Vasya Pypkin";
alert( user.firstName );
alert( user.surname );
