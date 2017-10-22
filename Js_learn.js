function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

ask("Выпустить птичку?", "да", fly, die);

function fly() {
    alert( 'улетела :)' );
}

function die() {
    alert( 'птичку жалко :(' );
}
