let num = 0;
while (num < 5){
  console.log(num);
  num++;
}

while (num){
  console.log(num);
  num--;
}

do {
  console.log(num);
  num++;
} while (num < 0);

for (; num < 5; num++){
  console.log(num);
}

num = 0;

for (; num < 5; num++){
  console.log(num);
  if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);

num = 0;
for (; num < 5; num++){
  if (num == 2) continue;
  console.log(num);
}

/*for (; num < 5; num++){
  (num != 2) ? console.log(num) : continue;
}                                            ПРИВЕДЕТ К ОШИБКЕ*/
num = 0;
firstFor: for (; num < 2; num++){
  for (let size = 0; size < 3; size++){
    if (size == 2){
      break firstFor
    }
    console.log(size);
  }
}
num = 0;
size = 0;
firstFor: for (; num < 2; num++){
  for (; size < 3; size++){
    if (size == 2){
      continue firstFor
    }
    console.log(size);
  }
}

//ДОМАШКА

//№1

let numb = 1;
while (numb < 6){
  console.log(numb);
  numb++;
}

numb = 1;
for (; numb < 6; numb++){
  console.log(numb);
}

//№2
//Нет

//№3

numb = 0;
while (numb < 3) {
  console.log(`Число: ${numb}`);
  numb++;
}

//№4

numb = 0;
sizeFor: for (; num < 2; num++){
  for (let siz = 0; siz < 3; size++){
    if (siz == 1) {
      break sizeFor
    }
    console.log(`Программа завершена на числе: ${numb}`);
  }
}
