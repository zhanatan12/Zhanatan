
// object  - {}
// console.log(typeof {})

// 1 - kay
// 2 - value


// let user  = {
//     id: 1,
//     name: 'Azamat',
//     age: 15,
//     job: 'Front-End Developer',
//     address: 'Bishkek',
//     hobby: {
//         sport: 'cyberSport'
//     },
//     'motion web': "It academy",
// }
// console.log(Object.keys(user).length)


//
// console.log(Object.freeze(user))                         // //  freeze - зоморозит
// user.job = 'taxi'
//
// console.log(user.job)
//

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))             //    // entries - массивке салып койот



// Object.kays() -  кулучторун алганда керек
// Object.values()  -  значенияларын чыгарып берет
// user.address = 'USA'
// user.car = 'true'
// delete user.address
// delete user.id


// console.log(user.car)
// console.log(user.age)
// console.log(user.job)


// key = .[""]
// console.log(user.name)
// console.log(user['name'])
// console.log(user['age'] * 2)
// console.log(user.hobby.sport)
// console.log(user["motion web"])



// let names = [
//     {
//         id: 1,
//         age: 18,
//         name: 'Mirlan',
//         country: 'America'
//     },
//     {
//         id: 2,
//         age: 33,
//         name: 'Asan',
//         country: 'Kazakstan'
//     },
//     {
//         id: 3,
//         age: 23,
//         name: 'Kalmamat',
//         country: 'USA'
//     },
//     {
//         id: 4,
//         age: 25,
//         name: 'Zhanatan',
//         country: 'Germany'
//     },
// ]
//


// console.log(names.filter((el) => {
//     if (el.name.length === 6){
//         return el.name = 'sdfcv'
//     }else {
//         return el
//     }
// }))


// console.log(names.map((el) => {
//     if (el.age === 25) {
//         return el.age = 30
//         return el
//     } else {
//         return el
//     }
// }))


// console.log(names.filter((el) => {
//     return el.age <= 25
// }))


// let user = {
//         name: 'Bakai',
//         id: 4,
//         age: 25,
//         job: 'Front-End Developer',
//         address: 'Bishkek',
//         hobby: {
//             sport: ' motion'
//         },
//         'motion web': 'academy'
//     }

// console.log(Object.keys(user).length)
// console.log(Object.values(user))
// console.log(Object.entries(user))        //  //  entries - [] салып койот



// user.age = 12
// user.car = true
//
// delete user.age
// delete user.hobby
//
// console.log(user.age)
// console.log(user.car)
// console.log(user)

    // key = . [""]
// console.log(user.name)
// console.log(user.age)
// console.log(user.country)
// console.log(user.hobby)
// console.log(user.hobby.sport)
// console.log(user["motion web"])


// console.log(users.map((el) => {
//     if (el.age === 25) {
//         el.age = 900
//         return el
//     } else {
//         return el
//     }
// }))



// console.log(users.filter((el) => {
//     return el.age > 25
// }))
//

// console.log(users.sort((a,b) => {
//     return a.name.length - b.name.length
// }))


// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3}
// console.log(Object.keys(obj).length)

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c'
// двумя способами: через квадратные скобки и как свойство объекта.
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3}
// console.log(obj.c)
// console.log(obj['c'])

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// let obj   = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'
// }
// console.log(obj.Атай, obj.Ширин)
// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'
// }
// obj.Атай = 500
// console.log(obj)
// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Добавьте к объекту ключ Медет со значением 1500.
// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200'
// }
// obj.Медет = 1500
// console.log(obj)

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите значение ключа salary в консоль.
// let obj = {
//     Ширин: '1000',
//     Айжан:'505',
//     Атай: {
//         salary: '500'
//     }}
// console.log(obj.Атай.salary)
// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней
// от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let obj = {
//     1: 'понедельник ',
//     2: 'вторник ',
//     3: 'среда ',
//     4: 'четверг',
//     5: 'пятница ',
//     6: 'суббота ',
//     7: 'воскресение'
// }
// console.log(obj["6"])


// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// Выведите день недели, соответствующий значению переменной day.
//
// let day = {
//      понедельник: 1,
//      вторник: 2,
//      сред: 3,
//      четверг: 4,
//      пятница: 5,
//      суббота: 6,
//      воскресение: 7
// }
// console.log(day.суббота)

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все ключи объекта.
// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {
//         salary: '500'
//     }}
// console.log(Object.keys(obj))
// 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Получите все значения объекта.
// let arr = []
// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {
//         salary: '500'
//     }}
// console.log(Object.values(obj))
// console.log(Object.values(obj))
// console.log(Object.values(obj.Атай))
// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите все entries объекта.
// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: {
//         salary: '500'
//     }
// }
// console.log(Object.entries(obj))

// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Выведите 1, если длина ключа name нечетная, 0 если четная.

// function task12(obj) {
//     if (Object.keys(obj).length % 2 === 0){
//         return 'нечетная'
//     } else {
//         return 'четная'
//     }
// }
// console.log(task12({name: 'Igor'}))

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.
// let arr =  [ {id: 34}, {id: 5}, {id: 16}, {id: 27} ]
// console.log(arr.sort((a,b) => {
//     return a.id - b.id
// }))

// function task13(arr) {
//     return arr.sort((a,b) => {
//         return a.id - b.id
//     })
// }
// console.log(task13([ {id: 34}, {id: 5}, {id: 16}, {id: 27} ]))

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Добавьте новый ключ age со значением
//
// function task14(obj) {
//     obj.age = 25
//     obj.name = 'Azat'
//     return obj
// }
// console.log(task14({name: 'Igor'}))





// let days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
// let today = new Date().getDay();
// console.log('Сегодня ' + days[today]);
// console.log(`Сегодня ${days} + tuday`);



// let user4 = {
//     first: '1',
//     second: '2',
//     third: '3',
//     fourth: '4',
//     fifth: '5',
//     sixth: '6',
//     seventh: '7'
// }
//
// console.log(user4.sixth)

// let func = function (obj){
//     return obj
// }
// console.log(func({1:"понедельник", 2:"вторник", 3:"среда", 4:"четверг", 5:"пятница", 6:"субота", 7:"воскресеньие"}))

// const func = (obj) => {
//    return obj.среда
// }
// console.log(func({понедельник: '1', вторник: '2', среда: '3', четверг: '4', пятница: '5', субота: '6', воскресеньие: '7'}))

// let func = function (obj){
//     obj.age = '15'
//     return obj
// }
// console.log(func({name: 'Igor'}))

// function user(name,age, id){
// const obj ={}
//     obj.name = name
//     obj.age = age
//     obj.id = id
//     return obj
// }
// console.log(user('bill','20','1'))


// function tack (obj){
//     obj.age = 25
//     console.log(obj)
// }
// const user ={name:'Igor'}
// tack(user)




//////////////////////////////////////////////////////////////////////////////////////////

// function double (x){
//     let newArr = [];
//     for(let i = 0; i < x.length; i++){
//         newArr.push(x[i] * 2);
//     }
//     return newArr;
// }
// console.log(double([1,2,3]))



// let arr = 4
// if (arr === 3  ){
//     console.log('true')
// } else {
//     console.log('false')
// }


