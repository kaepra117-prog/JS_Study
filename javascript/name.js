// -------------------------------------------------------------------------
/* await - это немного подождать, а async - это метка для функции, которая говорит, что внутри будет выполняться асинхронный код и разрешено использовать await*/

// -------------------------------------------------------------------------
/* Промис -это как общение типо загружается ли игра или нет! */
console.log("Hello, World!...");

const p = new Promise((resolve, reject) => { /* Создание нового промиса! */
    setTimeout(() => {
        console.log('Hi...')
        const backendDate = {
            serv: 'async',
            shi: 'no shi',
            re: 'yes re',
            port: 3000,
        }

        resolve(backendDate) /* resolve() -О том что программа завершена успешно! или завершено! А resolve(backendDate) -мы передаем что бы взять его и исползововать в Затеме! */
    }, 2000)
})

p.then((data) => { /* -Затем!, (data)-и есть те данные от резолве!*/
    console.log('Promise Resolved!', data)
})
/* ------------------------------------- */

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() =>
            resolve(), ms
        )
    })
}

sleep(2000).then(() => {console.log('2 second complete!')})
sleep(5000).then(() => {console.log('5 second complete!')}) /* -выполнится через нескокото секунд! */
.finally(() => {console.log('COMPLETE!')}) /* - Всегда под конец! */

Promise.all([sleep(2000), sleep(4000)]).then(() => {
    console.log('Последный выполняемый промисы!')
})
Promise.race([sleep(2000), sleep(4000)]).then(() => {
    console.log('первый выполняемый промисы!')
})

/* И еще и практика! для закрепа! */
const randomBoolean = Math.random() < 0.5;

new Promise((resolve, reject) => {
    setTimeout(() => {
        if(randomBoolean) {
            resolve('Сервер подключён!')
        } else {
            reject(new Error('Ошибка подключения к серверу!'))
        }
    }, 2000)
})
.then((result) => {console.log(result)})
.catch((error) => {console.log(error)})
// -------------------------------------------------------------------------
/* Class Это шаблон для создания объектов */
class mainFurrer {
    constructor(txt) {
        this.txt = txt;
        this.voteQty = 0;
    }
    upvote() {
        this.voteQty++;
    }
}

const firstFurrer = new mainFurrer("I am the first furrer");
console.log(firstFurrer);

// -------------------------------------------------------------------------
/* for of Это перебирать каждый символ! */
const ent = 'Hey!';

for (const element of ent) {
    console.log(element);
}

// -------------------------------------------------------------------------
/* for in Это ключ в обекте! удобно работат типо! */
const MyObjZ = {
    name: 'Mansik',
    age: 13,
    isStudent: false,
}
for (let key in MyObjZ) {
    console.log(`About his ${key}: it's ${MyObjZ[key]}`);
}

// -------------------------------------------------------------------------
/* Деструктуризация объектов  это быстрое доступ к свойствам объекта  типо: */
const player = {
    nickname: "Mansik",
    level: 17,
    clan: "Uchiha"
};

const { nickname, level, clan } = player;

console.log(nickname); // "Mansik"
console.log(level);    // 17
/* Это и есть деструйктизация! */

// -------------------------------------------------------------------------
/* Выражение — это любой кусок кода, который в итоге превращается в какое-то конкретное значение.
а Инструкция — это полноценная команда к действию. Она говорит движку: «сделай вот это», но сама по себе не создает значения, которое можно было бы куда-то положить.

"-Главный лайфхак (Правило console.log)
Если ты сомневаешься, что перед тобой — выражение или инструкция, попробуй мысленно засунуть это в console.log().

Если код работает и выводит результат — это Выражение.

console.log(5 + 3) ✅ Работает! Значит, 5 + 3 — это выражение.

console.log(a === b) ✅ Работает!

Если код выдает ошибку — это Инструкция.

console.log(let a = 5) ❌ Ошибка! Нельзя засунуть создание переменной внутрь вывода. Значит, let a = 5 — это инструкция.

console.log(if (true) { }) ❌ Ошибка! Нельзя вывести if на экран. Это инструкция.

Итог: Выражения всегда превращаются в данные. Инструкции просто командуют парадом и заставляют программу работать." */

// -------------------------------------------------------------------------
const fnWithError = () => {
    throw new Error('This is an error'); /* создание новой ошибки! */
}
fnWithError(); /* типо создаем и призываем ошибку останавлявовая далнейшего выполнение кода! */

console.log('This will not be logged');


// -------------------------------------------------------------------------
const fnWithError = () => {
    throw new Error('This is an error');
}
try { /* -Попробововать */
    fnWithError();
} catch (error) { /* -Поймать ошибку и обработать ее! */
    console.error('An error occurred:', error.message);
}

console.log('This will not be logged'); /* Эти двое выполнятся */
console.log(5 + 5);
/* А это то как продолжить выполнение кода после обработки ошибки */

// -------------------------------------------------------------------------
/* New Evalution FN */
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    title: "First Post",
}
console.log(newPost(firstPost));
/* - Тут происходят первые мы создали параметры это пост и аддедат и этому аддедату пройсвоино значение по-умолчанию это Date() потом за квадратными скобок еще и круглые, это означает то что все что напишятся внутри этих кваддратных скобок это return поэтаму посту три точек дали что бы показвовались толко его свойства а аддедату толко выводил дату и мы наконец дали этому функцую firstPost и в итоге в консоле мы видим айди и тайтл и еще время а это потому что аддедату не дали никакое значение поэтаму выполнился его по-умолчание */

// -------------------------------------------------------------------------
/* Приколюха типо! ПОН? */
const MyFn = (porn, hub = 2) => {
    return porn * hub;
};
console.log(MyFn(5, 2));
console.log(MyFn(5));  // 10

// -------------------------------------------------------------------------
/* Это стрелочная функция оно типо короткая и вся в этом и прикол и современный */
const MyFn = () => {
    console.log('Hello, World!');
};
MyFn();

// -------------------------------------------------------------------------
/* Это функционалное выражение! это типо что то вроде Анонимной функции, А функция декларешн это тот самы обычны спосб обявление функци! а внизу это ФН Вырожение! а ФН Вырожение не умеет вызыватся до обявление ФН! а декларешн да! */
const myFn = function (a, b) {
    return a + b;
}
console.log(myFn(5, 10))

// -------------------------------------------------------------------------
/* ...AboutHim -разделяет свойства с обектьа! то есть показвовает толко обекты! И копирует его помоему?!  */

// -------------------------------------------------------------------------
/* операнд это то с чем мы действуем! с оператором! */
/* есть Унарные операторы это значит оператор работает с одним операндом,  А у Бинарных два операнда!*/
/* Инфексная запись это когда оператор записан между двумя операндами */
/* Префиксная запись это когда оператор записан перед операндом */
/* Постфиксная запись это когда оператор записан после операнда */
/* Приротетность операторов! это порядок, в котором операторы выполняются операторы в скобчках первые! */

// -------------------------------------------------------------------------
/* Испозовование строгого режима где нелзя обявлят супер-глобал переменные!  просто нужно прописать "use strict" */
'use strict'
function printMyRealName() {
    a = 'Mimik';
    console.log(a);
}
printMyRealName()
console.log(a);

// -------------------------------------------------------------------------
/* КолБэк Функтион (Это типо когда ты вызываеш функцую внутри  другого функтион) */
function printMyRealName() {
    console.log('Mansik');
}

setTimeout(printMyRealName, 2000); /* setTimeout() - это функция, которая позволяет выполнить определенную функцию (в данном случае printMyRealName) через заданный промежуток времени (в данном случае 2000 миллисекунд, что равно 2 секундам). Когда мы вызываем setTimeout(printMyRealName, 2000), мы передаем функцию printMyRealName в качестве первого аргумента и время задержки в миллисекундах в качестве второго аргумента. После истечения этого времени, функция printMyRealName будет вызвана и выполнится, выводя "Mansik" в консоль. Это демонстрирует использование коллбек-функции, так как printMyRealName является функцией обратного вызова, которая будет вызвана после определенного события (в данном случае после истечения времени). */

// -------------------------------------------------------------------------
/* Културное Копирование объектов */
const obj = {
    name: 'John',
    age: 30,
}
const obj2 = Object.assign({}, obj); /* Копи обектов! а алтьанратив ...obj*/
obj2.name = 'Jane';
console.log(obj.name); // Output: John
console.log(obj2.name); // Output: Jane

// -------------------------------------------------------------------------
/* JSON Превращение в строку и обратно */
const mekke = {
    name: "Mekke",
    population: 2000000,
}
console.log(mekke);
const stringifed = JSON.stringify(mekke); /* в строку */
console.log(stringifed);
console.log(JSON.parse(stringifed)); /* обратно в объект */

// -------------------------------------------------------------------------
/* Обьектизация! */
const name = 'Mansik';
const age = 17;
const obj = {
    name,
    age, /* -Более сокращенный способ записи свойств объекта */
    country: 'Kazahstan'
}
console.log(obj.age);

// -------------------------------------------------------------------------
/* Работа с консоле! */
const onePeace = {
    name: "Monkey D. Luffy",
    age: 19,
    occupation: "Pirate",
    crew: "Straw Hat Pirates",
};
console.log(onePeace);
console.dir(onePeace); /* -.dir Это отрабражает все свойство обеькта! */
console.table(onePeace); /* -.table Это отрабражает объект в виде таблицы! */

// -------------------------------------------------------------------------
/* работа с if else (пример!) пример №1 */

const mansik_year = 100;
if (mansik_year === 12) {
    console.log("Yeah! bro! welcome my " + mansik_year + " year boy")
} else if (mansik_year === 100) {
    console.log("Bro you are dead!")
} else {
    console.log("Fuck you bro!")
}

/* пример №2 */
const year = 2024;
const message = year === 2024
    ? "i worked"
    : year === 3000
        ? "what happenend"
        : "i don't worked!";

console.log(message);

// -------------------------------------------------------------------------
/* работа с alert, prompt и confirm (примеры!) */
const hisAge = confirm("Are you have a 18?");
const alimba = prompt("What happpenend?: ", "golden");
alert("Hi my " + alimba + " babe! ");

if (hisAge) {
    console.log("Ok Bro!");
} else {
    console.log("Fuck you!");
}

// -------------------------------------------------------------------------
/* работа с switch case (примеры!) */
const herAge = +prompt("Сколко тебе лет? ");

switch (herAge) {
    case 0:
        console.log("Ну блят введи хоть что то!")
        break;

    case 1:
        console.log("Ах ТЫ мамкин Хакер!")
        break;

    default:
        console.log("Ну блят введи хоть что то!")
        break;
}
/* пример №2 с  switch case */
const hisName = prompt("Введите ваше имя?");
const hisLike = confirm("Зраствуйте " + hisName + " Желаете что нибуд?");

if (!hisName) {
    alert("Вы мудак?");
}
if (hisLike) {
    const hisOrder = +prompt("Что будете заказвоват?");
    switch (hisOrder) {
        case 0:
            alert("Вы ниче не закозали!");
            break;
        case 1:
            alert("Отличное чай!");
            break;
        case 2:
            alert("Отличное Кофе!");
            break;
        case 3:
            alert("Отличное Газировка!");
            break;

        default:
            alert("Вы то не выбрали не правилный номер товара!");
            break;
    }
} else {
    alert("Ну нахер пришел тогда?");
}
// -------------------------------------------------------------------------
/* работа с циклами по while, do while и for. */
/* пример Работы с while */

let consunan = 0;
while (consunan <= 10) {
    console.log(consunan);
    consunan++
}

/* пример Работы с do while */

let setler = 0;
do {
    console.log(setler);
    setler++
} while (setler <= 10)

/* пример Работы с for */

for (let i = 0; i <= 5; i++) {
    alert(i);
}

/* +еще примеры с этого */

for (let i = 1; i <= 10; i++) {
    alert("Отжимание№: " + i)
    if (i === 10) {
        alert("Треня закончено!")
    }
}

/* +еще примеры с этого */

while (true) {
    let name_is = "Mansur";
    let colnsultant = confirm("Хей " + name_is + " Еще налить?")

    if (colnsultant) {
        alert("Наливаю...")
    } else {
        alert("Fuck!")
        break;
    }
}
// -------------------------------------------------------------------------
/* работа с Функции в JavaScript. Область видимости. Параметры и аргументы. Значения по умолчанию. Return. */
function herName() {
    alert("Mansur");
}
herName()

/* +еще примеры */

function lastName(messager, count) {
    for (i = 0; i <= count; i++)
        console.log(messager)
}
lastName("Hello ", 3)

/* +еще примеры */

function unityRoom(age) {
    if (typeof age !== `number`) {
        return "Возрост это про измеряние с цифрами!"
    }
    if (age < 1 || age > 110) {
        return "такого Возроста не существует!"
    }
    if (age < 18) {
        return "не совершенно летный"
    }
    return "IT'S OK!!!"
}
console.log(unityRoom(17))

/* +еще примеры */

function canIBuy(balance, price) {
    if (balance > price) {
        return `Buy bro! Buy it! and you have a ${balance - price}`
    } else {
        return "You dont have a money Bro? Shoot him!"
    }
}
console.log(canIBuy(505, 500))
/* -----------------------------------------------------------------------
My FiRST PRACTICE */
const CLUB_NAME = "CyberShym";
let clubBalance = 0;

const CheckAccess = (age) => {
    if (typeof age !== `number`) {
        alert("Set txt!")
        return false;
    }
    if (age >= 18) {
        alert("Welcome to!")
        return true;
    } else {
        alert("You isn't a big boy!")
        return false;
    }
}

function startSession() {
    const hisName = prompt("Your name?");
    const hisAge = +prompt("Your age?");
    if (CheckAccess(hisAge)) {
        const hisOkForVipRoom = confirm(`${hisName}, бронируем VIP-зал за 2000 тенге?`);

        if (hisOkForVipRoom) {
            2000 += clubBalance
            alert(`Приятной игры в VIP! Баланс клуба:${clubBalance}`)
        } else {
            let hisTimeForGaming = +prompt("How much time you need for your Gaming?")
            if (typeof hisTimeForGaming !== `number`) {
                alert("I need time for number!")
            }
            if (hisTimeForGaming <= 10) {
                alert(`It's ${hisTimeForGaming} good time!`)
                for (let i = 0; i <= hisTimeForGaming; i++) {
                    console.log(`His time is cooming ${i}`)
                    let plusBalance = 500 + clubBalance
                    console.log(plusBalance)
                }
            } else {
                alert("It's time so big!")
            }
        }
    } else {
        alert("You isn't a big boy!");
    }
    switch (clubBalance) {
        case 0:
            alert(`it's bad day! us balance +${clubBalance}`)
            break;
        case 500:
            alert(`It's normal day +${clubBalance}`)
            break;
        case 2000:
            alert(`It's good day +${clubBalance}`)
            break;
        default:
            alert(`It's strange day +${clubBalance}`)
            break;
    }
}
const starTheSession = confirm("Начать Ли Сессию?");
if (starTheSession) {
    startSession()
} else {
    alert("ПОШОЛ НАХХХУЙЙ!!!")
}
/* -----------------------------------------------------------------------*/
/* Объекты в JavaScript. Свойства объекта — чтение, добавление, удаление, проверка наличия и перебор. */
const firstNewObject = {
    model: "Iphone",
    version: "6S",
    year: 2016,
}
console.log(firstNewObject);

/* JavaScript объекты — сравнение, копирование, объединение, деструктуризация, остаточные параметры. */
/* так или... */
const obj1 = { name: 'Mansur' }
const obj2 = Object.assign({}, obj1)

obj2.name = 'Mixsim'

console.log('obj1: ', obj1)
console.log('obj2: ', obj2)
/* Так!? */
const obis1 = { name: 'Mansur' }
const obis2 = { ...obis1 }

obis2.name = 'Mixsim'

console.log('obj1: ', obis1)
console.log('obj2: ', obis2)

/* Примеры */
const user = {
    name_is: "MaiToGay",
    //name_is_one: {
    // name_under_one: "RockLi"
}
// }
console.log(user.name_is_one?.name_under_one)
console.log("What happenend?")
/* -----------------------------------------------------------------------*/
/* Ключевое слово this в JavaScript для начинающих • this в объектах и функциях */
const luser = {
    name: "Mansik",
    age: 17,
    LogThis: function () {
        console.log("This!", this)
        console.log("This! ", this.name)
    }
}
luser.LogThis()

/* -----------------------------------------------------------------------*/
/* JavaScript методы примитивов. Числа. Объект Math. Округление чисел. Парсинг чисел из строк. */
Math.floor()/*  — Округляет вниз (в пол). Было 3.6 → стало 3. */

Math.ceil() /* — Округляет вверх (в потолок). Было 3.1 → стало 4. */

Math.round() /* — По правилам математики (до ближайшего). Было 3.4 → 3, было 3.5 → 4. */

Math.trunc() /* — Просто отбрасывает всё после запятой. Было 3.9 → стало 3. */
Math.abs(-100) /* — Делает число положительным */

Math.random() /* — Генерирует случайное число от 0 (включительно) до 1 (исключительно) */

Math.pow(2, 3) /* — Возводит число в степень. Было 2, 3 → стало 8 (2 в степени 3) */

Math.sqrt(16) /* — Квадратный корень. Было 16 → стало 4 */

Math.cbrt(27) /* — Кубический корень. Было 27 → стало 3 */
/* Vo! */
const numser = 100;

console.log(numser.toFixed(5)); // округление до 5 знаков после запятой
console.log(numser.toPrecision(4)); // округление до 4 значащих цифр

/* Vo! */
const numberist = 100;

console.log(`Приветствую тебя дорогой ${numberist} читатель! а это твой-`, numberist.toString(9)) /* Превращает число в строку с указанным основанием */

/* Превращает строчную число с буквами! в число! */
const numberAsString = '1234px';

console.log(parseInt(numberAsString)); // 1234
console.log(parseFloat(numberAsString)); // 1234

/* -----------------------------------------------------------------------*/
/* Строки в JavaScript. Методы at, replace, slice, includes, repeat, trim, toUpperCase, toLowerCase, split. Длина строки length. */
const name = 'Александр'
const emptyStr = ''
const strWithOneSpace = ` `

console.log(`Длина строки '${name}': `, name.length)
console.log(`Длина строки '${emptyStr} ': `, emptyStr.length)
console.log(`Длина строки '${strWithOneSpace}': `, strWithOneSpace.length)

/* (txti.toLowerCase() ) -делает строку маленькими буквами,  (txti.toUpperCase() ) -делает строку большими буквами */
const txti = "Hello, World!";

console.log(txti.toLowerCase())
console.log(txti.toUpperCase())


const messagetxt = "  Hello, World!  ".trim() /* — Удаляет пробелы в начале и в конце строки. Было "  Hello, World!  " → стало "Hello, World!" еще и есть .trimEnd() и .trimStart() */;

console.log(messagetxt)

/* ---------------------------------------------------------------------- */
const messagetxto = "Hello, World!"

console.log(messagetxto.indexOf("World")) /* .indexOf("World") - Возвращает индекс первого вхождения подстроки "World" в строке messagetxto */

/* ---------------------------------------------------------------------- */
const messagetxti = "Hello, World!"

console.log(messagetxti.includes("World")) /* .includes("World") - Возвращает true, если подстрока "World" найдена в строке messagetxti, и false в противном случае, еще и есть .startsWith() и .endsWith() */

/* ---------------------------------------------------------------------- */
const messagetxtie = "Hello, World!"

console.log(messagetxtie.substring(7, 12)) /* .substring(start, end) - Возвращает подстроку из строки messagetxtie, начиная с индекса start и заканчивая индексом end и еще есть .slice() и .substr() */

/* ---------------------------------------------------------------------- */
const messagetxtier = "Hello, World!"

console.log(messagetxtier.repeat(7)) /* .repeat(7) - Повторяет строку messagetxtier 7 раз */

/* ---------------------------------------------------------------------- */
const messagetxtieri = "Hello, World!"

console.log(messagetxtieri.replace("World", "Universe")) /* .replace("World", "Universe") - Заменяет подстроку "World" на "Universe" в строке messagetxtieri и еще есть replaceAll которые заменяют все вхождения*/

/* ---------------------------------------------------------------------- */
const messagetxtierisF = "Hello, World!"

console.log(messagetxtierisF.split("")) /* .split("World") - Разделяет строку messagetxtierisF по подстроке На буквы */
/* ---------------------------------------------------------------------- */
const messagetxtierisFo = ["JavaScript", "это", "весело"];

// 1. Без параметров (через запятую)
console.log(messagetxtierisFo.join());
// Результат: "JavaScript,это,весело"

// 2. С пробелом
console.log(messagetxtierisFo.join(" "));
// Результат: "JavaScript это весело"

// 3. С дефисом или любым символом
console.log(messagetxtierisFo.join(" — "));
// Результат: "JavaScript — это — весело"

// 4. Пустая строка (склеить вплотную)
console.log(messagetxtierisFo.join(""));
// Результат: "JavaScriptэтовесело"

messagetxtierisFo.push("новый элемент"); /* push() - Добавляет один или более элементов в конец массива и возвращает новую длину массива. как unshift()!  но только в конец */

/* ---------------------------------------------------------------------- */
const messagetxtierisFor = "Hello, World!";
console.log(messagetxtierisFor.slice(1, 4)) /* slice(1, 4) - Возвращает подстроку от индекса 1 до 4 */

/* ---------------------------------------------------------------------- */
/* JavaScript массивы — основы. Приведение к строке. Копирование, объединение и сравнение массивов. */

const unleryka = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J'];

console.log("unleryka: before", unleryka);

unleryka.unshift('K', 'L', 'Z'); /* unshift() - Добавляет один или более элементов в начало массива и возвращает новую длину массива. как push()!  но только в начало */

console.log("unleryka: after", unleryka);

/* --------------------------------------------------------------------- */
const messagetxtierisForP = ['Q', 'W', 'E',]
console.log(messagetxtierisForP.pop()) /* Удаляет последный элемент */
console.log(messagetxtierisForP.shift()) /* Удаляет первый элемент */
console.log("messagetxtierisForP:", messagetxtierisForP)

/* --------------------------------------------------------------------- */
/* Методы массивов JavaScript — forEach, map, filter, reduce, some, every, sort, includes, indexOf */
const dataFor = ["Mansik", 17,]

const [nameher, age] = dataFor

console.log("The name: ", nameher) /* Выводит "Mansik" */
console.log("The age: ", age) /* Выводит 17 */

/* ---------------------------------------------------------------------- */
const letters = ['a', 'b', 'c', 'd', 'e']

letters.forEach((letter, index, array) => {
    console.log(`Letter: ${letter}, Index: ${index}, Array: ${array}`)
}) /* -Работа с forEach()  Выводит каждую букву, её индекс и весь массив */

/* ---------------------------------------------------------------------- */
const prices = [100, 200, 300, 400, 300, 500];

console.log(prices.indexOf(300, 3)); /* .indexOf(300, 3) - Ищет первое вхождение числа 300 в массиве prices, начиная с индекса 3. В данном случае вернет 4, так как первое вхождение 300 после индекса 3 находится на индексе 4. Если бы мы искали без второго параметра, то вернуло бы 2, так как первое вхождение 300 находится на индексе 2. еще и есть lastIndexOf() -он ищет начиная с конца!*/

/* ---------------------------------------------------------------------- */
const theObject = [
    {
        name: "Mansik",
        age: 12,
    },
    {
        name: "Mansur",
        age: 30,
    },
    {
        name: "Valergh",
        age: 23,
    },
]

console.log(theObject.findIndex((element, index, array) => {
    if (element.name === "Mansur") {
        return true
    }
})) /* .findIndex() - Ищет индекс первого элемента в массиве theObject, который удовлетворяет условию, заданному в функции обратного вызова. В данном случае он ищет объект, у которого свойство name равно "Mansur". Если такой элемент найден, возвращается его индекс (в данном случае 1), если нет - возвращается -1. */

/* ---------------------------------------------------------------------- */
const theObjectFor = [
    {
        name: "Mansik",
        age: 12,
    },
    {
        name: "Mansur",
        age: 30,
    },
    {
        name: "Valergh",
        age: 23,
    },
]

console.log(
    theObject.some((item) => item.name === "Mansik")
) /* some() - Проверяет, удовлетворяет ли хотя бы один элемент массива условию, заданному в функции обратного вызова. В данном случае он проверяет, есть ли в массиве theObject объект с свойством name равным "Mansik". Если такой элемент найден, возвращается true, иначе - false. */

/* ---------------------------------------------------------------------- */
const theObjectForProject = [
    {
        name: "Mansik",
        age: 19,
    },
    {
        name: "Mansur",
        age: 30,
    },
    {
        name: "Valergh",
        age: 23,
    },
]

console.log(
    theObjectForProject.every((item) => item.age >= 18)
) /* every() - Проверяет, удовлетворяют ли все элементы массива условию, заданному в функции обратного вызова. В данном случае он проверяет, что все объекты в массиве theObjectForProject имеют свойство age, которое больше или равно 18. Если все элементы удовлетворяют условию, возвращается true, иначе - false. В данном случае вернет true, так как все объекты имеют возраст 19 или выше. */

/* ---------------------------------------------------------------------- */
const theObjectForProjectCC = [
    {
        name: "Mansik",
        age: 19,
    },
    {
        name: "Mansur",
        age: 30,
    },
    {
        name: "Mansur",
        age: 40,
    },
    {
        name: "Valergh",
        age: 23,
    },
]

console.log(
    theObjectForProjectCC.find((user) => user.name === "Mansur")
) /* find() - Ищет первый элемент в массиве theObjectForProjectCC, который удовлетворяет условию, заданному в функции обратного вызова. В данном случае он ищет объект, у которого свойство name равно "Mansur". Если такой элемент найден, возвращается сам элемент (в данном случае { name: "Mansur", age: 30 }), если нет - возвращается undefined. В данном случае вернет первый объект с именем "Mansur", который имеет возраст 30. еще и есть filter() который возвращает массив всех элементов, удовлетворяющих условию. */

/* ---------------------------------------------------------------------- */
const theObjectForProjectCCS = [
    {
        city: "Shymkent",
        name: "Mansik",
        age: 19,
    },
    {
        city: "Astana",
        name: "Mansur",
        age: 30,
    },
    {
        city: "Kazakhstan",
        name: "Mansur",
        age: 40,
    },
    {
        city: "Moscow",
        name: "Valergh",
        age: 23,
    },
]

console.log(
    theObjectForProjectCCS.map((user) => user.name === "Mansur")
) /* map() - Создает новый массив, который содержит результаты вызова функции обратного вызова для каждого элемента массива theObjectForProjectCCS. В данном случае он создает новый массив, в котором для каждого объекта проверяется, равно ли его свойство name строке "Mansur". Если да, то в новом массиве будет true, иначе - false. В данном случае вернет [false, true, true, false], так как второй и третий объекты имеют имя "Mansur". */

/* ---------------------------------------------------------------------- */
const theObjectForProjectCCSH = [
    {
        city: "Shymkent",
        name: "Mansik",
        age: 19,
    },
    {
        city: "Astana",
        name: "Mansur",
        age: 30,
    },
    {
        city: "Kazakhstan",
        name: "Mansur",
        age: 40,
    },
    {
        city: "Moscow",
        name: "Valergh",
        age: 23,
    },
]

const haveAge = theObjectForProjectCCSH.reduce((accumlator, element, index, array,) => {
    return accumlator + element.age
}, 0)

console.log(
    `Total age:`,
    haveAge / theObjectForProjectCCSH.length
) /* reduce() - Применяет функцию обратного вызова к каждому элементу массива theObjectForProjectCCSH, сводя его к одному значению. В данном случае он суммирует все значения свойства age для объектов в массиве. Начальное значение аккумулятора (accumulator) установлено в 0. В итоге переменная haveAge будет содержать сумму возрастов всех объектов, а затем мы делим эту сумму на длину массива, чтобы получить средний возраст. В данном случае вернет "Total age: 28", так как сумма возрастов 19 + 30 + 40 + 23 = 112, а длина массива 4, и 112 / 4 = 28. Еще и есть reduceRight() -Который пребивает код с направа на лево!*/

/* --------------------------------------------------------------------- */
const theObjectForProjectCCSHT = [
    {
        city: "Shymkent",
        name: "Mansik",
        age: 19,
    },
    {
        city: "Astana",
        name: "Mansur",
        age: 30,
    },
    {
        city: "Kazakhstan",
        name: "Mansur",
        age: 40,
    },
    {
        city: "Moscow",
        name: "Valergh",
        age: 23,
    },
]
const haveAgeO = [...theObjectForProjectCCSHT].reverse()

console.log(
    theObjectForProjectCCSHT
)
console.log(
    haveAgeO
) /* reverse() - Изменяет порядок элементов в массиве theObjectForProjectCCSHT на обратный. В данном случае он создает новый массив haveAgeO, который является копией массива theObjectForProjectCCSHT, но с элементами в обратном порядке. В данном случае вернет массив с объектами в обратном порядке, то есть сначала будет объект с городом "Moscow", затем "Kazakhstan", "Astana" и "Shymkent". Еще и есть sort() - Который сортирует элементы массива по определенному критерию. */

/* --------------------------------------------------------------------- */
const AgeOf = [34, 8, 2, 234];

const AgeOfHistory = [...AgeOf].sort((a, b) => a - b);

console.log(AgeOfHistory); /* sort() - Сортирует элементы массива AgeOf в соответствии с функцией сравнения, которая принимает два элемента a и b. В данном случае функция сравнения возвращает отрицательное значение, если a меньше b, положительное значение, если a больше b, и 0, если они равны. Это приводит к сортировке чисел в возрастающем порядке. В данном случае вернет [2, 8, 34, 234]. Если бы мы использовали (b - a), то сортировка была бы в убывающем порядке. */

/* --------------------------------------------------------------------- */
/* Перебор объекта в JavaScript. Коллекции Map и Set */

const myNinjaWay = {
    name: 'Ninja',
    age: 100,
    weapon: 'purely hand-to-hand',
}

for (const key in myNinjaWay) {
    console.log("Имя свойствы", key);
    console.log("Значение свойства", myNinjaWay[key]); /* for...in - Цикл for...in используется для перебора всех перечисляемых свойств объекта. В данном случае он будет выводить ключи объекта myNinjaWay, такие как 'name', 'age' и 'weapon'. */
}

/* ---------------------------------------------------------------------- */

console.log(Object.keys(myNinjaWay)); /* Object.keys() - Метод Object.keys() возвращает массив, содержащий имена всех перечисляемых свойств объекта. В данном случае он вернет ['name', 'age', 'weapon']. */

/* ---------------------------------------------------------------------- */

Object.keys(myNinjaWay).forEach((key) => {
    console.log("Имя свойствы", key);
});

/* ---------------------------------------------------------------------- */

console.log(Object.values(myNinjaWay)); /* Object.values() - Метод Object.values() возвращает массив, содержащий значения всех перечисляемых свойств объекта. В данном случае он вернет ['Ninja', 100, 'purely hand-to-hand']. */

/* ---------------------------------------------------------------------- */

console.log(Object.entries(myNinjaWay)); /* Object.entries() - Метод Object.entries() возвращает массив пар [ключ, значение] для всех перечисляемых свойств объекта. В данном случае он вернет [['name', 'Ninja'], ['age', 100], ['weapon', 'purely hand-to-hand']]. */

/* ---------------------------------------------------------------------- */

const datadin = new Map([
    [1, "Hello World!"],
    ["1", "Hello World!"],
])

console.log(datadin)
/* Map - Коллекция Map в JavaScript представляет собой структуру данных, которая позволяет хранить пары ключ-значение. В данном случае мы создаем новый объект Map с помощью конструктора Map и передаем ему массив пар [ключ, значение]. В этом примере мы используем числовой ключ 1 и строковый ключ "1", оба из которых связаны со значением "Hello World!". Когда мы выводим datadin в консоль, мы увидим, что это объект Map, который содержит эти пары ключ-значение. Важно отметить, что в Map ключи могут быть любого типа, включая объекты и функции, в отличие от обычных объектов JavaScript, где ключи всегда являются строками или символами. */

/* ---------------------------------------------------------------------- */

const datarin = new Map()

datarin.set(1, 'John')
datarin.set('1', 'John')

console.log(datarin)
/* Map.prototype.set() - Метод set() добавляет или обновляет элемент с указанным ключом и значением в объекте Map. В данном случае мы используем метод set() для добавления двух пар ключ-значение в объект datarin. Первый вызов set(1, 'John') добавляет пару, где ключом является число 1, а значением - строка 'John'. Второй вызов set('1', 'John') добавляет пару, где ключом является строка '1', а значением также является строка 'John'. Когда мы выводим datarin в консоль, мы увидим, что это объект Map, который содержит эти две пары ключ-значение. Важно отметить, что числовой ключ 1 и строковый ключ "1" считаются разными ключами в Map, поэтому оба элемента будут сохранены независимо друг от друга. */

/* ---------------------------------------------------------------------- */

const datarin = new Map()

datarin.set(1, 'Udzumaki')
datarin.set('1', 'Naruto')

console.log(datarin.get(1))
console.log(datarin.get('1'))
/* Map.prototype.get() - Метод get() возвращает значение, связанное с указанным ключом в объекте Map. В данном случае мы используем метод get() для получения значений, связанных с ключами 1 и '1' в объекте datarin. Первый вызов get(1) возвращает значение 'Udzumaki', так как это значение связано с числовым ключом 1. Второй вызов get('1') возвращает значение 'Naruto', так как это значение связано со строковым ключом '1'. Когда мы выводим эти значения в консоль, мы увидим 'Udzumaki' и 'Naruto' соответственно. Это демонстрирует, что в Map числовой ключ 1 и строковый ключ '1' считаются разными ключами, и каждый из них может иметь свое собственное значение. */

/* ---------------------------------------------------------------------- */

const datarin = new Map()

datarin.set(1, 'Udzumaki')
datarin.set('1', 'Naruto')

console.log(datarin.has('1'))
/* Map.prototype.has() - Метод has() возвращает логическое значение, указывающее, содержит ли объект Map элемент с указанным ключом. В данном случае мы используем метод has() для проверки наличия ключа '1' в объекте datarin. Поскольку мы ранее добавили пару ключ-значение с помощью set('1', 'Naruto'), метод has('1') вернет true, указывая на то, что ключ '1' существует в объекте Map. Если бы мы проверяли другой ключ, который не был добавлен, например has(2), то он вернул бы false. В данном случае вывод в консоль будет true, так как ключ '1' присутствует в datarin. */

/* ---------------------------------------------------------------------- */

const datarin = new Map()

datarin.set(1, 'Udzumaki')
datarin.set('1', 'Naruto')

datarin.clear()

console.log(datarin)
/* Map.prototype.clear() - Метод clear() удаляет все элементы из объекта Map, оставляя его пустым. В данном случае мы используем метод clear() для очистки объекта datarin после того, как мы добавили в него пару ключ-значение. После вызова clear(), объект datarin будет пустым, и при выводе его в консоль мы увидим Map(0) {}, что означает, что в объекте Map нет элементов. Это демонстрирует, что метод clear() успешно удалил все пары ключ-значение из datarin. */

/* ---------------------------------------------------------------------- */

const datarin = new Map()

datarin.set(1, 'Udzumaki')
datarin.set('1', 'Naruto')
datarin.set('3', 'Boruto')

console.log(datarin.size)
/* Map.prototype.size - Свойство size возвращает количество пар ключ-значение, содержащихся в объекте Map. В данном случае мы добавляем три пары ключ-значение в объект datarin с помощью метода set(). После добавления этих пар, свойство size будет равно 3, так как в объекте Map теперь содержится три элемента. Когда мы выводим datarin.size в консоль, мы увидим число 3, что указывает на количество пар ключ-значение в объекте datarin. Это демонстрирует, что свойство size позволяет нам узнать, сколько элементов содержится в объекте Map. */

/* ---------------------------------------------------------------------- */

const datarin = new Set([1, 2, 2, 1, 3,])

console.log(datarin)/* Set - Коллекция Set в JavaScript представляет собой структуру данных, которая позволяет хранить уникальные значения любого типа. В данном случае мы создаем новый объект Set с помощью конструктора Set и передаем ему массив [1, 2, 2, 1, 3]. Поскольку Set хранит только уникальные значения, он автоматически удаляет повторяющиеся элементы. В результате, когда мы выводим datarin в консоль, мы увидим Set(3) {1, 2, 3}, что означает, что в объекте Set содержатся только уникальные числа 1, 2 и 3. Это демонстрирует, что Set автоматически обрабатывает дубликаты и сохраняет только уникальные значения. */

/* --------------------------------------------------------------------- */
/* Классы в JavaScript — объявление, конструктор, наследование, экземпляр, геттеры и сеттеры */

class Student {
    planet = "Матушка земля"
    country = "Казахстан"
    region


    constructor(name, age) {
        this.name = name
        this.age = age
    }

    set city(value) {
        const firstLetter = value[0].toUpperCase()
        const fromSecondLetter = value.slice(1).toLowerCase()

        this._city = `${firstLetter}${fromSecondLetter}`
    }

    get city() {
        return `She city: ${this._city}!`
    }

    ShowAge() {
        console.log(`ЕЕ возрост: ${this.age}`)
    }
}

const firstStudent = new Student('Mansik', 12);
const secondStudent = new Student('Mansur', 17);

console.log(firstStudent);
console.log(secondStudent);

console.log(`Имя первого малчика студента ${firstStudent.name}`);
console.log(`Имя Старика ученика! ${secondStudent.name}`);

firstStudent.ShowAge()
secondStudent.ShowAge()

secondStudent.city = "moskow"

console.log(`${secondStudent.city}`)

class Character {

    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }

}

class Warrior extends Character {

}
/* extends означает наследуется от. Теперь Warrior автоматически получил всё, что есть у Character */

/* ЗАЧЕМ НУЖЕН ГЕТТЕР? */
/* Например есть */
class User {

    constructor(first, last) {

        this.firstName = first
        this.lastName = last

    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }

}

const user = new User("Valergh", "Mansik")

console.log(user.fullName)

/* ЗАЧЕМ НУЖЕН СЕТТЕР? */
/* Сеттер — это специальный метод, который вызывается, когда ты присваиваешь значение. Например*/
class Player {

    constructor() {
        this._hp = 100
    }
    set hp(value) {
        this._hp = value
    }
}
/* Теперь */
const player = new Player()

player.hp = 300
/* JavaScript автоматически вызовет set hp(value) */
/* Но зачем это нужно? Чтобы проверять данные. Например */
class Player {

    constructor() {
        this._hp = 100
    }

    set hp(value) {
        if (value < 0) {
            console.log("HP не может быть меньше 0")
            return
        }
        this._hp = value
    }

    get hp() {
        return this._hp
    }
}
/* Теперь */
const player = new Player()
player.hp = -500
/* Получим: HP не может быть меньше 0 И значение не изменится. */

/* ----------------------------------------------------------------------*/
/* JavaScript Отложенное и регулярное выполнение кода — setTimeout и setInterval, clearTimeout и др. */
const logMessage = (name, age) => {
    alert(`Hello ${name}, you are ${age} years old!`);
}
const timeID = setTimeout(logMessage, 3000, "Anima", 55,)

clearTimeout(timeID)

const timeIDTwo = setInterval(() => { console.log("Darina") }, 1000)

setTimeout(() => {
    clearInterval(timeIDTwo)
}, 12000) /* setTimeout() - Функция setTimeout() используется для выполнения указанной функции один раз после заданной задержки в миллисекундах. В данном случае мы используем setTimeout() для вывода сообщения "Hello World!" в консоль через 3000 миллисекунд (или 3 секунды) после вызова функции. После истечения этого времени, функция обратного вызова будет выполнена, и сообщение будет выведено в консоль. */

/* ----------------------------------------------------------------------*/
/* Обработка ошибок в JavaScript — try catch finally, throw, класс Error */
console.log("Code Started");
try {
    const names = undefined
    names.forEach((name) => {
        console.log("Names: ", name)
    })
} catch (error) {
    console.log("It's FUCKING ERROR!!! BRO!: ", error)
} finally {
    console.log("It's make everthing!")
}

console.log("Code Ended");

/* --------------------------------------------------------------------- */
/* JavaScript событийный цикл Event Loop, асинхронный код, промисы (Promise), async / await */

/* что такое АСИНХРОННЫЙ код? Представь пример из жизни!:
Ты заказал пиццу.

"СИНХРОННО":
Заказать пиццу
...
Ждать 40 минут
...
Покушать
Потом начать делать домашку
>40 минут просто стоишь<.

"АСИНХРОННО":
Заказать пиццу
Начать делать домашку
Посмотреть фильм
Поиграть
Через 40 минут звонок
Пицца приехала
Вот это и есть асинхронность. */

/* ---------------------------- */
/* Теперь посмотрим код */
console.log("1");

setTimeout(() => {
    console.log("2");
}, 3000);

console.log("3");
// 1, 3, 2 !

/* СОБЫТИЙНЫЙ ЦИКЛ EVENT LOOP */
/* СОБЫТИЙНЫЙ ЦИКЛ  EVENT LOOP это  когда смоттрит свободен ли JS или Работает если Свободен то он выполнить тот код который находится в очереди, если работает то ставит этот код в очеред и будеть ждать пока он освободится, и то как это типо цикл он будеть бесконечно смотреть свободен ли JS или Работает!!!*/

/* ПРОМИС! */
const promise = new Promise((fulfilled, reject) => {
    console.log("Начало кода! состаяние promise: pending");

    setTimeout(() => {
        if (Math.random() > 0.5) {
            fulfilled("Сотаяние Мансика!");
        } else {
            reject("Состаяние Мансур!");
        }
    }, 3000)
})

promise
    .then((successData) => {
        console.log("Успешно!", successData)
    })
    .catch((errorData) => {
        console.log("Провал!", errorData)
    })
    .finally(() => {
        console.log("Код выполнится самом конце! и не смотря на резултат! ")
    })

/* ASYNC/AWAIT!!! */
async function getSomething() {
    return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill("Дать что то Пидаразчвское")
        }, 3000)
    })
}
console.log("Starting!")
const something = await getSomething()
console.log(something)
console.log("Ending!")

/* --------------------------------------------------------------------- */
/* Модули в JavaScript, import и export, декомпозиция кода */

/* Експортирововать Импротирововать и Переименовка прямо во время ИмпоЭкспорта */
/* В Файле 1 */
const suitcaseTwo = "BigTits"
function HelloForManasTwo() {
    console.log("Привет Мансурики!!! Вот тебе подарок! ", suitcaseTwo)
}

export { HelloForManasTwo as HelloForManasTwoBalaBol }

/* В Файле 2 */
const suitcaseOne = "smallAss"
function HelloForManasOne() {
    console.log("Привет Мансику!!! Вот тебе подарок! ", suitcaseOne)
}
HelloForManasOne()
import { HelloForManasTwoBalaBol as HelloForManasTwoBalaBolMa } from "./index.js"
HelloForManasTwoBalaBolMa()

/* ИмпоЭкспорта Всех Сущнестей */
/* В Файле 1 */
export const a = 1
export const b = 2
export const c = 3

export default function LogCat() {
    console.log('🐈')
}

/* В Файле 2 */
import * as constants from './index.js'

console.log(constants.a)
console.log(constants.b)
console.log(constants.c)
constants.default()

/* --------------------------------------------------------------------- */
/* JavaScript в браузере — DOM (Document Object Model) и BOM (Browser Object Model) */

console.dir(window.document) /* -Посмотреть инфо о сайте! */

console.log(window.innerWidth) /* -Ширина окна браузера */
console.log(window.innerHeight) /* -Высота окна браузера */

/* --------------------------------------------------------------------- */
/* DOM в JavaScript — Навигация по элементам дерева, атрибуты async и defer */
console.dir(document)
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

/* --------------------------------------------------------------------- */
/* JavaScript DOM. Поиск элементов: getElement и querySelector */
// Способ 1: Старый добрый ID (передаем просто имя без решеток)
const btn1 = document.getElementById('strike');

// Способ 2: Современный через ID (пишем решетку #, как в CSS!)
const btn2 = document.querySelector('#strike');

// Способ 3: Современный через Класс (пишем точку ., как в CSS!)
const btn3 = document.querySelector('.red-btn');

/* Зачем это нужно дальше? А вот зачем! Как только ты сохранил элемент в переменную (например, в btn1), ты можешь делать с ним всё, что хочешь: */

btn1.textContent = "Задонить"; // Бац! Текст на кнопке изменился прямо на глазах у юзера
btn1.style.backgroundColor = "green"; // Бац! Кнопка перекрасилась в зеленый

/* --------------------------------------------------------------------- */
/* JavaScript DOM-элементы: свойства и атрибуты, поведение value, data-* атрибуты */

const myInput = document.querySelector('#hero-input');
let currentText = myInput.value; // Бац! Переменная поймала то, что написано в поле

<div class="card" data-aura="1000" data-status="alive">Mansik</div>
/* Приставка data- как бы говорит браузеру: «Не трогай это, это мои личные геймерские настройки, они нужны для JavaScript!» */

/* Как JavaScript читает этот скрытый карман:? */
/* В JS для этого есть мега-крутое и красивое свойство — .dataset (набор данных). JS автоматически убирает слово data-, а твое название превращает в удобное свойство: */
const character = document.querySelector('.card');

// Читаем данные из кармана!
console.log(character.dataset.aura);   // Выведет: "1000"
console.log(character.dataset.status); // Выведет: "alive"

// Мы можем даже изменить их прямо в игре!
character.dataset.status = "dead"; // Теперь в HTML статус сам поменяется на data-status="dead"

/*
(getAttribute)-Это получить значение атрибута,
(setAttribute)-а это установить значение атрибута!!!!
(removeAttribute)-удалить значение атрибута!
(hasAttribute)-проверить наличие атрибута есть ли оно? вернёт true или false!*/

/* --------------------------------------------------------------------- */
/* DOM JavaScript: стили и CSS-классы. Свойства style и classList. Управление CSS-переменными в JS. */

/*
classList.add('имя_класса') — надеть костюм (добавить класс).

classList.remove('имя_класса') — снять костюм (удалить класс).

classList.toggle('имя_класса') — кнопка-переключатель. Если класса нет — она его наденет. Если класс уже есть — она его снимет. (Идеально для всплывающих окон и меню!).

classList.contains('имя_класса') — сканер. Проверяет, надет ли сейчас этот класс на элемент (возвращает true или false). */

const BoxElementary = document.querySelector('.pipi');
console.log(BoxElementary.style);

BoxElementary.style.position = 'absolute'
BoxElementary.style.top = '40px'
BoxElementary.style.left = '80px'

BoxElementary.style.width = '200px'
BoxElementary.style.borderWidth = '10px'
BoxElementary.style.borderStyle = 'red'

BoxElementary.style.cssText +=
    `background-color: #000;
color: #fff;
font-size: 20px;
text-align: center;
padding: 10px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
border-color: #38e000;`

console.log("Вычисленные значения стилей boxElement: ",
    getComputedStyle(BoxElementary).width) // Посмотреть на актуалные ксс штучкий активные!
/* .matches - Может Принемат 2 класса через запятую! */
/* --------------------------------------------------------------------- */
/* Браузерный JavaScript: размеры и координаты DOM-элементов */

/* offsetWidth / offsetHeight:	Контент + Padding + Рамка + Скроллбар	«Внешний размер». Это полный физический размер блока на экране. Столько места он занимает в реальности.

clientWidth / clientHeight:	Контент + Padding (без рамки и без скроллбара)	«Внутренний размер». Это чисто то пространство внутри блока, где может находиться текст или картинка.

scrollWidth / scrollHeight:	Полный размер контента, включая скрытый за скроллом	«Размер на вырост». Если внутри блока очень много текста и появился скролл, это свойство покажет реальную высоту текста, даже ту часть, которая сейчас спрятана. */

/* Если ты спросишь у любого практикующего разработчика: «Как мне быстро узнать размеры и координаты элемента?», он не будет перебирать все свойства выше. Он назовет тебе одно золотое заклинание:

element.getBoundingClientRect()

Давай переведем это страшное название:

Get — Получить.

Bounding — Ограничивающий / Очерчивающий границы.

Client — Окно браузера.

Rect (Rectangle) — Прямоугольник.

Человеческий перевод: «Дай мне виртуальную рамку этого элемента относительно экрана». */

const box = document.querySelector('.pipi');
const coords = box.getBoundingClientRect();

console.log(coords.top);  // Узнали, сколько пикселей от верха экрана до нашей карточки
console.log(coords.left);

/* --------------------------------------------------------------------- */
/* JS в браузере: размеры окна и страницы, скролл scrollIntoView, scrollTo, scroll, scrollBy */

/* window.innerWidth (Inner — внутренний, Width — ширина).

window.innerHeight (Inner — внутренний, Height — высота).

Человеческий перевод: «Размер стекла твоего экрана». Это точная ширина и высота той зоны, в которую пользователь сейчас видит сайт. Если свернуть браузер в маленькое окошко, эти цифры мгновенно уменьшатся. */

/* document.documentElement.scrollHeight (Scroll — прокрутка, Height — высота).

Человеческий перевод: «Полная длина всего свитка сайта». Даже если сайт тянется вниз на 5 экранов вперед, это свойство покажет его полную высоту от самого первого заголовка до самого подвала. */

/* window.scrollY (Скролл по оси Y).

Человеческий перевод: «Сколько пикселей сайта уже улетело наверх». Если ты только открыл сайт, scrollY равен 0. Крутанул колесико вниз — цифра начала расти. */

/* window.scrollTo() и window.scroll() — Телепорт в точные координаты
Scroll — крутить.

To — К / В (указывает на конкретную точку).

Человеческий перевод: «Телепортируй камеру строго в эти координаты на карте». */

// Самый частый чит-код во фронтенде: кнопка "Наверх"
// Телепортируем камеру в самый верх страницы (координаты X=0, Y=0)
window.scrollTo(0, 0);

// Продвинутый вариант с красивой плавной анимацией:
window.scrollTo({
    top: 0,
    behavior: 'smooth' // Behavior = поведение, Smooth = плавное. Камера поедет плавно, а не прыгнет мгновенно!
});

/* window.scrollBy() — Шаг от текущего места
Scroll — крутить.

By — НА (указывает на промежуток, смещение).

Человеческий перевод: «Крутани колесико НА столько-то пикселей вниз или вверх от того места, где мы стоим прямо сейчас». */

// Находим, например, секцию с контактами в самом низу сайта
const contactSection = document.querySelector('#contacts');

// Говорим ей притянуть камеру к себе
contactSection.scrollIntoView({
    behavior: 'smooth', // Делаем это плавно
    block: 'start'      // Устанавливаем элемент ровно к верхнему краю экрана
});

/* --------------------------------------------------------------------- */
/* JavaScript DOM манипуляции: создание элементов, вставка, перемещение, удаление и клонирование */

/* 1. Создание элементов — Спавн из небытия
Чтобы создать новый тег, мы используем команду document.createElement('имя_тега'). */

/* JavaScript */
// Спавним новую кнопку в памяти компьютера
const myBtn = document.createElement('button');

// Пока она сидит в памяти, мы можем прокачать её статы:
myBtn.textContent = "Нажми меня!";
myBtn.classList.add('green-btn');
/* ⚠️ Важный момент: В этот миг кнопка уже существует в голове у JavaScript, но на экране её ещё нет. Она лежит у тебя в виртуальном инвентаре. Чтобы игрок её увидел, её нужно поставить на карту (вставить в HTML). */


/* 2. Вставка элементов — Ставим блок на карту
Чтобы элемент появился на сайте, нужно выбрать «родителя» (куда мы его воткнем) и вызвать команду вставки. */

/* parent.append(elem) — закидывает элемент внутрь и в самый конец родителя.

parent.prepend(elem) — закидывает элемент внутрь и в самое начало.

elem.before(otherElem) — ставит элемент ПЕРЕД другим блоком.

elem.after(otherElem) — ставит элемент ПОСЛЕ другого блока. */

JavaScript
const interface = document.querySelector('.menu');
// Достаем кнопку из инвентаря и вставляем в конец нашего меню!
interface.append(myBtn); // БАЦ! Кнопка появилась на экране!

/* 3. Перемещение — Физика Джаваскрипта
Тут работает очень крутое правило. Один и тот же элемент не может быть в двух местах одновременно.
Если элемент уже стоит на странице, и ты делаешь ему append() в другое место, JS не скопирует его. Он его вырежет со старого места и вставит в новое.
 */
JavaScript
const inventory = document.querySelector('.inv');
const chest = document.querySelector('.box');
const sword = document.querySelector('#iron-sword');

// Меч лежал в инвентаре, но мы аппендим его в сундук.
// Он сам исчезнет из инвентаря и переместится в сундук!
chest.append(sword);


/* 4. Удаление элементов — Полная дезинтеграция
Здесь всё максимально просто. Наводишь прицел на блок и вызываешь команду .remove(). Это аналог консольной команды /kill. Блок полностью стирается из DOM-дерева и исчезает с экрана.
*/
/* JavaScript */
const badGhost = document.querySelector('.zombie');
badGhost.remove(); // Прощай, зомби!


/* 5. Клонирование — Команда Ctrl+C / Ctrl+V
Иногда тебе нужно создать 100 одинаковых врагов или карточек. Писать для каждого createElement — с ума сойти можно. Проще взять один готовый шаблон и скопировать его через .cloneNode().

В скобках этой команды почти всегда нужно писать true (это значит «глубокое клонирование»). Если написать true, JS скопирует не просто пустую оболочку тега, а вообще всё, что у него было внутри (текст, картинки, другие теги). */

/* JavaScript */
const originalCard = document.querySelector('.monster-card');

// Делаем точную копию карточки со всеми потрохами
const duplicateCard = originalCard.cloneNode(true);

// Вставляем копию на экран
document.body.append(duplicateCard);



/* Это первый вариант! */
const txtPipi = document.querySelector('.pipi');
const conso = console.log(txtPipi.textContent = `
    New TXT!
    <p>Popka Piska</p>`)

/* А это второй! */
const txtPipi = document.querySelector('.pipi');
const conso = console.log(txtPipi.innerHTML += `
    New TXT!
    <p>Popka Piska</p>`)


/* --------------------------------------------------------------------- */
/* JS Браузерные события: всплытие и погружение, способы обработки событий, отмена всплытия */

/* Раюота с onClick! В хтмл! */
const clickerLog = () => {
    console.log('Clicked');
}

/* сработает Двойная функция принажатий на кнопку! */
buttonElement.addEventListener('click', () => {
    console.log(1)
})
buttonElement.addEventListener('click', () => {
    console.log(2)
})


/* --------------------------------------------------------------------- */
/* События JavaScript: делегирование, поведение браузера по умолчанию, генерация собственных событий */

/* ----------- */
const menu = document.querySelector('#menu');
menu.addEventListener('click', (event) => {
    // event.target — это ТОТ, НА КОГО ИМЕННО КЛИКНУЛИ (наш "столик")
    if (event.target.tagName === 'BUTTON') {
        console.log('Кликнули по кнопке:', event.target.innerText);
    }
});
/*
Экономит память: Вместо 1000 слушателей клика у нас всего один.
Работает с новыми элементами: Если ты через секунду добавишь на страницу новую 101-ю кнопку через JS, делегирование автоматически сработает и на нее! Тебе не надо вешать на новую кнопку слушатель заново. */

/* ------------ */
// Находим родительский контейнер
const group = document.getElementById('btnGroup');

// Вешаем ВСЕГО ОДИН слушатель клика на весь контейнер
group.addEventListener('click', (event) => {

    // 1. event.target — это конкретный элемент, по которому кликнули
    const clickedElement = event.target;

    // 2. Проверяем, действительно ли кликнули по кнопке (а не по пустому месту в контейнере)
    if (clickedElement.tagName === 'BUTTON') {

        // Теперь мы можем узнать любую информацию об этой кнопке:
        console.log("Кликнули по элементу:", clickedElement);
        console.log("Текст кнопки:", clickedElement.textContent); // Напр: "Сохранить"
        console.log("ID кнопки:", clickedElement.id);             // Напр: "btn-save"

        // Пример действия в зависимости от кнопки:
        if (clickedElement.id === 'btn-save') {
            console.log("Сохраняем данные...");
        } else if (clickedElement.id === 'btn-delete') {
            console.log("Удаляем данные...");
        }
    }
});
/* ----------- */
const myForm = document.querySelector('#loginForm');
myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // СТОП! Не перезагружай страницу!
    // Теперь мы спокойно отправляем данные через JS в фоновом режиме
    console.log('Данные отправлены без перезагрузки страницы!');
});
/*
Без event.preventDefault() ты бы не смог сделать ни один современный удобный сайт или плавную форму, потому что браузер постоянно перезагружал бы страницу при любом чихе! */

/* ----------- */
/* Создаем свое событие: */
const myEvent = new CustomEvent('userLoggedIn', {
    detail: { username: 'Мансур' } // передаем любые нужные данные
});
/* Вешаем слушателя (кто-то ждет этот сигнал): */
document.addEventListener('userLoggedIn', (event) => {
    console.log('Ура! Вошел пользователь:', event.detail.username);
});
/* Запускаем сигнал в эфир (когда произошло нужное действие): */
document.dispatchEvent(myEvent); // dispatchEvent = "отправить/выстрелить событием"
/*
Это нужно для архитектуры кода. Разные части твоей программы могут общаться друг с другом через эти сигналы, вообще не зная о существовании друг друга. Одна часть кричит в рацию: «Эй, товар добавлен в корзину!», а другие части сайта (иконка корзины, счетчик скидок, всплывашка) ловят этот сигнал и обновляются. */

/* ----------- */

/* --------------------------------------------------------------------- */
/* JavaScript события мыши и указателя, Drag and Drop компонент */

/*
mousemove-ты сдвинул мышку хотя бы на 1 пиксель.
mouseover-Когда четко навел мыкой на предмет прям в него!
mouseout -когда отвел мышку от него
-----------------------------------
mouseenter-когда ты внутри его дочерного элемента то тож считается!
mouseleave-когда ты свел мышку на снаружий!*/
/* -------------------------------- */
/*
mousedown-когда нажимаеш на кнопку прям! и удерживоваеш!
mouseup-когда после нажатий отпускаеш!
click-а это два в одном! прям клик!
contextmenu-когда нажимаеш на левую мышку открывается окошочка!*/
/* -------------------------------- */
/* События указателя:-это найболее современные! и типо аналоги этих штучек!
Инженеры объединили мышку, палец и стилус в одно универсальное слово — Pointer.
* pointermove
* pointerdown
* pointerup
* pointerover
* pointerout
* pointerenter
* pointerleave
* pointercancel
* gotpointercapture
* lostpointercapture */
/* ----------------------------- */
/* Drag and Drop своими руками? (Логика в 3 шага)
1. pointerdown         2. pointermove         3. pointerup
[Захватили элемент] -> [Двигаем за курсором] -> [Отпустили]*/

/* pointerdown на элементе: Пользователь нажал на карточку. Мы запоминаем: «Так, началось перетаскивание! Включаем слежку».

pointermove на всей странице: Пользователь двигает курсор. Мы считываем координаты X и Y курсора и мгновенно меняем координаты нашей карточки через CSS (style.left и style.top), чтобы она «лепилась» к курсору.

pointerup на странице: Пользователь отпустил кнопку/палец. Мы выключаем слежку. Элемент остается на новом месте! */

/* --------------------------------------------------------------------- */
/* JavaScript события клавиатуры: keydown и keyup. События ввода: input, change, cut, copy, paste */

/*
* -Событие клавы
* -keydown -нажатие на клаву
* -keyup -отпускание клавы
*/

/* ------------------------- */
document.addEventListener('keydown', (event) => {
    console.log("keydown Event:", event)
}) /* -Узнать на какую клавишу нажали */

document.addEventListener('keyup', (event) => {
    console.log("keyup Event:", event)
}) /* Узнать когда он отпустить! */

/* (event.key) -Узнать какую иммено клаву жмякнули! */
/* (event.code) -Узнать какую иммено клаву жмякнули! Несмотря на раскладку клавы! */
/* (event.keyCode) -Узнать на какую клаву нажали при помощи номерной ключи! */

/* -------------------------- */
document.addEventListener('keydown', (event) => {
    const { code, metakey } = event
    if (code === 'Tab') {
        event.preventDefault()
        console.log('it"s canel')
    }
}) /* -Отминит нажатие на эту клаву! */

/* -------------------------- */
/* Событие 'change' -Срабатвовает только тогда когда ползователь потерял или убрал фокус! от элемента! */

/* -------------------------- */
document.addEventListener('cut', (event) => {
    console.log("Event CUT:", event)
}) /* -Событие вырезать */
document.addEventListener('copy', (event) => {
    console.log("Event COPY:", event)
}) /* -Событие копирововать */
document.addEventListener('paste', (event) => {
    console.log("Event PASTE:", event)
}) /* -Событие Поставить! */

/* --------------------------------------------------------------------- */
/* JavaScript события фокуса: focus и blur, focusin и focusout | Методы focus и blur | activeElement */
let TheInputOne = document.querySelector('#TheInputOne')
let TheInputTwo = document.querySelector('#TheInputTwo')
let TheBTn = document.querySelector('#TheBTn')

TheInputOne.addEventListener('focus', (event) => {
    console.log("В Фокусе первый Инпут!", event)
}) /* -Сработает Когда Тот Элемент в Фокусе */
TheInputTwo.addEventListener('blur', () => {
    console.log(" Второй Инпут сбежал из фокуса!!")
})/* -Сработает когда мы уводим с него фокус! */
TheBTn.addEventListener('focus', () => {
    console.log("В Фокусе Кнопка!!")
})

TheInputOne.focus() /* -сразу вешаем фокус! */

setTimeout(() => {
    TheInputOne.blur() /* -через некоторые время убираем фокус! */
}, 2000)

/* --------------------------------------------------------------------- */
/* Формы в JS — доступ к элементам форм, чтение и изменение значений полей ввода, атрибут form */
console.log('All form in document <form>:', document.forms) /* -Узнать Сколько в странице Форм! */

console.log('One form in document <form>:', document.forms.OneForm) /* -Узнать о Форме! по айди */

console.log('Two form in document <form>:', document.forms[1]) /* -Узнать о Форме! по индексу! */

console.log('Three form in document <form>:', document.forms[2].elements) /* -Узнать о Элементах Формы! */

console.log('Two form in document <form>:', document.forms[1].elements.abboutShe) /* -Узнать о конкретном Элементе Формы! через атрибута name! */

console.log('Two form in document <form>:', document.forms[1].elements.abboutShe.value = `She sexy! and Big tits! and She want to Me!`) /* -сразу же устоновить ему значение через value! */

console.log('Three form in document <form>:', document.forms[2].elements.gender.value) /* -Проверем что чекнутый! */

console.log('Three form in document <form>:', document.forms[2].elements.gender[0].checked) /* -Проверем что чекнутый! Но с труе и фальсе! */

let TheChecked = document.forms[2].elements.gender[0].checked = true /* -Через JS заставляем авто выбрать другую радио! */


const theForms = document.forms[2].elements.CheckBox.checked = false
console.log(theForms) /* С чекбоксом точно так же! */

const theFormsSelected = document.forms[2].elements.yourWants.value
console.log(theFormsSelected) /* Узнаем какое значение выбрано! */

const AllTheForms = document.forms[2].elements.yourWants.options
console.log(AllTheForms) /* Узнаем все значение! */

const theFormsSelectedIndex = document.forms[2].elements.yourWants.selectedIndex
console.log(theFormsSelectedIndex) /* Узнаем индекс выбраного значение!! */

const FormSelected = document.forms[2].elements.yourWants.options[2].selected = true
console.log(theFormsSelectedIndex) /* Через програмнно заставляем выбрать по умолчянию другой значение!! */


/* --------------------------------------------------------------------- */
/* JavaScript формы — FormData, класс для сбора данных со всех полей формы */
const gameForm = document.getElementById('gameForm');

gameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(gameForm);

    const nickname = formData.get('nickname') /* -узнал ник! */
    console.log(nickname)

    const allData = Object.fromEntries(formData);
    console.log('Все данные:', allData); /* -превратил все данные на обект! */
}) /* -чтобы узнать что в элементах и все такое! */
/* --------------------------------- */
const formElement = document.querySelector('form');

formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(formElement)
    console.log(Object.fromEntries(formData))
    /* -Получаем все данные от форма! */
})
/* --------------------------------------------------------------------- */
/* JavaScript валидация форм — validity свойство у полей формы. Классовый компонент валидации форм */
/*  Из чего состоит validity?
Это объект с флагами типа true (правда) / false (ложь). Он ответит тебе на любой вопрос:

validity.valueMissing — поле пустое, хотя стоит атрибут required? (Да/Нет)
validity.typeMismatch — ввели не email в поле type="email"? (Да/Нет)
validity.tooShort — текст короче, чем указано в minlength? (Да/Нет)
validity.valid — Главная кнопка! Если абсолютно ВСЕ правила соблюдены — тут будет true. Если есть хотя бы одна ошибка — false. */

/* -------------------------------- */
/* Пример! */
const inputEmail = document.querySelector('#email');

if (inputEmail.validity.typeMismatch) {
    console.log('Эй, это не похоже на настоящий email!');
}

if (inputEmail.validity.valid) {
    console.log('Всё супер, данные идеальны!');
}

/* --------------------------------- */
class FormsValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]'
    }

    errorMessages = {
        valueMissing: () => 'Пожалуйста, заполните это поле',
        patternMismatch: ({ title }) => title || 'Данные не соответствуют формату',
        tooShort: ({ minLength }) => `Слишком короткое значение, минимум символов — ${minLength}`,
        tooLong: ({ maxLength }) => `Слишком длинное значение, ограничение символов — ${maxLength}`,
    }

    constructor() {
        this.bindEvents()
    }

    manageErrors(fieldControlElement, errorMessages) {
        const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)

        fieldErrorsElement.innerHTML = errorMessages
            .map((message) => `<span class="field__error">${message}</span>`)
            .join('')
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity
        const errorMessages = []

        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldControlElement))
            }
        })


        this.manageErrors(fieldControlElement, errorMessages)

        const isValid = errorMessages.length === 0

        fieldControlElement.ariaInvalid = !isValid

        return isValid
    }

    onBlur(event) {
        const { target } = event
        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if (isFormField && isRequired) {
            this.validateField(target)
        }
    }

    onChange(event) {
        const { target } = event
        const isRequired = target.required
        const isToggleType = ['radio', 'checkbox'].includes(target.type)

        if (isToggleType && isRequired) {
            this.validateField(target)
        }
    }

    onSubmit(event) {
        const isFormElement = event.target.matches(this.selectors.form)
        if (!isFormElement) {
            return
        }

        const requiredControlElements = [...event.target.elements].filter(({ required }) => required)
        let isFormValid = true
        let firstInvalidFieldControl = null

        requiredControlElements.forEach((element) => {
            const isFieldValid = this.validateField(element)

            if (!isFieldValid) {
                isFormValid = false

                if (!firstInvalidFieldControl) {
                    firstInvalidFieldControl = element
                }
            }
        })

        if (!isFormValid) {
            event.preventDefault()
            firstInvalidFieldControl.focus()
        }
    }

    bindEvents() {
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, { capture: true })
        document.addEventListener('change', (event) => this.onChange(event))
        document.addEventListener('submit', (event) => this.onSubmit(event))
    }
}

new FormsValidation()
/* --------------------------------- */

/* --------------------------------------------------------------------- */
/* JavaScript запросы fetch — клиент-серверное взаимодействие на практике */
/* --------------------------------- */
const loadTodoFormElement = document.querySelector('.load-todo-form')
const todoIdInputElement = document.querySelector('#todo-id')
const resultElement = document.querySelector('.result')

loadTodoFormElement.addEventListener('submit', (event) => {
    event.preventDefault()

    fetch(`https://jsonplaceholder.typicode.com/todos/${todoIdInputElement.value}`)
        .then((response) => {
            console.log('response:', response)

            if (!response.ok) {
                const errorMessage = response.status === 404
                    ? 'Задача по указанному идентификатору не найдена'
                    : 'Что-то пошло не так :('

                throw new Error(errorMessage)
            }

            return response.json()
        })
        .then((json) => {
            console.log(json)

            const { id, title, completed } = json

            resultElement.innerHTML = `
        <input
          id="todo-${id}"
          type="checkbox"
          ${completed ? 'checked' : ''}
        />
        <label for="todo-${id}">${title}</label>
      `
        })
        .catch((error) => {
            resultElement.innerHTML = error.message
        })
})

/* --------------------------------- */

/*
fetch()	Наш «официант», который бегает на сервер за данными.	Связывать сайт с сервером без перезагрузки страницы.
async / await	Команда «Подожди, пока данные долетят по сети».	Чтобы JS не выполнял код дальше, пока данные еще не пришли.
JSON	Универсальный «язык посылок» между любым сервером и браузером.	Формат передачи данных.
GET / POST	«Дай данные» / «Забери и сохрани мои данные».	Типы взаимодействия с сервером. */

/* --------------------------------------------------------------------- */
/* Браузерные хранилища данных: localStorage, sessionStorage, cookie, IndexedDB. Смена темы на сайте */

/* ----------------------------- */
document.cookie = 'username=Mansur'
document.cookie = 'age=28'
document.cookie = 'age=55' /* -Перезаписовается! */

const setCookie = (name, value, options = {}) => {
    let newEntryBody = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

    const optionsAsSrting = Object.entries(options).map((entry) => entry.join('=')).join('; ')

    if(optionsAsString) {
        newEntryBody += `; ${optionsAsSrting}`
    }

    document.cookie = newEntryBody
} /* -Устоновить куки */

const deleteCookie = (name) => {
    setCookie(name, '', {'max-age': -1})
}

setCookie('date of the birt', 'febyrary 4, 1996')
console.log('Cookie files:', document.cookie)

const getCookie = (name) => {
    for (const entryStr of document.cookie.split('; ')) {
        const [entryName, entryValue] = entryStr.split('=')

        if(decodeURIComponent(entryName) === name) {
            return entryValue
        }
    }
} /* -Взять куки */

deleteCookie('username')
console.log('username:', getCookie('username'))
console.log('date of birth:', getCookie('date of birth'))

/* ----------------------------- */
/* Храниение данных в браузере!:

    Cookie:
    -Данные сохраняется после перезагрузки страницы;
    -Данные привязны к конкретному домену;
    -Могут управлятся сервером;
    -Количество запесей ограничено 20шт;
    -Каждая запись хранить не более 4 кб данных;
    -Для чтение, добавление, изменение и удаление запесей нужны кастомные утилитарные функций.

    SessionStrage и LocalStrage:
    -Данные сохраняется после перезагрузки страницы;
    -Данные привязны к конкретному домену;
    -Не могут управлятся сервером;
    -Количество и обьём запесей ограничен 5 Мб данных;
    -Для чтение, добавление, изменение и удаление запесей есть встроенные методы;

    SessionStrage:
    -Существует в рамках текущей активной вкладкой.

    LocalStrage:
    -Данные не имеют сроки давности
*/

/* ------------------------------- */
sessionStorage.setItem('username', 'Mansur') /* -устоновка значений! */
sessionStorage.setItem('userage', 28)

sessionStorage.setItem(
    'user',
    JSON.stringify({
        name: 'Max',
        age: 100,
        isDeveloper: true,
    })
)   /* -Устоновка значений через JSON! */

console.log('hisName:', sessionStorage.getItem('username'))
console.log('hisAge:', sessionStorage.getItem('userage'))
console.log('allUserInfo:',
    JSON.parse(
    sessionStorage.getItem('user')
    )
    )
/* -а теперь получаем значение! */

console.log(sessionStorage)
console.log(localStorage)

/* --------------------------------- */
sessionStorage.setItem('username', 'Mansur')
sessionStorage.removeItem('username') /* -Удаление элемента */
sessionStorage.clear() /* -Полное очищение sessionStorage */

console.log('hisName:', sessionStorage.getItem('username'))

/* --------------------------------- */
class ThemeSwitcher {
    selectors = {
        switchThemeButton: '[data-js-theme-switcher]',
    }

    themes = {
        dark: 'dark',
        light: 'light',
    }

    stateClasses = {
        isDarkTheme: 'is-dark-theme',
    }

    storageKey = 'theme'

    constructor() {
        this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton)
        this.setInitialTheme()
        this.bindEvents()
    }

    get isDarkThemeCached() {
        return localStorage.getItem(this.storageKey) === this.themes.dark
    }

    setInitialTheme() {
        document.documentElement.classList.toggle(
            this.stateClasses.isDarkTheme,
            this.isDarkThemeCached
        )
    }

    onClick = () => {
        const nextTheme = this.isDarkThemeCached ? this.themes.light : this.themes.dark
        localStorage.setItem(this.storageKey, nextTheme)

        document.documentElement.classList.toggle(
            this.stateClasses.isDarkTheme,
            nextTheme === this.themes.dark
        )
    }

    bindEvents() {
        this.switchThemeButtonElement?.addEventListener('click', this.onClick)
    }
}

new ThemeSwitcher()

/* --------------------------------- */

/* --------------------------------------------------------------------- */
/* JavaScript в браузере: Location и History API, URL страницы и история браузера */
console.log(window.location); /* Выводить всякое инфо о странице! */

setTimeout(() => {
    window.location.assign('./catalog.html') /* -Через 3 секунды нас закинет в немного другое сайт!*/
    window.location.replace('./catalog.html') /* -мы поменемся местами с тем сайтом! с которого зашли! и в историй браузера этого не сохранится! */
    window.location.href = './catalog.html' /* -Точно так же бросает нас в другой сайт! схожи с replace */
}, 3000)

document.addEventListener('click', (event) => {
    if(event.target.href) {
        event.preventDefault()
        window.location.href = event.target.href
    }
})
/* --------------------------------------------- */
console.log(window.history) /* История за всю сессию!(до закрытия вкладки!) */

const backBtn = document.querySelector('.back-btn')
const forwardBtn = document.querySelector('.forward-btn')

backBtn.addEventListener('click', () => {
    window.history.back() /* -Возвращается назад! */
})
forwardBtn.addEventListener('click', () => {
    window.history.forward() /* Возвращается Вперед! */
})

backBtn.addEventListener('click', () => {
    window.history.go(-2) /* -Yазад На 2 шага! */
})
forwardBtn.addEventListener('click', () => {
    window.history.go(3) /* -Вперед на 3 шага! */
})

/* --------------------------------------------------------------------- */
/* Regex in JS!  */
const pattern = /js/; /* -Первый способ! регекса */

const pattern = new RegExp('js'); /* -Через конструктор RegExp (полезно, если шаблон собирается динамически): */

const hasNumbers = /\d/; // \d означает «любая цифра»
console.log(hasNumbers.test("Код 123")); // true
console.log(hasNumbers.test("Просто текст")); // false

const text = "У меня 2 кота и 3 собаки";
const numbers = text.match(/\d/g); // флаг 'g' ищет все совпадения
console.log(numbers); // ["2", "3"]

const secret = "Мой пароль: 12345";
const hidden = secret.replace(/\d/g, "*");
console.log(hidden); // "Мой пароль: *****"

/* 
\d	Любая цифра от 0 до 9
\w	Любая буква, цифра или знак подчеркивания
+	Повторение 1 или более раз (например, \d+ — целое число из нескольких цифр)
^ / $	Начало строки / Конец строки
Флаг g	Искать все совпадения в тексте (global)
Флаг i	Игнорировать регистр букв — заглавные и строчные (ignoreCase) 
*/

/*-------------------------------------------------------------------- */