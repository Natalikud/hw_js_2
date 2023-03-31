//Задание 1
// Получаем количество чисел которые нам надо вывести 
//(например, 5 первых чисел,через командную строку по команде node index.js 5)
let count = process.argv[2];

// Определяем базовое число
var currentNumber = 2;

//создаю пустой массив 
list = []
//Продолжаем цикл до тех пор пока количество требуемых для отображения чисел не достигнет нуля
while(count != 0 ) {
    if(isNatural(currentNumber)) {
      list.push(currentNumber);
      count--;
    }
    currentNumber++;
}
console.log(list)

// Определяем функцию которая проверяет натуральное ли число или нет
function isNatural(number) {
  for (var i = 2; i <= number/2; i++) {
    if (number % i == 0) {
    return false;
    }
  }
  return true;
} 