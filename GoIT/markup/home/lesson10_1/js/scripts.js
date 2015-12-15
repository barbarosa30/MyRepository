var arrName = [];
var proverka;
for (var i = 0; i < 5; i++) {
	 proverka = prompt('Заполните имена:', 'Вася' );
	   while ( (proverka == "") || (proverka == null) ) {
	 	alert('Поле не может быть пустым');
	 	proverka = prompt('Заполните имена:', 'Вася');
	   };
	 arrName[i] = proverka;
};

var name, ask;
ask = 0;
do {
	if (ask == 1) {
      alert('Поле не может быть пустым');
	};
  name = prompt('Введите имя:');	
  ask = 1;
} while ( (name === "") || (name === "null") ); 
var counter = 0;
for (var i = 0; i < arrName.length; i++) {
	if (arrName[i] == name) {
		alert(name + ', вы успешно вошли');
		counter = 1;
		break;
        }; 
};
if (counter == 0) {
alert('Введенное имя пользователя не существует в массиве ');
};