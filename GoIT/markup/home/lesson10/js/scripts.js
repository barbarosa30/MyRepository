var a, b, result;
var ask = 0;

do {
	if (ask == 1) {
		alert('Поле не может быть пустым!');
	};
a = prompt('Введите число');
b = prompt('Введите степень');
ask = 1;
} while ( (a === "") || (b === "") || (a === null) || (b === null) );
result = stepen(a, b);
console.log('Результат = ', result);

function stepen(a, b) {
    var i = 0;
    var result = 1;
    while (i < Math.abs(b)) {
        result *= a;
        i++;
    };
    if (b < 0) {
        result = 1 / result; // минусовая степень
    };
    return result;
};