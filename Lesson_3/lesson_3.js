// // 1) створити функцію яка приймає масив та виводить його
// let arr =[1,99,'hello', false,'buy', true];
// function arrayOut(arr){
// console.log(arr);
// };
// arrayOut(arr)



// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function arrRandom(length, number){
//     let arr =[];
//     for (i=0;i<length; i++){
//     arr [i]= Math.floor(Math.random()* number)}

// return arr;
// }
// let arr_1 =arrRandom(10,100);
// console.log(arr_1);




// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numer(a,b,c){
//     if (a<b && a<c){
//         console.log(a)}
//         else{
//             if (b<a && b<c){
//                 console.log(b)}
//                 else { console.log(c); }
//             }
//         }
    
// numer (7,20,5)



// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numer(a,b,c){
//     if (a>b && a>c){
//         console.log(a)}
//         else{
//             if (b>a && b>c){
//                 console.log(b)}
//                 else { console.log(c); }
//             }
//         }
    
// numer (7,20,5)



// 5) створити функцію яка повертає найбільше число з масиву
// let array = [1,2,3,4,5];
// function maxArray(someArray){
//     let i = someArray [0];
//     for(const arr of someArray){
//        if (i< arr) {
//            i=arr
//        }    
//     }console.log(i);
//     return i
//    }

//  let max = maxArray (array);
// console.log(max);




// 6) створити функцію яка повертає найменьше число з масиву
// let array = [1,2,3,4,5];
// function minArray(someArray){
//     let i = someArray [0];
//     for(const arr of someArray){
//        if (i>arr) {
//            i=arr
//        }    
//     }console.log(i);
//     return i
//    }
//    let min = minArray(array);
//    console.log(min);
  


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//  let numbers = [2,3,5];
// function sumNumber(array){
//       let sume = 0;
//     for(const number of array){
//         sume = sume + number;
//     };
//     return sume;
// }

// let sum = sumNumber (numbers);
// console.log(sum);



// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [2,3,7];
// function average(array){
//     let sume =0;
//     for( const arr of array){
//         sume = sume + arr;
//     }
//     
//     return sume / array.length
//    }
//    let averageSum = average (numbers);
//    console.log(averageSum);



// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// const arrayObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];

// function returnKeys(array){
//    let arr_Keys = [];
//     for(const arr of array){
//         let key = Object.keys(arr);
//         arr_Keys.push(...key);
//            }
// return arr_Keys;
// }
// let result = returnKeys(arrayObj);
// console.log(result);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// const arrayObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function retutnValue(array){
//     let value = [];
//     for(const arr of array){
// let valueObj = Object.values(arr);
// value.push (valueObj);
//     }
//     return value;
// }
// let result = retutnValue(arrayObj);
// console.log(result);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function sumElements(arr_1,arr_2){
//     let result = [];
//     for(let i =0; i < arr_1.length; i++){
//         result.push(arr_1[i]+arr_2[i])
//     }
 
// return result;
//  }
//  let sume = sumElements([1,2,3,4],[2,3,4,5]);
//  console.log(sume);





// - створити функцію яка обчислює та повертає площу прямокутника висотою
// function returnHeight(a,b){
//     let s = a*b;
//     return s;
// }
// let area = returnHeight(6,8);
// console.log(area);


// - створити функцію яка обчислює та повертає площу кола
// function areaCircle(radius){
//     let pi = 3.1415;
//     let s = pi*Math.pow(radius,2);
//     return s;
// }
// let result = areaCircle(7);
// console.log(result);



// - створити функцію яка обчислює та повертає площу циліндру

// function areaCylinder(r,h){
//     s= 2*Math.PI*r*(r+h);
//     return s
// };
// let result = areaCylinder(2,3);
// console.log(result);



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function numbers(){
//     console.log(arguments);
//     let min = arguments [0][0];
//     let max = arguments [0][0];
//     for(const i of arguments [0]){
//         if (i<min){
//             min = i;
//         }
//         if (i>max){
//             max = i;
//         }
//     }
//     console.log(max);
//     return min
// }
//  console.log(numbers([7,10,2,55,78]));



// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]




// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function zeroEnd(array){
    let zero =[];
    let number = [];
    for( const arr of array){
        if (arr === 0){
            zero.push(0);
        } else{
            number.push(arr);
        }
    }
    return [...number, ...zero];
}
let result = zeroEnd([1,0,6,0,3]);
console.log(result);





// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '


function trimName(n1) {
    let arrayN1 = [];
    let first = n1.trim().split(' ');

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== "") {
            arrayN1.push(first[i]);
        }
    }
    return arrayN1.join(' ');
}

const namee = trimName(n1);
console.log(namee);




