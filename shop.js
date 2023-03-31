//Задание 2 (проверка работы функций в конце кода 137-179)
//каталог товаров 
const goods = [
    {
        id:1,
        name: 'Ботинки',
        description: 'Ботинки женские, демисезон, черные',
        sizes: [35,36,37,38,39,40,41],
        price: 3200,
        available: 10,
    },
    
    {
        id:2,
        name: 'Кроссовки',
        description: 'Кроссовки спортивные, женские, белые',
        sizes: [35,36,37,38,39,40,41],
        price: 2500,
        available: 5,
    },

    {
        id:3,
        name: 'Туфли',
        description: 'Туфли женские, черные',
        sizes: [35,36,37,38,39,40,41],
        price: 5000,
        available: 22,
    },
]

//корзина 
basket = [
    {
        good: 1,
        amount: 1,
    },
    {
        good: 2,
        amount: 1,
    },
]

//вспомогат функця проверки доступности товара в каталоге
function isAvaiable(idToAdd,amountToAdd) {
    for (const good of goods) {      
        if (idToAdd === good.id && amountToAdd <= good.available && good.available > 0) {
            return true;
        } else {
            continue;
        }
    }
}

//вспомогат функция поиск id в корзине
function findId (id) {
    for (item of basket) {
        if (id === item.good) {           
            return true          
        } else if (id !== item.good) {
            continue           
        } else {
            return false
        }
    }
}

//1-функция добавления товара в корзину
//- проверка доступности товара в каталоге (если в наличии >0)
//-проверка наличия такого id в корзине 
function addToBasket(idToAdd,amountToAdd) {
    //если доступен в каталоге
    if (isAvaiable(idToAdd,amountToAdd)) {
        //если товара еще нет в корзине
        if (!findId (idToAdd)) {
            basket.push({good: idToAdd, amount: amountToAdd,});
        } else {
            for (item of basket) {
                if (idToAdd === item.good) {
                    item.amount = item.amount + amountToAdd;
                }
            }         
        }
    } else {
        console.log(`нет в каталоге товара ${idToAdd} в количестве ${amountToAdd} `)
    }     
}

//2-функция удаления товара из корзины 
function delof(id) {
    for (item of basket) {
        if (id === item.good) {
            const index= basket.indexOf(item)
            if (index > -1) {
                basket.splice(index,1)
            }      
        }    
    } 
}

//3-функция очистки корзины
function del_all() {
    basket.splice(0, basket.length);
}

//4-функция расчета общей сумму корзины и общего количества товаров
function summ() {
    totalList = [];
    //общее количество
    function summAmount() {
        let totalAmount = [];
        for (item of basket) {
            totalAmount.push(item.amount);
        }
        var res = totalAmount.map(i=> x+=i,x=0).reverse()[0];
        return res  
    }
    //общая сумма
    function summPrice() {
        totalSum = [];
        for (good of goods) {
            for (item of basket) {
                if (good.id===item.good) {
                    var s = good.price * item.amount
                    totalSum.push(s)
                }
            }
        }
        var res = totalSum.map(i=> x+=i,x=0).reverse()[0];
        return res
    }
    //добавить полученные данные в новый массив
    totalList.push({totalAmount: summAmount(), totalSum:  summPrice()});
    return totalList
}

//проверка
//доступно ли в каталоге
console.log(isAvaiable(3,20))

//добавили новый товар
addToBasket(3,20)
console.log(basket)

//добавили существующй товар 1
addToBasket(1,5)
console.log(basket)

//добавили существующий товар 2
addToBasket(2,5)
console.log(basket)

//добавить товар в превышающем количестве
addToBasket(2,100)
console.log(basket)

//очистить корзину
del_all()
console.log(basket)

//снова добавить в корзину
addToBasket(2,5)
addToBasket(2,5)
addToBasket(3,5)
console.log(basket)

//удалить  товар id =2
delof(2)
console.log(basket)

addToBasket(2,3)
console.log(basket)

//общая сумма корзины
console.log(summ())

delof(2)
console.log(basket)
console.log(summ())