// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// const number = [1,2,3,4,5];
// console.log(number);
// const str = ['Inna', 'Maksim' ,'Nazar' ,'Bohdana', 'Perchyk'];
// console.log(str);
// const array = [10,15, 'Vyshhorod', true, false]
// console.log(array);
 
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// const colour = [];
// colour [0] = 'red';
// colour [1] = 'black';
// colour [3] = 'white';
// colour [4]= 'pink';
// console.log(colour);




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// const namess = ['Inna', 'Maksim' ,'Nazar' ,'Bohdana', 'Valentyna', 'Olexandr', 'Volodymyr', 'Larysa', 'Kateryna' ,'Vera'];
// for ( const names of namess){
//     document.write(`<div style= "background-color: silver; margin: 20px">${names}</div>`)
// };



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for(let i = 0; i<10; i++){
//     document.write(`<div> довільний текст ${i}</div>`)
// }



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 1;
// while(i<20){
//     document.write(`<h1> Hello! </h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// 
// let i = 1;
// while(i<20){
//     document.write(`<h1> Hello! ${i}</h1>`)
//     i++
// }




// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// for (const number of numbers){
//     console.log(number);
// }

// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const animals = ['cat','dog', 'pig', 'horse', 'bear', 'parrot', 'lion', 'tiger', 'fish', 'bird'];
// for (const animal of animals){
//     console.log(animal);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// const arrs = [100, 'bike', 88, 'plane', true, 99, false, 'car', 77, 'rocket'];
// for (const arr of arrs){
//     console.log(arr);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const arrs = [100, 'bike', 88, 'plane', true, 99, false, 'car', 77, 'rocket'];
// for(const arr of arrs){
//     // if(typeof arr === 'string'){
    //     console.log(arr);
    // }
    // if(typeof arr === 'number'){
    //     console.log(arr);
    // }
//     if(typeof arr === 'boolean'){
//         console.log(arr);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// const arr_1 = [];
// arr_1 [0] =99;
// arr_1 [1] = 999;
// arr_1 [2] = "abc";
// arr_1 [3]= true;
// arr_1 [4] = -15;
// arr_1 [5] = 'JS - is very hard for me(((';
// arr_1 [6] = false;
// arr_1 [7]= 100;
// arr_1 [8] = 'But I try!';
// arr_1 [9]= true;
// for(arr of arr_1){
//     console.log(arr);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<10; i++){
//     console.log(i);
//     document.write(`${i}`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<100; i++){
//     console.log(i);
//     document.write(`${i}`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<200; i=i+2){
//     console.log(i);
//     document.write(`${i}`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i=0; i<100;i++){
//     if (i%2===0){
//         console.log(i);
//         document.write(`${i}`)
//     }
// }
  
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i=0; i<100;i++){
//     if (i%2!==0){
//         console.log(i);
//         document.write(`${i}`)
// }
// }



// - Дано 2 масиви з рівною кількістю об'єктів. З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Масиви:// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     }

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// let usersWithCities = [];

// for( let i = 0; i< usersWithId.length; i++){
//     usersWithCities.push(usersWithId[i]);
// }
// for(let k = 0; k< usersWithCities.length; k++){
//     for (let j = 0; j< citiesWithId.length;j++){
//         if (usersWithCities.id === citiesWithId.user_id){
//             usersWithCities [k].city = citiesWithId[j];
//         }
//     }
// }

// console.log(usersWithCities);



// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// const arr= ['a','b', 'c'];
// for(let i=1;i<4;i++){
//    arr.push (i) };
//     console.log(arr);
   

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// const number =[1,2,3];
// number [0] = 3;
// number [1]=2;
// number [2]=1
// console.log(number);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// const number =[1,2,3];
// number.push (4);
// number.push (5);
// number.push (6);
// console.log(number);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// number.unshift(6);
// number.unshift(5);
// number.unshift(4);
// console.log(number);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// const number =[1,2,3,4,5];
// number.shift();
// number.shift();
// number.shift();
// console.log(number);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// const number =[1,2,3,4,5];
// number.pop();
// number.pop();
// number.pop();
// console.log(number);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
// const number =[1,2,3,4,5];
// number.pop();
// number.pop();
// number.push('a');
// number.push('b');
// number.push('c');
// console.log(number);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// const number =[1,2,3,4,5,6,7,8,9,10];
// for(const num of number){
//     if (num%2===0){
//         console.log(num);
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// const number =[1,2,3,4,5,6,7,8,9,10];
// const number_2 =[];
// for(let i=0; i<number.length; i++){
//     number_2[i]=number[i] ;
// }
//  console.log(number_2)




// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// const arr= ['a','b', 'c'];
// let str = '';
// for(let i =0; i< arr.length; i++){
//  str = str + arr[i];
//  }
// console.log(str);



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// const arr= ['a','b', 'c'];
// let i =0;
// let str = '';
// while( i< arr.length){
//     str = str + arr[i];
//     console.log(str);
//         i++ 
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// const arr= ['a','b', 'c'];
// let str ='';
// for(const letter of arr){
//     str = str + letter;
//     console.log(str);
// }


// =====ДОДАТКОВО 1=======

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
//  const arr = [2,17,13,6,22,31,45,66,100,-18];
//  let i =0;
//  while(i<arr.length){
//      console.log(i);
//      i++
//  }
 
// 2. перебрати його циклом for
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i<arr.length; i++){
//     console.log(i);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// const arr = [2,17,13,6,22,31,45,66,100,-18];
//  let i =0;
//  while(i<arr.length){
//      let x = arr [i];
//      if (i%2!==0){
//         console.log(x);
//       } ;
//    i++  
// };
     

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(i=1;i< arr.length;i=i+2){
// console.log(arr[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// const arr = [2,17,13,6,22,31,45,66,100,-18];
//  let i =0;
//  while(i<arr.length){
//      let x = arr [i];
//      if (x%2==0){
//         console.log(x);
//       } ;
//    i++  
// };
     
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(i=0;i< arr.length;i++){
//     let x = arr [i];
//     if (x%2==0){
//         console.log(x);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//     }
//  }
//  console.log(arr);

    // 8. вивести масив в зворотньому порядку.
    // const arr = [2,17,13,6,22,31,45,66,100,-18];
    // arr.reverse();
    // console.log(arr);

    // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//   const arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'okten';
//          }
//  }
//   arr.reverse ()
//  console.log(arr);

// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(i=0;i< arr.length;i++){
//     let x = arr [i];
//     if (x%2==0){
//         console.log(x);
//     }
// }
// arr.reverse();
// console.log(arr);
                

// const arr = [2,17,13,6,22,31,45,66,100,-18];
//  let i =0;
//  while(i<arr.length){
//      let x = arr [i];
//      if (x%2==0){
//         // console.log(x);
//       } ;
//    i++  
// };
// arr.reverse();
// console.log(arr);

  
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

// - заповнити його 50 непарними числами за допомоги циклу.
// const arr = [];
// for(let i = 0; i<100; i++){
//     if ([i]%2===0){
//         [i]===i;
//         console.log([i]);
//     }
// }
// const arr_1 = [];
// for(let i = 0; i<100; i++){
//     if ([i]%2!==0){
//         [i]===i;
//         console.log([i]);
//     }
// }


// 1. Створити пустий масив та :
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let arrRandom = [];
// for( let i =0; i< 20; i++){
//     arrRandom [i]=Math.floor(Math.random()*36)+5;
//     console.log(arrRandom[i]);
// }

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for( let i =0; i< 20; i++){
//     arrRandom [i]=Math.floor(Math.random()*732)+8;
//     console.log(arrRandom[i]);
// }


//  2. Вивести за допомогою console.log кожен третій елемен
// for( let i =0; i< 20; i++){
//     arrRandom [i]=Math.floor(Math.random()*732)+8;
//     if(i%3==0);
//     console.log(arrRandom[i]);
// }

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for( let i =0; i< 20; i++){
//     arrRandom [i]=Math.floor(Math.random()*732)+8;
//     if(((i%3)==0)&& ((arrRandom[i]%2)==0));{
//     console.log(arrRandom[i]);
// }
// }


//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий 
// let arrRandomCopy = [];
// for( let i =0; i< 20; i++){
//     arrRandom [i]=Math.floor(Math.random()*732)+8;
//     if(((i%3)==0) && ((arrRandom[i]%2)==0));{
//         arrRandomCopy.push(arrRandom[i]);
//     }
//     console.log(arrRandomCopy);
// }

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
// //   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67 ];

// for ( let i =0; i< arr.length; i++){
//     if (arr[i]%2 == 0){
//         console.log([i-1]);
//     }
// }
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// const check =[100,250,50,168,120,345,188];
// let sum = 0;
// for (i=0;i<check.length; i++){
//     sum = sum + check[i];
//     }
//     console.log(sum);
//     let avarege = sum / check.length;
//     console.log(avarege);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// let arrCopy = [];
// for (let i =0; i<20; i++){
//     arr [i]= Math.floor(Math.random()*15)+0;
//     arrCopy.push (arr [i]*5);
// }
// console.log(arrCopy);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr = ['Inna', 55, 77, 88, true,];
// let arrCopy = [];
// for (i=0; i< arr.length; i++){
//     if ((typeof (arr [i])) == "number"){
//      arrCopy.push (arr[i])   
//     }
// }
// console.log(arrCopy);