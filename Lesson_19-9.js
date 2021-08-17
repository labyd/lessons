let someBigNum = 1e6;
console.log(someBigNum);

let someLittleNum = 1e-6;
console.log(someLittleNum);

console.log(0xFF);

console.log(0b11111111);

console.log(0o377);

let num = 193;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

numOne = Math.ceil(5.8);
numTwo = Math.ceil(2.2);
numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

numOne = Math.round(5.8);
numTwo = Math.round(2.2);
numThree = Math.round(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

numOne = Math.round(5.845 * 10) / 10;
numTwo = Math.round(5.845 * 100) / 100;
numThree = Math.round(5.8449 * 100) /100;

console.log(numOne);
console.log(numTwo);
console.log(numThree);

numOne = 5.84769287846726462;
console.log(numOne.toFixed(3)); //СУЩЕСТВУЕТ ПРОБЛЕМА С ЧИСЛОМ 5. ОНООКРУГЛЯЕТСЯ В МЕНЬШУЮ СТОРОНУ

let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);

let sourceNum = 1.005;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));

sourceNum = 1.005 + Number.EPSILON;
numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));

console.log(Number.EPSILON);

let valueOne = +"150";
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = +"150px";
console.log(valueTwo);
console.log(typeof valueTwo);

valueOne = parseInt('150.58px');
console.log(valueOne);
console.log(typeof valueOne);

valueTwo = parseFloat("150.58px")
console.log(valueTwo);
console.log(typeof valueTwo);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.max(56, -23, 15));
console.log(Math.min(56, -23, 15));

num = -483;
console.log(Math.abs(num)); //МОДУЛЬ

console.log(Math.pow(3, 5)); // 3*3*3*3*3
