function showFullName(firstName, lastPart) {
    alert( this[firstName] + " " + this[lastPart] );
}

var user = {
    firstName: "Василий",
    surname: "Петров",
    patronym: "Иванович"
};

showFullName.call(user, 'firstName', 'surname');
showFullName.call(user, 'firstName', 'patronym');