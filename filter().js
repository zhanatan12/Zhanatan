

//////  FILTER - УСЛОВИЯДАН откон el жаны массив менен кайтарып берет



//
// let arr = [22, 12 ,45, 55, 76, 87]
// arr = arr.filter((el,index,array) =>{
//     return el > 45
// })
// console.log(arr)

//

// let arr = ['almazbek', 'bill', 'islam',  'john', 'Zhanbolot']
// arr = arr.filter((el,index,array) =>{
//     return el.length > 5
//     // return !el.includes('a')
//     if (index % 2 === 0){
//         console.log(el.toUpperCase())
//     } else {
//         console.log(el)
//     }
// })
// console.log(arr)



// let arr = ['baibol', 'Kamal', 'jannat','azat', 'Tanat']
// arr = arr.filter((el,index,array) => {
//     // return el.includes('t')
//     if (el % 2 === 0){
//         console.log(el.toUpperCase())
//     } else {
//         console.log(el)
//     }
// })
// console.log(arr)





// let arr = new  Array(80).fill(0)
// console.log(arr.map(function (el, index) {
//     return index++
// }))

// let arr = new Array(21).fill(0)
// console.log(arr.map(function (e,index){
//     return index += ''
// }))






//
// let arr = new Array(88).fill(0)
// console.log(arr.map(function (el,index){
//     return index += ''
// }))

// let arr = new Array(55).fill(1)
// console.log(arr.map(function (el,index) {
//     return el + index
// }))




// let res = new Array(34).fill(2)
// console.log(res.map(function (el,index) {
//     return el + index
// }))

// let res = new Array(69).fill(1)
// console.log(res.map(function (el,index) {
//     return index += el
// }))

// let arr = new Array(40).fill(100)
// console.log(arr.map(function (el,index){
//     return index + index
// }))






////////////////// TASK ///////////////////////////////////////////////

//
// function task1(arr) {
//     return arr.filter((el)=> {
//         return el.includes('к')
//     })
// }
// console.log(task1(['Аскар', 'Баяман','Калмамат',]))
//
// let arr = [3134, 4, -143, -245, -214]
// console.log(arr.filter((el)=> el < 0))
//

//
// let arr = [3, 51, 30, 54, 60]
// console.log(arr.filter((el) => el % 2 === 0))
//
//

// let arr = ['Бегимай', 'Баяман', 'Калмамат', 'Bill','aza']
// console.log(arr.filter((el) => el.length > 5))

//
//
// let arr = [-13, 96, -41, -28,-29,40,]
// console.log(arr.filter((el,index) => {
//     if (el < 0){
//         console.log(el,index)
//     }
// }))
//
// let arr = [3, 51, -30,81, -54, 60]
// console.log(arr.filter((el,index) => {
//     if (el > 30){
//         console.log(Math.sqrt(el))
//     }
// }))













///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
                   //   map()   sort()


//
//
//
// let arr = [NaN, 0, 77, false, -17, '', undefined, 99, null ]
// arr = arr.map((el) => {
//         console.log(el)
// })

// console.log(arr.filter((el) => {
      //  // if (el !== false && el !== NaN && el !== "" && el !== undefined && el !== null) {
      //   return el
      //  // }
// }))


// let arr = [3, 51, -30,81, -54, 60]
// arr = arr.map((el,index,array) => {
//         console.log(el, index)
//     }
// )


//
// let arr = ['Бегимай', 'Баяман', 'Калмамат']
// let res = []
// res = arr.map((el,index,array) => {
//         return el
// })
//
// console.log(res)
// console.log(arr)


//////  FILTER - УСЛОВИЯДАН откон el жаны массив менен кайтарып берет


////////    map - бизге жаны массивти кайтарып берет


// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let arr2 = []
// arr2 = arr.map((el ) => el % 2 === 0)

// arr2 = arr.map((el) => {
//     if (el % 2 === 0) {
//         return el
//     }
// })
// console.log(arr)
// console.log(arr2)
//
//
//

//  arr2 = arr.map((el, index,array) => {
//     return el
// })
// console.log(arr)
// console.log(arr2)


///////////////////////////////////////    sort()        ///////////


// let arr = [ 15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,]
// console.log(arr.sort((a,b) => a - b))                                //   //  Бабал алгаритим

// let arr = [123, 23, 76, 90,-12,10,]
// console.log(arr.sort((a,b) => a - b))
//

// console.log('a' > 'b')
// console.log('a'.charCodeAt(0))
// console.log('b'.charCodeAt(0))



// let arr = [1,2,3,4,5,]
// console.log(arr.map((el, index) =>{
//     if (index % 2 !== 0){
//         return el + 2
//     } else {
//         return  el
//     }
// }))

// let res = [ 22,25,76,80, 91]
// console.log(res.map((el,index) => {
//     if (el % 2 === 0){
//         return el + 2
//     }else {
//         return el
//     }
// }))





