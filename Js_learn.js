function makeBuffer() {
    var value = '';
    function buffer (piece) {
        if (arguments.length === 0) {
            return value;
        }
        value += piece;
    }
    buffer.clear = function() {
      value = '';
    };
    return buffer;
}

var buffer = makeBuffer();


buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() );