function User(firstName, lastName) {
    var phrase = "Hi";

    function getFullName() {
        return firstName + " " + lastName;
    }
    this.sayHi = function() {
        alert(phrase + ", " + getFullName() );
    };
}

var vasya = new User ("Vasya", "Pupkin");
vasya.sayHi();

