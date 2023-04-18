//ДОРАБОТКА 1 задание

function fibo(count) {
    function isNatural(number) {
        for (var i = 2; i <= number/2; i++) {
          if (number % i == 0) {
          return false;
          }
        }
        return true;
      } 

    function fiboList() {
        var currentNumber = 2;
        list = [];
        while(count != 0 ) {
            if(isNatural(currentNumber)) {
              list.push(currentNumber);
              count--;
            }
            currentNumber++;
            
        }
        return list;
    }
    return fiboList()
}

//ПРОВЕРКА
console.log(fibo(100))
console.log(fibo(10))
console.log(fibo(5))