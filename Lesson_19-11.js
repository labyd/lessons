let arr = ['Ваня', 'Иштван','Оля',];
arr = [
  "Mike",
  {
    type: "JS",
    age: 36
  },
  true,
  function(){
    console.log("Hi, my name is Nick");
  }
];

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr[0]);
console.log(arr[12]);

console.log(arr);
console.log(arr[1].type);
console.log(arr[2]);
arr[3]();

console.log(matrix);
console.log(matrix[0]);
console.log(matrix[1][0]);

arr[0] = 'Nick';
arr[4] = 'Фрилансер';
console.log(arr);

arr.push(':)');
console.log(arr);

arr.shift();
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift('Nick');
console.log(arr);

delete arr[1];
console.log(arr);
console.log(arr[1]);

arr = [
  "Mike",
  {
    type: "JS",
    age: 36
  },
  true,
  function(){
    console.log("Hi, my name is Nick");
  }
];

console.log(arr);

arr.splice(1, 1);
console.log(arr);

let removed = arr.splice(1, 1);
console.log(removed);

arr.splice(0, 1, 'Коля');
console.log(arr);

arr.splice(1, 0, 'Коля', 'Маша');
console.log(arr);

arr.splice(-1, 1)
console.log(arr);

arr = [
  "Mike",
  {
    type: "JS",
    age: 36
  },
  true,
  function(){
    console.log("Hi, my name is Nick");
  }
];

let dubl = arr.slice(1, 2);
console.log(dubl);

let dubl2 = arr.slice(-2, -1);
console.log(dubl2);

let dubl3 = arr.slice();
console.log(dubl3);

let arr2 = arr.concat('Фрилансер');
console.log(arr2);

console.log(arr.indexOf('Mike'));
console.log(arr.indexOf('Nick'));
console.log(arr.indexOf('Mike', 2));

console.log(arr.includes('Mike'));
console.log(arr.includes('Nick'));
console.log(arr.includes('Mike', 2));

arr = [
  {name: 'Mike', age: 36},
  {name: 'Alex', age: 18},
  {name: 'Kate', age: 'Не скажу'}
]

let resultOne = arr.find(function(item, index, array){
  return item.age === 18;
});
console.log(resultOne);

let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);

let result = arr.filter(function(item, index, array){
  return item.age >=18;
});
console.log(result);

arr = ["Mike", "Stew", "Sofia"];
console.log(arr.sort());

arr = [8, 22, 1,];
console.log(arr.sort());

/*function compareNumeric(a, b) {
  console.log(`Сравниваем ${a} и ${b}`);
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1
}
console.log(arr.sort(compareNumeric));*/
console.log(arr.sort((a,b) => a - b));

arr = ["Nick", "Jack", "Alex"];
console.log(arr.reverse());
result = arr.map(function(item, index, array){
  return item[0];
});
console.log(result);
console.log(arr);

let str = 'Mike, Owl, Tailor'
arr = str.split(',', 2);
console.log(arr);

str = arr.join(',');
console.log(str);

let obj = {};
arr = [];
console.log(typeof obj);
console.log(typeof arr);

if (Array.isArray(arr)) {
  console.log("It's Array");
} else {
  console.log("It's not Array");
}

arr = ["Nick", "Jack", "Alex"];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let arrItem of arr) {
  console.log(arrItem);
}

arr.forEach( function(item, index, array) {
  console.log(`${item} находится на ${index} позиции в ${array}`);
});

/*arr = [1, 2, 3, 4];
let value = arr.reduce(function(previousValue, item, index, array) {
  return item + previousValue;
}, 0);
console.log(value);*/

arr = ["Mike", "Alan", "Mary",];

let reduceValue = arr.reduce(function(previousValue, item, index, array){
  console.log(previousValue);
  console.log(item);
  return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValue}`);
