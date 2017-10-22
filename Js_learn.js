function work(a) {

}

function makeLogging(f, log) {
    function help(a) {
        log.push(a);
        return f.call(this, a);
    }
    return help;
}
var log = [];
work = makeLogging(work, log);

work(1);
work(5);
work(3);
work(10);

for (var i = 0; i < log.length; i++) {
    alert( "Log:" + log[i] );
}

