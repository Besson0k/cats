function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        
        firstName: {
            get: function () {
                return this.fullName.split(" ")[0];
            },
            set: function (newFirstName) {
                this.fullName = newFirstName + " " + this.lastName;
            }
        },
        lastName: {
            get: function () {
                return this.fullName.split(" ")[1];
            },
            set: function (newLastName) {
                this.fullName = this.firstName + " " + newLastName;
            }
        }
    });
}

var vasya = new User("Vasya Pypkin");
alert( vasya.firstName );
alert( vasya.lastName );

vasya.lastName = "Ivanov";

alert ( vasya.fullName);
