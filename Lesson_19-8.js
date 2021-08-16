/*let userInfo = new Object();
let userInfo = {};*/

let userInfo = {
  name: 'Вася',  //МОГУТ БЫТЬ СПЕЦИАЛЬНЫЕ ИМЕНА. НАПРИМЕР: "let", "for", "if"
  age: 30,
};
console.log(userInfo);
console.log(userInfo.name);

let useInfo = {
  name: "Вася",
  age: 30,
  "likes javascript": true,
};
console.log(useInfo.name);
console.log(useInfo["likes javascript"]);
let firstPart = 'likes';
let userInf = {
  name: "Mike",
  age: 30,
  [firstPart + " javascript"]: true,
}
console.log(userInf["likes javascript"]);

let firstPrt = "likes";
let usInfo = {
  name: "Mike",
  age: 30,
  [firstPrt]: true,
};
let key = "name";
console.log(usInfo[key]);
console.log(usInfo.key); //НЕ ПРАВИЛЬНО

let userIn = {
  0: "Mike",
};

console.log(userIn[0]);
console.log(userIn["0"]);

let id = Symbol ("id");
let usInf = {
  name: "Mike",
  age: 30,
  [id]: "Некое значение"
};
console.log(usInf);

let userInfo2 = {
  name: "Max",
  age: 30,
  address: {
    city:"Uzhhorod",
    street: "Freedom",
  }
}
console.log(userInfo2);
console.log(userInfo2.address);
console.log(userInfo2.address.city);

function makeUserInfo(name, age) {
  return {
    name: name,
    age: age,
  };
}
let user = makeUserInfo("Bennet", 30);
console.log(user);

let userInfo3 = {
  name: "Lumin",
}
console.log(userInfo3);
userInfo3.age = 30;
console.log(userInfo3);
userInfo3.address = {
  city: "Teivat",
  street: "Mandshtad"
};
console.log(userInfo3);

delete userInfo3.age;
console.log(userInfo3);

userInfo3.age = 30;
console.log(userInfo3);

userInfo3.age = 15;
console.log(userInfo3);

let userInfo4 = {
  name: "Klee",
  age: 12,
}
let user2 = Object.assign({}, userInfo4);

user2.age = 10;
console.log(userInfo4);
console.log(user2);

let userInfo5 = {
  name: "Max",
  age: 30,
  address: {
    city:"Uzhhorod",
    street: "Freedom",
  }
}
if ("name" in userInfo5){
  console.log(userInfo5.name);
}

let userInfo6 = {
  name: undefined,
}
if ("name" in userInfo6){
  console.log(userInfo6.name);
}

let userInfo7 = {
  name: "Venty",
  age: 15,
  address: {
    city: "Teivat",
    street: "Mandshtad",
  }
}
for (let key in userInfo7) {
  console.log(key);
  console.log(userInfo7[key]);
}
for (let key in userInfo7.address) {
  console.log(key);
  console.log(userInfo7.address[key]);
}

let userInfo8 = {
  name: "Qiqi",
  age: 10,
  address: {
    city: "Teivat",
    street: "Li Ue"
  },
showInfo() {
  console.log(`${userInfo8.name},${userInfo8.age} лет. Адрес: г.${userInfo8.address.city}, ул.${userInfo8.address.street}`);
} //ВМЕСТО ИМЕНИ ТЕКУЩЕГО ОБЪЕКТА МОЖНО ИСПОЛЬЗОВАТЬ this
}
userInfo8.showInfo();

function UserInfo(name) {
  this.name = name;
  this.age = 15;
}

console.log(new UserInfo('Keia'));
console.log(new UserInfo('Ember'));
