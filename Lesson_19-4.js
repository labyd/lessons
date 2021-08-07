let age = 30-6; //30 и 6 - операнды
// либо
//let height = h - y; // h и y - операнды

// Бинарный оператор - участвуют 2 операнда. Унарный оператор - участвует 1 операнд

let x;

x= 9 - 5;
console.log(`Результат вычитания: ${x}`);

x = 5 + 8;
console.log(`Результат сложения: ${x}`);

x = 2 * 3;
console.log(`Результат умножения: ${x}`);

x = 10 / 2;
console.log(`Результат деления: ${x}`);

x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);

x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);

let resultOne = 'Фрилансер' + '' + 'по' + '' + 'жизни';
console.log(resultOne);

let resultTwo = 'Фрилансер' + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

let resultThree = 58 + ' Фрилансер';
console.log(resultThree);

let resultFour = 2 + '2';
console.log(resultFour);

let resultFive = 58 - 20 + ' Фрилансер';
console.log(resultFive);

let resOne = '25' - 5;
console.log(resOne);
console.log(typeof resOne);

let resTwo = 10 * '80';
console.log(resTwo);
console.log(typeof resTwo);

let resThree = 3 * 'Фрилансер';
console.log(resThree);
console.log(typeof resThree);

let resulOne = +'25';
console.log(resulOne);
console.log(typeof resulOne);

let resulTwo = +10
console.log(resulTwo);
console.log(typeof resulTwo);

let users = '25';
let admins = '10';
console.log(users + admins);

console.log(+users + +admins);

let a = 1 + 2;
let b = 2;
let result = 8 - (a = b + 3);
console.log('Результат в скобках: ' + a);
console.log('Общий результат: '+ result);

let one = two = three = 1 + 2;
console.log(one);
console.log(two);
console.log(three);

let userF = 5;
userF = userF + 3;
userF = userF * 2;

let userL = 5;
console.log(userL);
userL += 3;
console.log(userL);
userL *= 2;
console.log(userL);

let userS = 5;
console.log(userS);
userS += 1 + 2;
console.log(userS);

// Инкримент (++) увеличивает число на 1. Декремент (--) уменьшает число на 1

let usersCounter = 0;
let newUsers = 2 * ++usersCounter;
console.log(newUsers);

console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 38);
console.log(8 != 9);

let res = 11 > 10;
console.log(res);

console.log('Б' > 'А');
console.log('Скрипт' > 'Скрипка');
console.log('Слайдер' > 'Слайд');
console.log('Фрилансер' > 'фрилансер');

console.log('58' > 10);
console.log('007' == 7);
console.log(true == 1);
console.log(false == 0);

let itemA = 0;
let itemB ='0';

console.log(Boolean(itemA));
console.log(Boolean(itemB));

console.log(itemA == itemB);

console.log(0 === false);
console.log('007'=== 7);
console.log('58'!== 58);

console.log(true || true);
console.log(true || false); // Действует как OR
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(false && true);  //Действует как AND
console.log(true && false);
console.log(false && false);

// AND приорететнее OR
console.log(1 && 0 || 2 && 1);

console.log(!true);
console.log(!false); // Действует как NOT

//NOT приорететнее AND И OR
console.log(!true && 58 || 18 && !1);

console.log(!! 'фрилансер');
//или
console.log(Boolean('фрилансер'));

let name;
console.log(name ?? "Без имени");

let nameV2 = 'Фрилансер';
console.log(name ?? "Без имени");
