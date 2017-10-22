function work(a, b) {
    alert( a + b );
}

function makeLogging(f, log) { 
    function help() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }
    return help;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i];
    alert( 'Лог:' + args.join() );
}