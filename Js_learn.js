function makeArmy() {

    var shooters = [];
    var unis = 'Unis';

    for (var i = 0; i < 10; i++) {
        var makeShooter = function () {

            var a = i;
            return function () {
                console.log(unis);
                alert(a);
            }
        };
        shooters.push(makeShooter());
    }
    debugger;
    console.log('i = ', i);
    return shooters;
}

var army = makeArmy();
// i == 10

army[0]();
army[5]();
( function(x) {console.log(x);} )(123);