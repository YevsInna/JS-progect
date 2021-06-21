// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"

//     b) отримує текст з блоку з id "rules"

//     c) замініть текст параграфа з id 'content' на будь-який інший

//     d) замініть текст параграфа з id 'rules' на будь-який інший

//     e) змініть кожному елементу колір фону на червоний

//     f) змініть кожному елементу колір тексту на синій

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log

//     h) отримати всі елементи з класом fc_rules

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний


// ________________________________________________________________________________________


// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.


 let products = localStorage.getItem('products');
 let arr = JSON.parse(products);
 for(let item of arr){
    let divProduct = document.createElement('div');
        // це стрирається по одній стрічці з локалсторідж, все решта , що залишається, перезавантажується в локалсторідж
//     let productWrapper = document.createElement('div');
//     let btn = document.createElement('button');
//         divProduct.innerHTML = `назва товару - ${item.product}, кількість - ${item.quantity}, ціна - ${item.price}`;
//         btn.innerText = 'Delete';

//         btn.addEventListener('click', (e) => {
//         const newArr = arr.filter(value => value.product !== item.product)
//         localStorage.setItem('products', JSON.stringify(newArr));
//         location.reload()
//   });

//   productWrapper.appendChild(divProduct);
//   productWrapper.appendChild(btn);
//   document.body.appendChild(productWrapper);
// }
divProduct.innerHTML = `назва товару - ${item.product}, кількість - ${item.quantity}, ціна - ${item.price}`;
document.body.appendChild(divProduct);}

let btn = document.createElement('button');
btn.innerText = 'Delete';
btn.addEventListener('click', (e)=>{
    localStorage.clear();
    location.reload();
});
document.body.appendChild(btn);




 
   
 







// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар