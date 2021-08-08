let message = "Привет, фрилансер!";

if (2 > 1) {
  console.log(message);
}

let first = 5;
let second = 10;

if (first === second){
  console.log(message); //false
}

if (" "){
  console.log(message);
}

if (2 > 1) console.log(message); //при 1 результате

let number = 5;

if (number > 10) {
  console.log(message);
} else {
  console.log('Условие не выполнено');
}

if (number > 50){
  console.log('5 больше 50');
} else if (number > 30){
  console.log('5 больше 30');
} else if (number > 10){
  console.log('5 больше 10');
} else if (number > 1){
  console.log('5 больше 1');
} else {
  console.log('Условие не выполнено');
}

let messageStart = 'Привет';
/*let messageEnd;

if (5 > 1) {
  messageEnd = ', Вася!';
} else {
  messageEnd = ', Оля!';
}

messageStart += messageEnd;
console.log(messageStart);*/

let messageEnd = 5 > 1 ? ", Вася!" : ", Оля!";

messageStart += messageEnd;
console.log(messageStart);

let messageSt = "Привет";

messageEnd = 5 > 10 ? ", Вася!" :
 5 > 30 ? ", Оля!" :
  5 > 10 ? ", Миша!" :
   5 > 1 ? ", Андрей!" : ", Иннокентий!"

messageSt += messageEnd;
console.log(messageSt);
