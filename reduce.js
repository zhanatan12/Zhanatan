//
// let arr = [21,1,34,55,65,9,20]
// console.log(arr.reduce((acc,el,index,array,) => {
//     return acc
// }))
//



// let  arr1 = [20,12,13,40,41,7,35]
// console.log(arr1.reduceRight((acc,el,idx,arr) => {
//     return acc + el
// },1))





// let  arr1 = [20,12,13,40,41,7,35]
// console.log(arr1.reduce((acc,el,idx,arr) => {
//     return acc + el
// },1))



// let arr = [5,15,315,2,1320,9]
// console.log(arr.filter((el) => el % 2 === 0).reduce((acc,el) => {
//     return acc + el
// },[]))

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter((el) => el % 2 !== 0))
// console.log(arr.filter((el) => el % 2 === 0 || el % 5 === 0))
// console.log(arr.filter((el) => (el % 3 === 0) ** 2))


// let arr = [2,4,98,76,23,14,7,3,9,3]

























// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// let task1 = (arr) => {
//     return arr.reduce((acc,el,index,) => {
//         return acc + el
//     },2)
// }
// console.log(task1([5,15,315,2,13,20,9]))

// 2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.

// function task2(arr) {
//     return arr.reduce((acc,el,index) => {
//         if (el % 2 !== 0){
//             return acc + el
//         } else {
//             return acc
//         }
//     },0)
// }
// console.log(task2([5,12,314,2,13,20,9]))

// 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.

// function task3(arr) {
//     return arr.reduce((acc,el,index) => {
//         if (el >= 10){
//             return acc + el
//         } else {
//             return acc
//         }
//     },0)
// }
// console.log(task3([5,15,315,2,13,20,9]))

// 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
//
// function task4(arr) {
//     return arr.filter((el) => {
//         return el > 10
//     }).sort((a,b) =>  {
//         return b - a
//     }).reduce(function (acc,el,index) {
//         return acc - el
//     })
// }
// console.log(task4([3,13,54,15,335, 39]))
//
// 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.

// const res = (i) => {
//     return i.reduce((acc,el,index) => {
//         return acc + el
//     })
// }


// 6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все строки в верхнем регистре, используя map.

// function task6(arr){
//     return arr.map(el => {
//         return el.toUpperCase()
//     })
// }
// console.log(task6(['Аскар', 'Баяман', 'Калмамат']))



// 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите все вторые строки в верхнем регистре.

// function task7(arr) {
//     return arr.map((el,index) => {
//         return index % 2 === 0 ? el.toUpperCase() : el
//     })
// }
//  console.log(task7(['Аскар', 'Баяман', 'Калмамат','aza','asa']))

// 8. Напишите функцию, которая принимает str, target. И возвращает true или false,
// если targer присутствует в str. Использовать .reduce для этого.

//     Пример: isPresent ('abcd', 'b') => true
// isPresent ('efghi', 'a') // => false


// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
//     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function task9(arr) {
//
//
// }
//
// console.log(task9(a))

// 10. Вам дан массив со строками ['Баяман', 'Калмамат']. Поменяйте местами первые буквы строк.


// 11. Вам дан массив [true, '1234', 325]. Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.


// 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова.
// Если длина слова нечетная, верните средний символ. Если длина слова четная, вернуть 2 средних символа.

// const res = (arr) => {
//     if (arr.length % 2 !== 0) {
//         return arr[Math.round(arr.length / 2)]
//     } else {
//         return  arr[arr.length /  - 1] + arr[arr.length / 2]
//     }
// }
// console.log(res('тестинг'))

// 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.

// const arr = (res) => {
//     return res.reduce((acc,el) => {
//         if (el > 0) {
//             return acc + el
//         } else {
//             return  acc
//         }
//     },0)
// }
// console.log(arr([5, -3, 13, -7, 45]))

// 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34]. Верните сумму всех отрицательных чисел, которые больше 10.

// let arr = [5, -54, 13, -7, 45, -15, -34]
// console.log(arr.reduce((acc,el,idx) => {
//     if (el < 0 && el < -10) {
//         return acc + el
//     } else {
//         return  acc
//     }
// },0))



// 15. Вам дан массив с числами [1, 65, 13 , 30, 100] - все числа - доллары.
// Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.

// let arr = [1, 65, 13 , 30, 100]
// console.log(arr.map((el,index) => {
//     return  el * 89
// }))


// 16. Вам дан массив со строками ['Lorem ipsum dor sit omet devour il ela sit']. Выведите каждый нечетный индекс в строке в верхнем регистре.
//
// const arr = (res) => {
//     return res.map((el,index) => {
//         return el.split('').map((el,index) => {
//             if (index % 2 === 0) {
//                 return el.toUpperCase()
//             } else {
//                 return el
//             }
//         }).join('')
//     })
// }
// console.log(arr(['Lorem ipsum dor sit omet devour il ela sit']))

// 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.

// const task17 = (arr) => {
//     return arr.map((el,idx) => {
//         // return idx + 1 + '-' + el
//         return `${idx} ${el}`
//     }).join(" ")
// }
// console.log(task17(['Оскар', 'Баяман', 'Калмамат']))


// 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию , которая вставляет дефис (-)
// между каждыми двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.

// const task18 = (arr) => {
//     let result = ''
//     let newArr = arr.join('').split('')
//     newArr.map((el,index) => {
//         if (el % 2 === 0 && newArr[index + 1] % 2 === 0) {
//               result += el + '-'
//         } else {
//               result += el
//         }
//     })
//     return result
// }
// console.log(task18([2,456,6,8]))


// const task18 = (arr) => {
//     return arr.reduce((acc,el,idx) =>{
//         if (arr[idx] % 2 === 0 && arr[idx + 1] % 2 === 0){
//             return acc + el + '-'
//         } else  {
//             return acc + el
//         }
//     },'')
// }
// console.log(task18([2,456,6,8]))

// function task18(arr) {
//     let result = ''
//     console.log(arr.reduce((acc,el,idx) => {
//         if (el % 2 === 0 && idx % 2 === 0){
//            result += el + '-'
//         } else {
//             result += el
//         }
//     }))
//     return result
// }
// console.log(task18([2,456,6,8]))


// let arr = [5,15,23,1,4,7,56,20,9]
// let str = arr.filter((el,index,array) => {
//     return el % 2 === 0
// })
//
// let arr = ['асКар',  'бАяман', 'кАлмамат']
// console.log(arr.map((el, index,array,) => {
    // return el[0].toUpperCase() + el.slice(1).toLowerCase()
// }))

// let arr = [315,64,75,43,65,63]
// console.log(arr.map((el) => {
//     return el + el
// }))
//
// let arr = ['Бегимай', 'Баяман', 'Калмамат']
// console.log(arr.map(el => el.length))
//
// let arr = [4, 54, 49]
// console.log(arr.map((el => Math.pow(el,2))))
// console.log(arr.map((el => el ** 2)))


// let arr = [5,15,315,2,13,20,9]
// console.log(arr.filter((el) => {
//     return el % 2 === 0
// }))

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter((el) => el % 2 !== 0))
// console.log(arr.filter((el) => el % 2 === 0 || el % 5 === 0))
// console.log(arr.filter((el) => (el % 3 !== 0) ** 2))
//

// inishil nelvu
// collback


// let arr = [0,1,0,1,0,1,0,1]
// console.log(arr.sort((a, b) => {
//     return a -b
// }))


// let arr = [0,1,0,1,0,1,0,1]
// let result = []


// const num = [0, 1, 0, 1, 0, 1, 0, 1];
// const Num2 = num.filter(n => n === 0);
// const Num1 = num.filter(n => n === 1);
// console.log(Num2.concat(Num1));


// let result2 = []
// console.log(arr.filter((el,idx) => {
//     if (el === 0){
//         // return el + result
//     } else if ( el === 1) {
//         return el + result2
//     } else {
//         console.log(result.concat(result2))
//     }
// }))


// let arr = ["x","a","t","w","l"]
// console.log(arr.sort())

//  //  localeCompare()


// let arr = ["Aichurok","Aikokul","Timur","Alberidin","Argen","Nurgazy","Janyl eje","Makhabat eje","Janatan","Rahat baike","Timur baike","Bolot"]
// let res = Math.floor(Math.random() * arr.length)
// let str = arr[res]
// console.log(str)


// let arr = ["Aichurok","Aikokul","Timur","Alberidin","Argen","Nurgazy","Janyl eje","Makhabat eje","Janatan","Rahat baike","Timur baike","Bolot"]
// console.log(arr.map((el, idx) => {
//     console.log(Math.random() **   el + idx + el )
// }))



// const  el = ['zha', 'nat', 'an']
// console.log(el.join(''))




////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(+"6" +"6");
// console.log(+"6"+6)
// for (let i = 0; i <10; i++) {
//     setTimeout(function (){
//         alert(i)
//     },100);
// }



// class Person {
//     constructor() {
//         this.name = 'jahhny'
//     }
// }
// Person = class AnotherPerson {
//     constructor() {
//         this.name = "Richard"
//     }
// }
// const member = new Person ()
// console.log(member.name)


// const name = 'Andrey'
// age = 20;
// console.log(delete name);
// console.log(delete age);
// console.log(2&&1&& null && 0 && undefined)


// for (let i = 500; i >= 497; i--){
//     console.log(i)
// }

// for (let i = 0; i < 100; i++) {
//     let arr = []
//     if (i % 3 === 0 || i % 5 === 0){
//         console.log(arr + i)
//     } else {
//         console.log(i)
//     }
// }
