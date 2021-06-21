
// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let inna = new User(1,'Inna','Yevsieienkova', 'yyy@gmail.com', '0508196904');
// let max = new User (2, 'Maxim', 'Yevsieienkov', 'mmm@gmail.com', '0501234565');
// let kolya = new User (3, 'Maxim', 'Ryuipo', 'kkkkk@gmail.com', '0501234565');
// let ivan = new User (4, 'Ivan', 'Nmjhgy', 'iiiii@gmail.com', '0501234565');
// let olya = new User (5, 'Olya', 'Mkiurf', 'ooooo@gmail.com', '0501234565');
// let katya = new User (6, 'Katya', 'Vfdsw', 'kattttgmail.com', '0501234565');
// let nazar = new User (7, 'Nazar', 'Nvfrdx', 'nnnnn@gmail.com', '0501234565');
// let bodya = new User (8, 'Bodya', 'Cvbtyui', 'bbbb@gmail.com', '0501234565');
// let tomas = new User (9, 'Tomas', 'Bghippk', 'tttt@gmail.com', '0501234565');
// let rita = new User (10, 'Rita', 'Weasdft', 'rrrrrr@gmail.com', '0501234565');

// let users = [];
// users.push (inna,max,kolya,ivan,olya,katya,nazar,bodya,tomas,rita);
// console.log(users);



// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname , email, phone, order){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let inna = new Client(1,'Inna','Yevsieienkova', 'yyy@gmail.com', '0508196904',['milk', 'sugar', 'cake']);
// let max = new Client (2, 'Maxim', 'Yevsieienkov', 'mmm@gmail.com', '0501234565',['bread','water']);
// let kolya = new Client (3, 'Maxim', 'Ryuipo', 'kkkkk@gmail.com', '0501234565',['apples', 'salt','orange', 'water']);
// let ivan = new Client (4, 'Ivan', 'Nmjhgy', 'iiiii@gmail.com', '0501234565',['carrots']);
// let olya = new Client (5, 'Olya', 'Mkiurf', 'ooooo@gmail.com', '0501234565',['book', 'pen','tomato', 'kakao', 'peper', 'pen']);
// let katya = new Client (6, 'Katya', 'Vfdsw', 'kattttgmail.com', '0501234565',['potato','oil', 'pasta', 'rice', 'spagetti','wine', 'Pepsi']);
// let nazar = new Client (7, 'Nazar', 'Nvfrdx', 'nnnnn@gmail.com', '0501234565', ['bananas', 'cocos', 'mango', 'cherry']);
// let bodya = new Client (8, 'Bodya', 'Cvbtyui', 'bbbb@gmail.com', '0501234565',['cucumber']);
// let tomas = new Client (9, 'Tomas', 'Bghippk', 'tttt@gmail.com', '0501234565', ['buter','cheese']);
// let rita = new Client (10, 'Rita', 'Weasdft', 'rrrrrr@gmail.com', '0501234565',['meat', 'pepsi', 'orange','grape', 'avocado', 'onion', 'sauce', 'sushi', 'beer']);

// let clients =[inna,max,kolya,ivan,olya,katya,nazar,bodya,tomas,rita];

// console.log(clients);




// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model,producer,year,maxspeed,engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function drive(){
//         console.log(`їдемо зі швидкістю ${maxspeed} км на годину`);
//          };
//     this.info = function info(){
//         console.log(`модель - ${model}, виробник - ${producer}, рік випуску - ${year}, обєм двигуна - ${engine} л`);
//     };
//     this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed){
//        this.maxspeed = this.maxspeed + newSpeed;
//        console.log(this.maxspeed);
//      }  
//     this.changeYear = function changeYear(newValue){
//     this.year = newValue;
// console.log(this.year);}

//     this.addDriver = function addDriver(driver){
   
// this.driver = driver;
//     console.log(this.driver);
//     }
//      };

// let bmw = new Car('X5','BMW','2020',222,'2.8');
// console.log(bmw);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(100);
// bmw.changeYear ('2021');
// bmw.addDriver({name:'Inna', age:"37"})




// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(model,producer,year,maxspeed,engine){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//         this.drive = function drive(){
//             console.log(`їдемо зі швидкістю ${maxspeed} кілометрів на годину`);
//         }
//         this.info = function info(){
//         console.log(`модель - ${model}, виробник - ${producer}, рік випуску - ${year}, обєм двигуна - ${engine} л`);
//         };
//         this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed){
//             this.maxspeed = maxspeed + newSpeed;
//             console.log(this.maxspeed);
//         };
//         this.changeYear = function changeYear(newValue){
//         this.year = newValue;
//         console.log(this.year);

// };
//         this.addDriver = function addDriver(driver){
//             this.driver = driver;
//          console.log(this.driver);
//         }
//     }
    
// }

// let car = new Car ('X5','BMW','2020',222,'2.8');
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear ('2000');
// car.addDriver ({gender: 'girl', age: '20'})





// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// let filter = users.filter(function(users){
//     return users.id %2===0
// })
// console.log(filter);

// - Відсортувати його по id. по зростанню
// let sort = users.sort(function(user1,user2){
//     return user1.id - user2.id;
// });
// console.log(sort);

// - Відсортувати його по id. по спаданню
// let sort = users.sort(function(user1,user2){
//     return user2.id - user1.id;
// });
// console.log(sort);




// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
// let sort = clients.sort(function(clients1, clients2){
//     return clients2.order.length - clients1.order.length;
// });
// console.log(sort);






// __________________________________________________________________________________








// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// class Popelushka{
//     constructor(name, age,footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     };
// };
// --Створити 10 попелюшок , покласти їх в масив
// let popelushka_1 = new Popelushka('Lubasha',18, 35);
// let popelushka_2 = new Popelushka('Nadijka',15, 33);
// let popelushka_3 = new Popelushka('Marysya',20, 37);
// let popelushka_4 = new Popelushka('Daryna',19, 36);
// let popelushka_5 = new Popelushka('Olesya',17, 38);
// let popelushka_6 = new Popelushka('Bohdana',11, 32);
// let popelushka_7 = new Popelushka('Lora',16, 35);
// let popelushka_8 = new Popelushka('Mila',21, 39);
// let popelushka_9 = new Popelushka('Galina',14, 34);
// let popelushka_10 = new Popelushka('Lina',22, 38);

// let popelushka = [popelushka_1,popelushka_2,popelushka_3,popelushka_4,popelushka_5,popelushka_6,popelushka_7,popelushka_8,popelushka_9,popelushka_10];
// console.log(popelushka);

// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince{
//     constructor(name,age,shoes){
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;
//     };
// };
// let prince = new Prince('Valerchyk', 25, 39)
// console.log(prince);
// // -- за допомоги циклу знайти яка попелюшка повинна бути з принцом
// for(let item of popelushka){
//     if(item.footSize === prince.shoes){
//         console.log(`попелюшка ${item.name} повинна бути з принцом ${prince.name}`);
//     };
// };


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
function Popelushka (name, age,footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
};
// // --Створити 10 попелюшок , покласти їх в масив
let popelushka = [
new Popelushka('Lubasha',18, 35),
new Popelushka('Nadijka',15, 33),
new Popelushka('Marysya',20, 37),
new Popelushka('Daryna',19, 36),
new Popelushka('Olesya',17, 38),
 new Popelushka('Bohdana',11, 32),
 new Popelushka('Lora',16, 35),
 new Popelushka('Mila',21, 39),
 new Popelushka('Galina',14, 34),
new Popelushka('Lina',22, 38)
];

// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Prince(name,age,shoes){
    this.name = name;
    this.age = age;
    this.shoes = shoes;
    this.search = function search(array){
        for(let item of popelushka){
          if(item.footSize === prince.shoes){
           console.log(`попелюшка ${item.name} повинна бути з принцом ${prince.name}`);
           break;
          };
        };
    };
}      

let prince = new Prince('Valerchyk', 25, 39);
prince.search(popelushka);





// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості

//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)

//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

//  інформацію брати з htmlbook.ru

function Tag(titleOfTag, action,attrs=[]){
    this.titleOfTag = titleOfTag;
    this.action = action;
    this. attrs = attrs;
}
function Attrs (titleOfAttr,actionOfAttr){
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
};
let a = new Tag ('Тег <a>','предназначен для создания ссылок', [new Attrs('href','Задает адрес документа, на который следует перейти.'), new Attrs ('name', 'Устанавливает имя якоря внутри документа')  ]);
console.log(a);
let div = new Tag ('Тег <div>', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого', [new Attrs('align', 'Задает выравнивание содержимого тега <div>.'), new Attrs('title', 'Добавляет всплывающую подсказку к содержимому')])
console.log(div);
let h1 = new Tag ('Тег <h1>', 'представляет собой наиболее важный заголовок первого уровня', [ new Attrs ('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'), new Attrs ('align', 'Определяет выравнивание заголовка.')]);
console.log(h1);
let span = new Tag ('Тег <span>', 'предназначен для определения строчных элементов документа, выделения части информации внутри других тегов и установления для нее своего стиля', [new Attrs ('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'), new Attrs ('id', 'Указывает имя стилевого идентификатора.')]) ;
console.log(span);
let input = new Tag ('Тег <input>', 'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', [new Attrs ('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов'), new Attrs ('autocomplete', 'Включает или отключает автозаполнение')]);
console.log(input);
let form = new Tag ('Тег <form>', 'устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [new Attrs ('accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'), new Attrs ('action', 'Адрес программы или документа, который обрабатывает данные формы.')]);
console.log(form);
let option = new Tag('Тег <option>', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [new Attrs ('disabled', 'Заблокировать для доступа элемент списка.'), new Attrs ('label', 'Указание метки пункта списка.')]);
console.log(option);
let select = new Tag('Тег <select>', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', [new Attrs ('disabled', 'Блокирует доступ и изменение элемента.'), new Attrs ('form', 'Связывает список с формой.')]);
console.log(select);
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
