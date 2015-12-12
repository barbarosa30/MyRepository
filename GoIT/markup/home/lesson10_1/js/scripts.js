var arrName = [];
for (var i = 0; i < 5; i++) {
	arrName[i] = prompt('Заполните имена:', 'Вася' );
}

var name = prompt('Введите имя:');
var counter = 0;
for (var i = 0; i < arrName.length; i++) {
	if (arrName[i] == name) {
		alert(name + ', вы успешно вошли');
		counter = 1;
		break;
        } 
}
if (counter == 0) {
alert('Введенное имя пользователя не существует в массиве ');
}