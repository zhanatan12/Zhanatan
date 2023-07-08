
// courrying  -  каррирование  - функция принимает как можно меньше аргументов


// function sun(a,b,c,d,i,v,) {
//     return a + b + c + d + i + v
// }
// console.log(sun(1,2,3,4,5,6))

// const sun = a => b => c => d => e => a + b + c + d + e
// console.log(sun(1)(2) (3) (4) (5))

// function num (a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function (i) {
//                     return function (v) {
//                         return a + b + c + d + i + v
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(num(1)(2)(3)(4)(5)(6))



// function link(a) {
//     return function (b) {
//         return function (c) {
//             return a + b +c
//         }
//     }
// }
// console.log(link(" https://")("ru.wikipedia.")("org/wiki/"))
// console.log(link("https://")("github.com/")("kurbanbaev"))
// console.log(link("https://")("github.com/")("ymankulov"))
// console.log(link("https://")("github.com/")("kdhhdw34543    "))

//  https://github.com/
//  https://ru.wikipedia.org/wiki/%D0%97


// console.log(typeof ([]))
//
// const res = (a) => {
//     return  (b) => {
//         return  (c) => {
//             return  (d) => {
//                 return `${a}./${b}.${c}.${d}`
//             }
//         }
//     }
// }
// console.log(res('https')('www')('amazon')('com'))


// const generator = (a) => {
//     return  (b) => {
//         return  (c) => {
//             return  (d) => {
//                 return `${a}.//${b}.${c}.${d}`
//             }
//         }
//     }
// }
// console.log(generator('https')('www')('linkidin')('com'))

//////////////////////////////////////////////         mutation       /////////////////////////////////////////////////////////////
// mutation - 2 objects have same link
//  мутациянын жаман жери проект туура эмес иштей баштайт
//
// let arr = [2,10,4 ,66, 100,60,88,90]
// let copy = [...arr]
// console.log(copy)
//
// arr.sort((a,b) => {
//     return a  -b
// })
// console.log(arr)


//  мутациядан качуу учун бизде спрет оператор деген нерсе бар
//  ... спрет оператор

////////////////////////      recursion   /////////////////////////////////////////////////////

// recursion - функция вызывает себя
// recursion -функция озун озу чакырганда
// 5! = 1 * 2 * 3 * 4 * 5 = 120

// const factorial = (n) => {
//     console.log(n)
//     if (n === 1) {
//         return 1
//     }
//     return n * factorial(n -1)
// }
// console.log(factorial(5))
//

// const factorial = (n) => {
//     console.log(n)
//     if (n === 1){
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(5))


// function factorial(n){
//     if (n === 1 || n === 0){
//         return 1
//     }else  {
//         return n * factorial(n - 1)
//     }
// }
// console.log(factorial(3))



// function fact(n){
//            // let res = 1
//    // for (let i = 1; i <= n; i++){
//   //     res *= i
// }
//     let res = 1;
//     let i = i
//     while (i <=n ){
//         res *= i;
//         i++
//     }
//     return res
// }
// console.log(fact(5))


//////////////////////     this            ///////////////////////////////////////////////////////////////////////

// МЕТОД ОБЬЕКТА   this








// function san() {
//     return this
// }
// console.log(san())


// function sun() {
//     return this.age
// }
//
// // function job(){
// //     return this.job
// // }
//
// function name() {
//     return `Менин атым ${this.name}, мен ${this.age} жаштамын`
// }
// // const getSun = tel.bind(user)
// // console.log(getSun)
//
// function tel(n){
//     return  `Менин атым ${this.name},мен ${this.address}  жашайм `
// }
// // const getSun = tel.apply(user,["Bishkek"])
// // console.log(getSun)
//
//
//
// function res(n){
//     return `Менин атым ${this.name},мен ${this.address}  жашайм `
// }
//
//
// const user = {                                           // console.log(this === window)      // true
//     id: 1,
//     name: 'Bill',
//     job: 'Developer',
//     age: 23,
//     address: 'Bishkek',
//     // num: sun,
//     getage: function () { return this.age},
//     getjob: function (){return this.job},
//     getName: function (){ return this.name },
//     getId: function (){ return this.id },
//     // func: name
//     getname: function (){ return this.name},
//
// }
// console.log(user.getage())
// console.log(user.getjob())
// console.log(user.getname())
//
//
// console.log(user.getId())
// console.log(user.getjob())
// // console.log(user.func())
//
// //    apply
// //   call
// //   bind
// const ob = job.bind(user.getjob())
// console.log(user.get())
// const get = sun.bind(user)
// console.log(get())
// //
//////////////////////////////////////////////////////   19.06.2023




// let obj = {
//     age: 25,
//     name: 'Zhanatan',
//     seyhello() {
//         console.log('Hello world')
//     },
//     seyName: function (){
//         console.log(this.name)
//     },
//     seyage:  function (){
//         console.log(this.age)
//     }
// }
// obj.seyhello()
// obj.seyName()
// obj.seyage()



// console.log(obj.name)
// console.log(obj.id)
//
// console.log(obj.age)

