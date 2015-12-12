
function stepen(a, b) {
	var i = 0;
	var result = 1;
	while (i < b) {
		result *= a;
		i++;
	}
	return result;
}

var a, b, result;
a = prompt ('Введите число');
b = prompt ('Введите степень');
result = stepen(a, b);
alert (result);
