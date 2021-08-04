let userName;
console.log(typeof userName);
userName = "Lebed";
console.log(typeof userName);
userName = 58;
console.log(typeof userName);


let userAge;
console.log(typeof userAge);
console.log(userAge);

if (userAge === undefined) {
  console.log('Переменная НЕ определена');
} else {
  console.log('Переменная определена' );
}

if (typeof userAge === 'undefined') {
  console.log('Переменная НЕ определена');
} else {
  console.log('Переменная определена' );
}

let userType = null;
console.log(userType);

let block = document.querySelector('.block');
console.log(block);
console.log(typeof block);

let willYouMarryMe = false;
if (willYouMarryMe) {
  console.log(':)');
} else {
  console.log(':(');
}

let trueOrFalse = 58 < 18;
console.log(trueOrFalse);
console.log(typeof trueOrFalse);

let userWeight = 45;
let userHeight = 1.83;
console.log(userWeight);
console.log(typeof userWeight);
console.log(userHeight);
console.log(typeof userHeight);

let getInfinity = -58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

let getNaN = 'Freelancer' / 10;
console.log(getNaN);
console.log(typeof getNaN);
const bigInteger = 123456789009876543211234567890n;
console.log(typeof bigInteger);

let userNameV2 = 'Freedom';
console.log(typeof userNameV2);

let userAgeV2 = 36;
let userAgeInfo = `Возраст: ${userAgeV2}`; //Возможно только с обратными ковычками
console.log(userAgeInfo);

let userInfo = {
  name: "Lebed",
  age: 36
}
console.log(userInfo);
console.log(typeof userInfo);

let id = Symbol("id")
console.log(typeof id);

let funcVariable = function name(params){
  //код функции
}
console.log(typeof funcVariable);

let userAgeV3 = 58
console.log(userAgeV3);
console.log(typeof userAgeV3);

userAgeV3 = String(userAgeV3);

console.log(userAgeV3);
console.log(typeof userAgeV3);

let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String (userTrue);

console.log(userTrue);
console.log(typeof userTrue);

let userAgeV4 = "58";
console.log(userAgeV4);
console.log(typeof userAgeV4);

userAgeV4 = Number(userAgeV4);

console.log(userAgeV4);
console.log(typeof userAgeV4);

let userMessege = "72" / "2";
console.log(userMessege);
console.log(typeof userMessege);

let userF = 10;
console.log(userF);
console.log(typeof userF);

userF = Boolean(userF);

console.log(userF);
console.log(typeof userF);

let userL = 0;
console.log(userL);
console.log(typeof userL);

userL = Boolean(userL);

console.log(userL);
console.log(typeof userL);

let userS = "0";
console.log(userS);
console.log(typeof userS);

userS = Boolean(userS);

console.log(userS);
console.log(typeof userS);
