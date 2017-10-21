function printArgs() {
    var join = [].join;

    var argStr = join.call(arguments, ':');
    alert( argStr );
}

printArgs(1, 2, 3);
