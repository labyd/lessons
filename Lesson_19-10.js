let text = `Привет!
Вы на канале
Фрилансер по жизни!`;
console.log(text); //ВСЕ ЧТО ЗАКЛЮЧЕНО В КОВЫЧКИ ЯВЛЯЕТСЯ СТРОКОЙ

let textTwo = "Привет!\nВы на канале\nФрилансер по жизни";
console.log(textTwo);

let textThree = "Привет!\n\tВы на канале\n\t\tФрилансер по жизни";
console.log(textThree);

text = "Привет! Вы на канале \\ Фрилансер по жизни";
console.log(text);

text = "Привет! Вы на канале \"Фрилансер по жизни\"";
console.log(text);

text = "Живи, а работай в свободное время! \u{1F60D}";
console.log(text);

text = 'Привет!';
console.log(text.length);

text = 'Привет!'
let firstSymbol = text[0];
let lastSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lastSymbol);

for (const char of text) {
  console.log(char);
}

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.indexOf('вет'));
console.log(text.indexOf('рив', 3));

console.log(text.includes('рив'));

console.log(text.slice(1, 4));
