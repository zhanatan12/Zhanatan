// for
// i++  = i + 1
// i--  = i - i
//

// for (let i = 0; i <= 20; i ++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }

// for (let a = 25; a < 120; a++){
//     if (a % 2 === 0){
//         console.log(a)
//     }
// }

// for (let a = 1; a <= 100; a++){
//     console.log(a)
// }


// let result = '';
// let i = 0;
// do {
//     i = i + 1;
//     result = result + i;
// } while (i < 5);
// console.log(result);
//
//    //   // Expected output: "12345"



// let even = []
// let odd = []
// for (let i = 0; i < 100; i++ ){
//     if (i % 2 === 0) {
//         console.log(even.push(i))
//     } else if (i % 2 === 0){
//         console.log(odd.push())
//
//     }
//
// }
// console.log(even )
// console.log(odd)


// 1. Выведите столбец чисел от 1 до 50.
// for (let i = 0; i <= 50; i++){
//     console.log(i)
// }

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.

// let arr = []
// for (let i = 0; i < 10; i++){
//     arr.push('X')
// }
// console.log(arr)

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7]
// for (let i = arr; i <= arr; i++){
//     console.log(arr)
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.

// function task4(arr){
//     let res = 1
//     for (let i = arr; i <= arr.length; i++){
//         res *= arr
//     }
//     return res
// }
//
// console.log(task4( [5, 2, 1, 2]))
// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// function task5(arr){
//     for (let i = 0; i <= 100; i++){
//         if (i % 2 === 0){
//             arr.push(i)
//         }
//     }            // arr.push(i)
//     return arr
// }
// console.log(task5([]))

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// function task6(arr){
//     let a = 0
// for (let i = 0; i <= 100; i++){
//     a += i
// }
// return a
// }
// console.log(task6([]))


// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите
// сумму элементов этого массива. Запишите ее в переменную result.

// function task7(arr){
//     let result = 0
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i]
//     }
//     return result
// }
// console.log(task7([2, 4, 5, 6, 8]))

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора
// if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// function task8(arr){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > 3 && arr[i] < 10){
//             console.log(arr[i])
//         }
//     }
//     return
// }
// console.log(task8([3, 4, 6, 12, 3, 5]))





// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

    // let arr = [2, -5, 9, -15, 0, 4];
    // let a = 0
    // for (let  i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0){
    //         a += arr[i]
    //     }
    // }
    // console.log(a)

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и
// оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [5, 1, 3, 7, 6, 15, 3, 20]
// for (let i = 0; i <= arr.length; i++){
//     if (arr[i] === 4){
//         console.log('Есть!' )
//     } else {
//         console.log('Нет')
//     }
// }

// let arr = [5, 1, 3, 7, 6, 15, 3, 20]
// let a = []
// for (let i = 0; i < a.length; i++){
//     a[i] === 4 ? console.log('yes') : false
// }





// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 40, 135, 2000]
// for (let i = 0; i <= arr.length; i++){
//     let j = String(arr[i])
//     if (j[0] === '1' || j[0] === '2' || j[0] === '5'){
//         console.log(arr[i])
//     }
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9].
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let str = ''
// for (let i = 0; i <arr.length; i++){             // i === arr.length  -1
//     if (i === arr.length  -1){                         // arr[i] === 9
//         str += '-' + arr[i] + '-'
//     } else {
//         str += '-' +  arr[i]
//     }
// }
// console.log(str)

// let arr = [1,2,3,4,5,]
// let red = ''
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === arr.length){
//         red += '-' + arr[i] + '-'
//     } else {
//         red += '-' + arr[i]
//     }
// }
// console.log(red)

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат
// деления не станет меньше 50. Какое число получится? Посчитайте количество
// итераций, необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.





// let count = 0
// for (let n = 1000; n >  50; n = n / 2){
//     console.log(n)
//     count++
// }
// console.log(count)

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое
// его элементов (сумма элементов, делить на количество).

// let arr =  [1, 2, 3, 7, 6, 9]
// let count = 0
// for (let i = 0; i < arr.length; i++){
//     count += Math.round(arr[i] / 6)
// }
// console.log(count)

//////////////////

// function task(arr) {
//     let sun = 0
//     for (let i = 0;  i >= arr.length; i++){
//         sun += arr[i]
//     }
// }

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите
// сумму квадратов элементов этого массива.


// let arr = [1, 2, 3, 4, 5]
// let sun = 0
// for (let i = 0; i < arr.length; i++){
//     sun += arr[i] **  2
// }
// console.log(sun)

// let arr = [1,2,3,4,5]
// let res = ''
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === arr.length){
//         res += '-' + arr[i] + '-'
//     } else {
//         res += '-' + arr[i]
//     }
// }
// console.log(res)

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i <arr.length; i++){
//     console.log(arr.reduce((acc,el) => {
//         return el ** 2 + acc
//     }))
// }




// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr =  [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0  && arr[i] < 10){
//         console.log(arr[i])
//     }
// }

// let arr =  [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// let cound = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         cound += arr[i]
//     }
// }
// console.log(cound)

// 17. Создайте переменную с пустым массивом, заполните массив 10-ю
// случайными числами от 1 до 10 с помощью цикла.

// let arr = []
// for (let i = 0; i < 10; i++){
//     arr[i] = Math.round(Math.random() *10)
// }
// console.log(arr)

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.


// for (let i = 0; i < 1000; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i)
//     }
// }

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0; i < arr.length; i++){
//     if ( arr[i] > 10 && arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }


// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.

// let str = 'jzvzszrzpz'
// let newStr = str.split('')
// for (let i = 0; i < newStr.length; i++){
//     newStr[i] = (i % 2 )? newStr[i].toUpperCase():newStr[i].toLowerCase()
// }
// let arr = newStr.join('')
// console.log(arr)









// console.log(typeof(Number + NaN))   // string
// console.log(typeof( NaN ))     // number
// console.log(typeof(Number ))   // function
//
// console.log(undefined + null)
// console.log(typeof(Number +Number ))   //  string
// console.log(typeof(Number ))     // function
// console.log(typeof(null))    // object