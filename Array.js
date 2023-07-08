
// Array - массив - []

                                               // массив   length  && index -  БАР
// var - x
// let
// const

// let arr = [1,2,3,4,5,]
// console.log(arr.length)
// console.log(arr.slice(0,3))
// let arrStr = ['Azamat', 'Baikan', 'Bakai', 'Bill']
// arrStr[0] = 'Islam '
// console.log(arrStr)
// console.log(arrStr.length)
// console.log(arrStr[2])



// let arrName = ['Azamat', 'Baikan', 'Bakai','Bill']

// arrName.push('Syimyk', 'Bishkek')                     //   // push - КОШУП БЕРЕТ
// arrName.pop()                                        //   //  pop  - Артынан Алып салат
// arrName.shift()                                      //   //  shift()  - башынан алат
// console.log(arrName)


// let arr = []
// arr.push('motion web')
// console.log(arr)

// let res = 'menin'
// let n = 'atym'
// console.log(res.toUpperCase() +  n.toUpperCase())
// console.log(res.split('').join('+'))

// console.log(res.concat(n))
// console.log(`${res} ${n} BILL`)





//  splice(start, deleteCount, items)
// start - number
// deleteCount - number
// items -string
//
//
// let arrName = ['Azamat', 'Baikan', 'Bakai','Bill']
// arrName.splice(0,1,'Bishkek')
// console.log(arrName)

// let arr1 = 'motion'
// let arr = 'Manas'
// // console.log(arr.split('').join('  +   '))
// console.log(arr1.split("").join('_'))

////////////////////////////////     TASK     ////////////////////////////////////////////////////////////

//  1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a', 'b', 'c']
// arr.push('1,2,3,')
// console.log(arr)
//
//  2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr1 = [1,2,3], arr2 = [4,5,6]
// console.log(arr1.concat(arr2))

//  3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1,2,3]
// arr.push(4,5,6)
// console.log(arr)
//
//  4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr = [1,2,3]
// arr.unshift(4,5,6,)
// arr.splice(0,0,4,5,6,)
// console.log(arr)
//

//  5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let arr = ['js', 'css', 'jq']
// console.log(arr[0])
// console.log(arr.shift())
//

//  6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq']
// console.log(arr.pop())
// console.log(arr.slice(-1))



//  7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let arr = [1,2,3,4,5]
// console.log(arr.slice(0,3))
// console.log(arr.splice(0,3,0))
//


//  8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1,2,3,4,5]
// console.log(arr.slice(3,5))
// console.log(arr.slice(-2))
//


// let arr = [1,2,3,4,5]
// console.log(arr.slice(1,4))
//
// let arr = [1,2,3,4,5]
// arr.splice(1,2,)
// console.log(arr)

// let arr = [1,2,3,4,5]
// //            // console.log(arr.splice(1,3))
// arr.splice(0,1)
// arr.splice(3,1)
// console.log(arr)
//
// let arr = [1,2,3,4,5]
// arr.splice(3,0, 'a','b','c')
// console.log(arr)
//
// let arr = [1,2,3,4,5]
// arr.splice(1,0,'a', 'b')
// arr.splice(6,0,'c')
// arr.splice(8,0,'e')
// console.log(arr)

// let num = 'motion'
// console.log(typeof num)

// fill
// let num = 'motion'
// console.log(num.fill)



//
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(3,5))


// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
//
// let res = [1, 2, 3, 4, 5]
// console.log(res.splice(1,2,))
// console.log(arr.splice(0,3,1))

// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//
// let res =  [1, 2, 3, 4, 5]
// res.splice(0,1)
// res.splice(3,1)
// console.log(res)
// //
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// let arr = [1, 2, 3, 4, 5]
// arr.splice(3,0,'a', 'b', 'c',)
// console.log(arr)

// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1,0,'a', 'b',)
// arr.splice(6,0,'c',)
// arr.splice(8,0,'e')
// console.log(arr)




// 13  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
//
// 14 биринчи элемент кайтарып берет
// let  array = [1,2,3,4,5,6,7,8,9];
// console.log(array[0])


// let  array = [1,2,3,4,5,6,7,8,9];
// function get(any) {
    // return arr.shift()
    // return arr[0]
    // return any[any.length -1]
// }
// console.log(get(array))
//


// function getFirst(array) {
//     ваш код
// };
// 15 акыркы элемент кайтарып берет
// var array = [1,2,3,4,5,6,7,8,9];