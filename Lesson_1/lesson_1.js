// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

// let hello = 'hello';
// let namee = 'OWU';
// let com = 'com';
// let national = 'ua';
// let one = '1';
// let ten = '10';
// let number = '-999';
// let serial = '123';
// let pi = '3.14';
// let fraction = '2.7';
// let age = '16';
// let ismarried = 'true';
// let iscar = 'false';

// // Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(hello);
// console.log(namee);
// console.log(com);
// console.log(national);
// console.log(one);
// console.log(ten);
// console.log(number);
// console.log(serial);
// console.log(pi);
// console.log(fraction);
// console.log(age);
// console.log(ismarried);
// console.log(iscar);

// alert(hello);
// alert(namee);
// alert(com);
// alert(national);
// alert(one);
// alert(ten);
// alert(number);
// alert(serial);
// alert(pi);
// alert(fraction);
// alert(age);
// alert(ismarried);
// alert(iscar);

// document.write (hello);
// document.write (namee);
// document.write (com);
// document.write (national);
// document.write (one);
// document.write (ten);
// document.write (number);
// document.write (serial);
// document.write (pi);
// document.write (fraction);
// document.write (age);
// document.write (ismarried);
// document.write (iscar);

// // - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
// //   Вивести кожну змінну за допомогою: console.log , alert, document.write

// hello = 'Hi everyone!';
// namee = 'Inna';
// com = 'company';
// national = 'USA';
// one = '111';
// ten = '1010';
// number = '-777';
// serial = '321';
// pi = '3.14159265';
// fraction = '0.99';
// age = '37';
// ismarried = 'false';
// iscar = 'true';

// console.log(hello);
// console.log(namee);
// console.log(com);
// console.log(national);
// console.log(one);
// console.log(ten);
// console.log(number);
// console.log(serial);
// console.log(pi);
// console.log(fraction);
// console.log(age);
// console.log(ismarried);
// console.log(iscar);

// alert(hello);
// alert(namee);
// alert(com);
// alert(national);
// alert(one);
// alert(ten);
// alert(number);
// alert(serial);
// alert(pi);
// alert(fraction);
// alert(age);
// alert(ismarried);
// alert(iscar);

// document.write (hello);
// document.write (namee);
// document.write (com);
// document.write (national);
// document.write (one);
// document.write (ten);
// document.write (number);
// document.write (serial);
// document.write (pi);
// document.write (fraction);
// document.write (age);
// document.write (ismarried);
// document.write (iscar);

// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// //   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let nname = prompt ('enter name');
// let surname = prompt ('enter surname');
// let age = +prompt ('age?')
// alert('Вітаю ${nname} ${surname}. Tобі ${age} років');



// // // Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// let username = nname + surname;
// console.log(username);

// // - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let number = +prompt ('enter number');
// let number_2 = +prompt ('enter second number');
// let number_3 = +prompt ('enter third number');
// console.log(number);
// console.log(number_2);
// console.log(number_3);


// // - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let number = parseInt(prompt ('enter number'));
// let number_2 = parseInt(prompt ('enter number'));
// let number_3 = parseInt(prompt ('enter number'));
// let number_4 = parseInt(prompt ('enter number'));
// let sum = number+number_2+number_3+number_4;
// console.log(sum);



// // - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
// //   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let one = parseFloat(prompt('enter number'));
// let two =  parseFloat(prompt('enter number'));
// let three =  parseFloat(prompt('enter number'));
// let result = one+two+three;
// console.log(result);


// // - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
// let one = parseFloat(prompt('enter number'));
// let two =  parseFloat(prompt('enter number'));
// let three =  parseFloat(prompt('enter number'));
// let one_round = Math.round (one);
// let two_round = Math.round (two);
// let three_round = Math.round (three);
// let result = one_round+two_round+three_round;
// console.log(result);




// // - За допомогою prompt() отримати 2 цілих числа.
// //   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
// //   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
// //   Example. Число 1 = 5. Число 2 = 2. Результат = 25 
// let number_1 = +prompt('enter number');
// let number_2 = +prompt('enter number');
// let degree = Math.pow(number_1, number_2);
// console.log(degree);



// // За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// // let a = 100; let b = '100'; let c = true;
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


// // Поставте відповідний оператор y виразах, щоб вийшов відповідний результат.
// // В однакових виразаї не використовувати однакові оператори!!!
// //   5 ? 6 -> true
// //   5 ? 6 -> false
// //   5 ? 6 -> false
// //   5 ? 6 -> false
// //   10 ? 10 -> true
// //   10 ? 10 -> true
// //   10 ? 10 -> false
// //   10 ? 10 -> false
// //   10 ? 10 -> false
// //   123 ? '123' -> false
// //   123 ? '123' -> true
// 5<6
// 5>6
// 5==6
// 5>=6
// 10==10
// 10<=10
// 10<10
// 10>10
// 10>=10 
// 123<123
// 123=123



// // РОБОТА В АУДИТОРІЇ

// // 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// //    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);




// // 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
// //     34,
// //     12,
// //     66,
// //     90,
// //     87
// //     Старайтесь використовувати різні оператори. 
// //     Example: 88 = (16 / 2) * 11

// let a1 = 9;
// let a2 = 3;
// let a3 = 7;
// let a4 = 0;
// let a5 = 10;

// let task1 = a1*a2 +a3;
// console.log(task1);
// let task2 = a1 + a2 - a4;
// console.log(task2);
// let task3 = a1*a3+a2;
// console.log(task3);
// let task4 = a1*a5-a4;
// console.log(task4);
// let task5 = a1*a5-a2;
// console.log(task5);



// // 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
// //     5 % 3,
// //     3 % 5,
// //     5 + '3',
// //     '5' - 3,
// //     75 + 'кг'
// let a6 = 2;
// let a7 = 3;
// let a8 = 53;
// let a9 = 2;
// // let a10 = 75кг;



// // 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width). Значееня площі зберігати в змінній s.
// let height = 23;
// let width = 10;
// let s = (height*width);
// console.log(s);



// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// //     результат поместите в переменную v.
// let pi = 3.14;
// let heightC = 10;
// let d = 4;
// let r = (d/2);
// let v = (pi*r**2*heightC);
// console.log(v);


// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// //    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k = Math.sqrt(x/Math.pow (n,y/2)+Math.pow(m,y/2));
// console.log(k);



// // 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = ('Hello world');
// document.write (str);
// alert (str);
// console.log(str);



// // 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let username = ('Yevsieienkova Inna \n 37years old \n hoobi is painting');
// alert (username);



// // 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// //   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// //   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// //   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Who';
// let str2 = 'are';
// let str3 = 'you?';
// let concatenation = str1+str2+str3;
// document.write (concatenation);


// // 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt('Enter something');
//     console.log(str);

//     // 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//     let str4= +prompt('5+5');
//     alert (str4);


//     // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//     // Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let username = prompt('Enter your name');
// let surname = prompt ('Enter your surname');
// let age = prompt ('How old are you?');
// alert ('Доброго вечора ${username} ${surname} мої вітання, що вам ${age}');





// =====================
// ======ДОП============
// =====================

// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let number1 = +prompt('enter number');
// let number2 = +prompt('enter number');
// let number3 = +prompt('enter number');
// if (number1 < number2 < number3) {
//    console.log(number1, number2, number3);
// }



// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let light = prompt('What light?');
// console.log(light);

// if (light === 'green') {
//     alert('Go')
// } else if (light === 'yellow'){
//      alert('Wait')
// } else if (light==='red'){
//     alert ('Stop')
// } else {
//     alert ('Do what you want')
// };


// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let light = prompt('What light?');
let isRoadClear = prompt('Is road clear?')

if (light==='green' && isRoadClear === 'yes'){
    alert ('Go!') }
    else if (light === 'green' && isRoadClear === 'no'){
        alert('vait until the violators pass')}
else if (light === 'yellow'&& isRoadClear === 'yes'){
    alert('Wait!')
} else if (light === 'yellow'&& isRoadClear === 'no'){
    alert('Still wait')
} else if (light=== 'red' && isRoadClear  ==='yes'){
    alert('Still wait')
}else if (light=== 'red'&& isRoadClear ==='no'){
    alert('Stop and wait')
}else{
    alert('Do what you want')
}

   





