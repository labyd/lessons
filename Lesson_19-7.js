showMessage();

function /*глагол+слово-подсказка*/showMessage(){
  console.log('Сообщение');
}

showMessage();
showMessage();

/*function getSumm(){
  let numOne, numTwo;

  function getNumOne(){
    numOne = 1;
  }
  function getNumTwo(){
    numTwo = 2;
  }
  getNumOne();
  getNumTwo();
  let numSumm = numOne + numTwo;
  console.log(numSumm);
}

getSumm();*/
'use strict'
if (2 > 1) {
  function getSumm() {
     let summ2 = 1 + 2;
     console.log(summ2);
   };
}
getSumm();

let message = "Сообщение 1";

function showMessage2() {
  let message = 'Сообщение 2';
  console.log(message);
}
console.log(message);
showMessage2();

let globalVar = "Я глобальная переменная";

function getSumm2(){
  let numOne, numTwo;

  function getNumOne(){
    numOne = 1;
    console.log(globalVar);
  }
  function getNumTwo(){
    numTwo = 2;
  }
  getNumOne();
  getNumTwo();
  let numSumm2 = numOne + numTwo;
  console.log(globalVar);
}
console.log(globalVar);

getSumm2();

function calcSumm(numbOne, numbTwo){
  console.log(`Первая переменная:${numbOne}`);
  console.log(`Вторая переменная:${numbTwo}`);
  let numbSumm = numbOne + numbTwo;
  console.log(`Сумма:${numbSumm}`);
}
calcSumm(1, 2);

function calcSum(numOne, numTwo, more, less){
  let numSumm = numOne + numTwo;
  if (numSumm > 3){
    more();
  } else {
    less();
  }
}

function showMoreMessage(){
  console.log('Больше чем 3');
}
function showLessMessage(){
  console.log('Меньше чем 3');
}
calcSum(1, 5, showMoreMessage, showLessMessage);

function calcS(numOne, numTwo){
  let numSumm = numOne + numTwo;

  return numSumm;
}
let funcRezult = calcS(1, 2);
console.log(`Сумма:${funcRezult}`);

function getS(numOne, numTwo){
  let numSumm = calcSumm3(numOne, numTwo);

  console.log(numSumm);
}
function calcSumm3(numOne, numTwo){
  return numOne + numTwo;
}
getS(5, 5);

/*function calcSumm4(numOne, numTwo) {
  let result = 1;
  for (let i = 0; i < numTwo; i++) {
    result *= numOne;
  }
  return result;
}
console.log(calcSumm4(2, 3));*/

function calcSumm4(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne
  } else {
    return numOne * calcSumm4(numOne, numTwo - 1);
  }
}
console.log(calcSumm4(2, 3));

let showMessage3 = function () {
  console.log('Привет!');
}; // МОЖНО ВЫЗВАТЬ ТОЛЬКО ПОСЛЕ ОБЪЯВЛЕНИЯ

showMessage3();

function getSumm3(){
  let summ = 1 + 2;
  console.log(summ);
}
let someVar = getSumm3;

someVar();
getSumm3();

/*getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));

let getMessage2 = (text, name) => {
  let message = text + ', ' + name + '!';
  return message;
};
console.log(getMessage2('Привет', 'Вася'));

function showMessage7(text, name) {
  console.log(`${text}, ${name}!`);
}
setInterval(showMessage7, 5000, 'Привет', 'Вася');                          ЖУТКО СПАМИТ

function showMessage7(text, name) {
  console.log(`${text}, ${name}!`);
  setTimeout(showMessage7, 5000, text, name);
}
setTimeout(showMessage7, 5000, 'Привет', 'Петя');
*/
function showNumber(num) {
  console.log(num);
  if (num < 5){
  setTimeout(showNumber, 1000, ++num);
 }
}
setTimeout(showNumber, 1000, 1)

function showNumber2(num) {
  console.log(num);
  let timeId = setTimeout(showNumber2, 1000, ++num);
  if (num === 6) {
    clearTimeout(timeId)  //ЕСТЬ И clearInterval
  }
}
setTimeout(showNumber2, 1000, 1);
