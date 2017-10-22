alert( {}.toString.call(123) );
alert( {}.toString.call("строка") );
alert( Array.isArray(new Date) );
alert( Array.isArray([1, 2, 3]) );

var x = new Date();

if (x.getTime) {
    alert( 'Дата!' );
    alert( x.getTime() );
}