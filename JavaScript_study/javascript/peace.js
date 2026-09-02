/* --------------------------------------------------------------------- */
/* Калкулятор-(0.10v) */

while (true) {
/* Все нужные Функций */
const mathPluFn = (a, b) => {
    return a + b
}
const mathMinFn = (a, b) => {
    return a - b
}
const mathXFn = (a, b) => {
    return a * b
}
const mathDelFn = (a, b) => {
    return a / b
}

/* Сами задачи */
const hisMathWant = +prompt(`Что вы хотите сделать?
1. Сложение (+)
2. Вычитание (-)
3. Умножение (*)
4. Деление (/)

(Выберите по числу!)`)

if (!hisMathWant) {
    alert("Вы завершили программу!")
    break;
} else if (hisMathWant === 1) {
    const firstNum = +prompt(`Введите первое число`)
    const secondNum = +prompt(`Введите второе число`)
    const result = mathPluFn(firstNum, secondNum)
        if (!result) {
        alert("Похоже вы ввели не то попробуйте снова!")
    } else {
        alert(`Вот ваш резултать: ${result}`)
    }
} else if (hisMathWant === 2) {
    const firstNum = +prompt(`Введите первое число`)
    const secondNum = +prompt(`Введите второе число`)
    const result = mathMinFn(firstNum, secondNum)
        if (!result) {
        alert("Похоже вы ввели не то попробуйте снова!")
    } else {
        alert(`Вот ваш резултать: ${result}`)
    }
} else if (hisMathWant === 3) {
    const firstNum = +prompt(`Введите первое число`)
    const secondNum = +prompt(`Введите второе число`)
    const result = mathXFn(firstNum, secondNum)
        if (!result) {
        alert("Похоже вы ввели не то попробуйте снова!")
    } else {
        alert(`Вот ваш резултать: ${result}`)
    }
} else if (hisMathWant === 4) {
    const firstNum = +prompt(`Введите первое число`)
    const secondNum = +prompt(`Введите второе число`)
    const result = mathDelFn(firstNum, secondNum)
    if (!result) {
        alert("Похоже вы ввели не то попробуйте снова!")
    } else {
        alert(`Вот ваш резултать: ${result}`)
    }
} else {
    alert("Похоже вы ввели не то попробуйте снова!")
    continue;
}

}

/* --------------------------------------------------------------------- */
/* Инфо о Легендарном Скваде 1.0v */
/* Практика методов! массивов */

/* Немного вспоминаем! */
const nums = [0, 1, 6, 2, 3, 4, 5];

/* forEach — "сделай что-то с каждым элементом". Просто выполняет действие, ничего не возвращает. */
nums.forEach(num => {console.log(num * 2)});

/* map — "создай новую коробку, изменив каждый элемент". Длина та же. */
const double = nums.map(num => num * 2);
console.log(double);

/* filter—"отбери только те, которые подходят". Длина может уменьшиться. */
const bignums = nums.filter(num => num > 2);
console.log(bignums);

/* reduce — "сверни коробку в одно значение". Например, сумму. */
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);

/* some — "есть ли хотя бы один, который...". Возвращает true/false. */
const hasBig = nums.some(num => num > 4);
console.log(hasBig);

/* every — "все ли подходят?". Тоже true/false. */
const allBig = nums.every(num => num > 0);
console.log(allBig);

/* sort — "отсортируй". Внимание: меняет исходный массив и сортирует как строки по умолчанию. */
const sorted = nums.sort((a, b) => a - b);
console.log(sorted);

/* includes — "есть ли такой элемент?". */
const hasSix = nums.includes(6);
console.log(hasSix);

/* indexOf — "на каком месте?". */
const sixIndex = nums.indexOf(6);
console.log(sixIndex);

/* Теперь ПРАКТИКУЕМ!!! */
const legendarySquad = [
    { name: "Mansik", age: 1, auraLevel: 1000 },
    { name: "Mansur", age: 19, auraLevel: 250 },
    { name: "Valergh", age: 20, auraLevel: 200 },
    { name: "kaepra", age: 30, auraLevel: 300 },
    { name: "Dak", age: 13, auraLevel: 500 },
    { name: "Darina", age: 100, auraLevel: 1000 },
    { name: "Masha", age: 50, auraLevel: 400},
    { name: "Maria", age: 17, auraLevel: 90}
];

/* Показать всех Легенд! */
legendarySquad.forEach(memember => {console.log(`(Her names: "${memember.name}" and Her ages: "${memember.age}" and Her auras level: "${memember.auraLevel}")`)});

/* Добавить еще немного ауры! */
const doubleAura = legendarySquad.map(aura => aura.auraLevel + 5);
console.log(doubleAura)

/* Отфильтровать Мощных */
const bigAuras = legendarySquad.filter(Kings => Kings.auraLevel >= 300);
console.log(bigAuras);

/* Все ауры в этой скваде! */
const allAuras = legendarySquad.reduce((all, auras) => all + auras.auraLevel, 0);
console.log(`Вся Аура легендарного Сквада: ${allAuras}`);

/* Проверить, есть ли Мелкий Легенда в Скваде */
const hasSmall = legendarySquad.some(sml => sml.age < 18);
console.log(hasSmall);

/* Проверить, Все ли Легенды совершеннолетние (18+)? */
const allBigL = legendarySquad.every(bigs => bigs.age >= 18);
console.log(allBigL);

/* Отсортировать Всех Легенд по Ауре (от Слабенкого к Мощнейшму) */
const sortedLegend = legendarySquad.sort((smale, bigler) => smale.auraLevel - bigler.auraLevel);
console.log(sortedLegend);

/* Ищем челико по имени Мансик! */
console.log(
    legendarySquad.find((theLegend) => theLegend.name === "Mansik")
)

/* ---------------------------------------------------------------------- */
/* Описание Легендарный отряд - классы в действии 0.01v(beta) */
class Legendary {
    hisSquad = "Legendary Squad";

    constructor(name, age, auraLevel) {
        this.name = name;
        this.age = age;
        this.auraLevel = auraLevel;
        this._health = 100;
    }

    /* Проверяем его возрость */
    isAdlut(age) {
        if(this.age >= 18) {
            return `Этот ${this.name} просто Старешый легенда!`
        } else {
            return `Этот ${this.name} просто Мелкий Легенда!`
        }
    }

    /* Добавляем немного ауры */
    boostAura(amount) {
    this.auraLevel = Math.min(this.auraLevel + amount, 1000);
    return this.auraLevel;
    }

    /* Наносим ему наказателный урон */
    takeDamage(damage) {
    const before = this._health;
    this._health = Math.max(this._health - damage, 0);
    return before - this._health; // фактически нанесённый урон
}

        /* Проверяем жив ли он  */
        isAlive(health) {
        if(this._health == 0) {
            return `Этот ${this.name} умер😔`
        } else {
            return `Этот ${this.name} ЖИВ!!`
        }
    }

    /* Выводим про него всю инфу! */
    get fullStatus() {
        return `Имя Легенды: ${this.name},
        Его возрость: ${this.age},
        Его Аура: ${this.auraLevel},
        Его здоровя: ${this._health}. `
    }
}

/* Консолные ТЕСТЫ! */
const LegendaryMemoryOne = new Legendary("Mansik", 1, 900)
console.log(LegendaryMemoryOne)
console.log(LegendaryMemoryOne.isAdlut())
console.log(`Прибавился Аура:  "${LegendaryMemoryOne.boostAura(50)}"`)
console.log(`Нанесен Урон: "${LegendaryMemoryOne.takeDamage(100)}"`)
console.log(LegendaryMemoryOne.fullStatus)
console.log(LegendaryMemoryOne.isAlive())

/* Легендарный сквад! */
const legendarySquad = [
    new Legendary("Mansik", 1, 1000 ),
    new Legendary("Mansur", 19,  250 ),
    new Legendary("Valergh", 20,  200 ),
    new Legendary("kaepra", 30,  300 ),
    new Legendary("Dak", 13,  500 ),
    new Legendary("Darina", 100,  1000 ),
    new Legendary("Masha", 50,  400),
    new Legendary("Maria", 17, 90)
];

/* Выводим их статус */
legendarySquad.forEach(static => {console.log(`
    Его Имя: "${static.name}",
    Его Возрость: "${static.age}",
    Его АУРА: ${static.auraLevel}`)
})

/* Атакующий Функция! */
const attack = (attacker, defender) => {
    const damage = Math.max(0, Math.min(attacker.auraLevel - defender.auraLevel, 100));
    const dealtDamage = defender.takeDamage(damage);

    if (defender._health <= 0) {
        return `Легенда "${defender.name}" был побежден!`;
    }

    return `Атакующий: "${attacker.name}" наносит урон "${dealtDamage}" Легенде: "${defender.name}"`;
};

console.log(attack(legendarySquad[0], legendarySquad[1]));

/* Сражение Легенд! */
/* !!!БЕСКОНЕЧНЫЙ ЦИКЛ!!! НЕ ВКЛЮЧАТЬ!!! */
while (legendarySquad[0]._health > 0 || legendarySquad[1]._health > 0) {
    const result = attack(legendarySquad[0], legendarySquad[1]);
    const resultTwo = attack(legendarySquad[1], legendarySquad[0]);
    console.log(result);
    console.log(resultTwo);
}

/* ---------------------------------------------------------------------- */
/* ZSquad 1.0v*/
class ZSquad {
    constructor(name, age, power) {
        this.name = name;
        this.age = age;
        this.power = power;
    }

    toFind(name) {
        return this.name.toLowerCase() === name.toLowerCase();
    }

    get allInfo() {
        return `Его зовут "${this.name}",
        ему "${this.age}" лет,
        его сила "${this.power}"`;
    }
}

/* Все герой */
const ZSquadMemories = [
    new ZSquad("Manzura", 30, "100"),
    new ZSquad("Mansur", 17, "20"),
    new ZSquad("Emin", 18, "40"),
    new ZSquad("Samat", 17, "45"),
]

/* Тот Цикл! */
while(true) {
    const hisPrompt = +prompt(`
1. Добавить героя
2. Удалить героя
3. Найти героя
4. Показать всех героев
5. Количество героев
6. Выход

ВЫБЕРИТЕ ПО НОМЕРУ!`)

console.log(hisPrompt)
if (hisPrompt === 0) {
    alert("Вы не ввели число!");
    continue;
} else if(!hisPrompt) {
    alert("Вы вышли из программы!");
    break;
} else if(hisPrompt === 6) {
    alert("Вы вышли из программы!");
    break;
} else if(hisPrompt === 5) {
    alert(`Есть всего: ${ZSquadMemories.length} героев!`)
} else if(hisPrompt === 4) {
    const ZEye =  ZSquadMemories.forEach((memory) => {alert(memory.allInfo)});
} else if(hisPrompt === 3) {
    const promtFind = prompt("Введите имя героя, которого вы хотите найти?");
    const hero = ZSquadMemories.find((memory) => memory.toFind(promtFind));

    if (hero) {
        alert(hero.allInfo);
    } else {
        alert(`Герой "${promtFind}" не найден`);
    }
} else if(hisPrompt === 2) {
    const promtDelete = prompt("Введите имя героя, которого вы хотите удалить?");
    const heroIndex = ZSquadMemories.findIndex((memory) => memory.toFind(promtDelete));

    if (heroIndex !== -1) {
        ZSquadMemories.splice(heroIndex, 1);
        alert(`Герой "${promtDelete}" удален`);
    } else {
        alert(`Герой "${promtDelete}" не найден`);
    }
} else if(hisPrompt === 1) {
    const promtName = prompt("Введите имя героя:");
    const promtAge = +prompt("Введите возраст героя:");
    const promtPower = +prompt("Введите силу героя:");

    if (promtName && !isNaN(promtAge) && !isNaN(promtPower)) {
        ZSquadMemories.push(new ZSquad(promtName, promtAge, promtPower));
        alert(`Герой "${promtName}" добавлен`);
    } else {
        alert("Некорректные данные!");
    }
}
}

/* ---------------------------------------------------------------------- */
/* coffeino aseino 0.5v */
const hisTry = prompt(`Введите называние коффе который вы хотите?
    1. Капучино — 200 рублей,
    2. Латте — 250 рублей,
    3. Эспрессо — 150 рублей,`);

function forHisTry(RUB) {
    const promo = prompt("Введите промокод на скидку если оно у вас есть!")
    if(promo === "BOOST") {
        const promoHas = RUB *= 0.8
        alert(`Поздравляю!!! промокод активирвован! с вас теперь ${RUB}`)
    } else{
        alert("Такого промокода нет!!!")
    }
}

    if(hisTry === "Капучино") {
        alert("Отлично! с вас 200 руб")
        forHisTry(200)
    } else if(hisTry === "Латте") {
        alert("Отлично! с вас 250 руб")
        forHisTry(250)
    } else if(hisTry === "Эспрессо") {
        alert("Отлично! с вас 150 руб")
        forHisTry(150)
    } else {
        alert("Извентие вы неправилно ввели имя коффе или ввели несуеществуещего! либо вообще завершили программу!")
    }

/* ---------------------------------------------------------------------- */
/* internet bank 0.20v */
let hisBalance = 1000


function findError(operation) {
    if(typeof operation !== "number" || Number.isNaN(operation)) {
        alert("Вы должны ввести цифру а не чипуху!")
        return false
    } else if(operation < 0 || operation > 100000) {
        alert("Такие цифры недопустимы!")
        return false
    }
    return true
}

while (true) {
    const inputForHim = +prompt(`Какую операцую вы хотите совершить?
        1 — Проверить баланс
        2 — Пополнить счёт
        3 — Снять деньги

        Выберите операцую строго по номеру!`)

    if(inputForHim === 1) {
        alert(`Вот ваш Баланс: ${hisBalance}`)
    } else if (inputForHim === 2) {
        const hisGetMoney = +prompt("Введите сумму денег который хотите вложить:")
        if (!findError(hisGetMoney)) {
            continue
        }
        hisBalance += hisGetMoney
        alert(`Вот ваш Баланс ${hisBalance}`)
    } else if (inputForHim === 3) {
        const hisMinusMoney = +prompt("Введите сумму денег который хотите забрать:")
        if (!findError(hisMinusMoney)) {
            continue
        }
        hisBalance -= hisMinusMoney
        alert(`Вот ваш Баланс ${hisBalance}`)
    } else {
        alert("Кажется ошибка или вы завершили программу!")
        break;
    }
}

/* ---------------------------------------------------------------------- */
/* PL VS BOT 0.15v */
let playerScore = 0;
let botScore = 0;

for (let rounde = 0; rounde <= 3; rounde++) {
    const playerSelection = confirm(`Бросать кубик?
        Раунд: ${rounde}!
        ----------------
        Игрок: ${playerScore}
        Бот: ${botScore}`)
    if(playerSelection) {
        let randomNumberForPlayer = Math.floor(Math.random() * 10)
        let randomNumberForBot = Math.floor(Math.random() * 10)
        alert(`
            Игроку выпало: ${randomNumberForPlayer}
            Боту Выпало: ${randomNumberForBot}`)
            if(randomNumberForPlayer > randomNumberForBot) {
                alert(`Игрок Побеждает! +1 очко игроку!`)
                playerScore++
            } else if(randomNumberForPlayer < randomNumberForBot) {
                alert(`Бот Побеждает! +1 очко Боту!`)
                botScore++
            } else if(randomNumberForPlayer == randomNumberForBot) {
                alert(`Ничя!`)
            } else {
                alert("Кажется что то пошло не так! СНОВА!!!")
                continue;
            }
            if(rounde >= 3) {
            if(playerScore > botScore) {
                alert(`Итог Боя!!!
                    Очко Игрока: ${playerScore}
                    Очко Бота: ${botScore}
                    ----------------------
                    ИГОК ПОБЕЖДАЕТ ПОЗДРАВЛЯЕМ! ЧЕЛОВЕЧЕСТВО
                    НАВСЕГДА!!!`)
            } else if(playerScore < botScore) {
                alert(`Итог Боя!!!
                    Очко Игрока: ${playerScore}
                    Очко Бота: ${botScore}
                    ----------------------
                    ЧЕРТОВ ИИ ПОБЕЖДАЕТЬ!!!`)
            } else {
                alert(`Ну блин как еще хотели?
                    Итог БОЯ!
                    Очко Игрока: ${playerScore}
                    Очко Бота: ${botScore}
                    ----------------------
                    НИЧЯ ЧТОЛЬ?`)
                continue;
            }}
    } else {
        alert("Вы сбежали с поля боя вас найдут и казнять! оч СКОРО!!!")
        break;
    }
}

/* ---------------------------------------------------------------------- */
/* Программа управления достижениями 0.01 */
let achievements = new Set(["Драконный Челик!", "Сладкобой!", "Стать Животным!", "Пипи!"])

while(true) {
    const hisPrompt = +prompt(`
        1 — Добавить новое достижение
        2 — Посмотреть список достижений
        3 — Сбросить все достижения
        4 — Выйти из меню

        (Выберите строго по номеру!)`)

    if(hisPrompt === 1) {
        const hisAddNewAchw = prompt("Введите название вашего нового достижения:");
        const IsThereThen = achievements.has(hisAddNewAchw)
        if(IsThereThen) {
            alert("Вы заслужили эту ачивку заранее!")
        } else{
            achievements.add(hisAddNewAchw)
            alert("Поздравляю! Вы Добавили свое новое достижение!")
        }
    } else if(hisPrompt === 2) {
        for (const tag of achievements) {
    alert(`Ваши достижения: "${tag}"`);
    } if(achievements.size === 0) {
        alert("У вас нет достижений!")
    }
    } else if(hisPrompt === 3) {
        achievements.clear();
        alert("Все достижения сброшены!");
    } else if(hisPrompt === 4 || !hisPrompt) {
        alert("Вы завершили программу!")
        break;
    }
}

/* ---------------------------------------------------------------------- */
/* Функция Ивентаря! 0.10v */
let backPack = new Map()

while (true) {
    const hisInput = +prompt(`
    1 — Добавить предмет в сумку;
    2 — Использовать (потратить) предмет;
    3 — Заглянуть в сумку;
    4 — Выйти из игры;

    Выберите Строго по номеру!!!`)

    if(hisInput === 1) {
        const hisItem = prompt(" Введите называние вашего Предмета: ")
        if(backPack.has(hisItem)) {
            let currentCount = backPack.get(hisItem);
            backPack.set(hisItem, currentCount + 1);
            alert(`Вы положили в инвентарь ${hisItem}`)
        } else {
            backPack.set(hisItem, 1)
            alert(`Вы положили в инвентарь ${hisItem}`)
        }
    } else if(hisInput === 2) {
        const hisItemDelete = prompt("Какой предмет вы хотите исползвовать: ")
        if(backPack.has(hisItemDelete)) {
            let currentCountTwo = backPack.get(hisItemDelete);
        let newCount = currentCountTwo - 1;

        if (newCount > 0) {
        backPack.set(hisItemDelete, newCount);
        } else {
        backPack.delete(hisItemDelete);
        }
        } else if(!backPack.has(hisItemDelete)) {
            alert("У вас нет такого предмета!")
        }
    } else if(hisInput === 3) {
        if(backPack.size === 0) {
            alert("Сумка Пустая!")
        } else {
            for (const [item, count] of backPack) {
                alert(`${item}: ${count}!`)
            }
        }
    } else if(hisInput === 4) {
        alert("Прощайте!")
        break;
    } else {
        alert("Вы завершили программу!")
        break;
    }
}
/* ---------------------------------------------------------------------- */
/* Реалный ПЕТ!!! 1.0v*/
class Pet {
    constructor(name) {
        this.name = name;
        this._health = 100;
        this._happy = 100;
        this._loveYou = 10;
        this._isAlive = true;
    }

    feed() {
        if (this._isAlive) {
            this._health += 15;
            this._loveYou += 5
            alert(`(Ваш ${this.name} хорошо поел! "+15 к здоровю!" "И она вас немного начинает обажать!")
            <<Спосибо Хозяйн! это было так вкусно!😋>>`)
    }else {
        alert(`Ваш ${this.name} Сдох!!!☠️👻
            "Но вы кормите её труп"`)
    }
}

    play() {
        if (this._isAlive) {
            this._health -= 15;
            this._happy += 20;
            this._loveYou += 10
            alert(`(Ваш ${this.name} хорошо Пойграл! "-15 от здоровя!" "+20 к счастю!" "Вы начинаете Ему нравится!!!")
                <<ОГО! Хозяйн! это было так Весело!!🤣😁🤗😝❤️>>`)
        } else {
        alert(`Ваш ${this.name} Сдох!!!☠️👻
            "Но вы играете с её трупом!"`)
    }
    }

    kill() {
        if(this._isAlive) {
            this._health -= 1000;
            this._loveYou -= 1000;
            this._happy -= 1000;
            this._isAlive = false;
            alert(`<<Хозяин?... 😧 ЧТО... Что... вы творите???🫣😱 ПРЕКРАТИТЕ!!!!!!! ПОЖАЛУЙСТА!!!😣😖 НЕЕЕЕЕТТТТ🤢🤮😵‍💫😵☠️☠️☠️👻>>`)
        } else {
            alert(`Вы продалжаете мочить её мертвое тело!!!☠️👻🩸🩸🔪`)
        }
    }

    sexWithShe() {
        if(this._isAlive) {
            if(this._loveYou >= 100) {
            this._health += 50;
            this._loveYou += 60;
            this._happy += 60;
            alert(`<<Мдаа... Хозяйн! Я этого хочу!🤗❤️😋, ААА.. как же приятно!!🤤, ДАА продалжайте ПЖ силнеее!🥵, АЙЙЙЙ Я КОНЧАЮ ХОЗЯЙН!!!🥵🥵🥵🥵🤤🤤🤤🤤❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️>>`)
            } else {
                alert(`<<Нет хозяйн я этого особо не хочу!>> "Пока она вам не оч доверяяет!" `)
            }
        } else {
            alert(`Вы Продалжаете трахать её мертвое тело!!!☠️👻🩸🩸🔪`)
        }
    }

    get fullStatus() {
        return `Имя Питомца: ${this.name},
        Её Здоровя: ${this._health},
        Её Счастя: ${this._happy},
        Её Любовь к вам: ${this._loveYou},
        Жив ли она: ${this._isAlive}. `
    }
}
    const UserCreateName = prompt("Введите имя вашего питомца:");
    const myPet = new Pet(UserCreateName)
    console.log(myPet.fullStatus)

    while(true) {
        const hisWishlist = +prompt(`
            1 — Покормить питомца;
            2 — Поиграть с питомцем;
            3 - Секс с Питомцем;
            4 - Убит Своего Питомца!;
            5 - Проверить статус;
            6 — Выйти из игры;

            (Выберите строго по номеру!!!)`)

            if(hisWishlist === 1) {
                myPet.feed()
            } else if(hisWishlist === 2) {
                myPet.play()
            } else if(hisWishlist === 3) {
                myPet.sexWithShe()
            } else if(hisWishlist === 4) {
                myPet.kill()
            } else if(hisWishlist === 5) {
                alert(myPet.fullStatus)
            } else if(hisWishlist === 6) {
                alert(`Вы Вышли из Программы!`)
                break;
            } else {
                alert(`Вы Завершили Программу!`)
                break;
            }
    }
/* ---------------------------------------------------------------------- */
/* Функция варений Зелий  0.10v*/
function crafter(potionTime, craftName) {
    return new Promise((resolve, reject) => {
        alert(`Подождите мы крафтим... ${craftName} В течений ${potionTime}...`)
        setTimeout(() => {
        if(Math.random() > 0.3) {
            resolve(`Зелья ${craftName} Успешно сварено!`);
        } else {
            reject(`Зелья ${craftName} Взорвался! Провал!!!`);
        }
    }, potionTime * 1000)
    })
}

const hisLaborotory = +prompt(`Какое зелья вы хотите сварить?
    1 — Зелье Лечения (варка 2 секунды)
    2 — Зелье Маны (варка 3 секунды)
    3 — Зелье Невидимости (варка 5 секунд)

    Выберите строго по номеру!`)

    switch(hisLaborotory) {
        case 1:
            crafter(2, "Лечения")
                .then((result) => alert(result))
                .catch((error) => alert(error))
            break;
        case 2:
            crafter(3, "Маны")
                .then((result) => alert(result))
                .catch((error) => alert(error))
            break;
        case 3:
            crafter(5, "Невидимости")
                .then((result) => alert(result))
                .catch((error) => alert(error))
            break;
        default:
            alert("Ты ввел что то другое и завершил программу!")
        break;
    }

/* ---------------------------------------------------------------------- */
/* realBattle 0.10v */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


let hero = {
    name: "Mansik",
    health: 100,
    damage: 60,
}
let monster = {
    name: "RED_EYES",
    health: 300,
    damage: 30,
}

async function startBattle() {
    while(true) {
        console.log(`${hero.name} аттакует острым мечом ${monster.name} и наносит ему урон -${hero.damage}!`)
        await sleep(1500)
        monster.health -= 60
        console.log(`У ${monster.name} осталось вот столко HP:${monster.health}!`)
        if(monster.health <= 0) {
            console.log(`${monster.name} УМЕР! Победил ${hero.name}`)
            break;
        } else{
            console.log(`${monster.name} атакует ${hero.name} силными когтями! и наносит ему урон -${monster.damage}!`)
            await sleep(1500)
            hero.health -= 30
            console.log(`У ${hero.name} осталось вот столко HP:${hero.health}!`)
            if(hero.health <= 0) {
                console.log(`${hero.name} УМЕР! Победил ${monster.name}`)
            break;
            } else {
                continue;
            }
        }
    }
}
startBattle()
/* ---------------------------------------------------------------------- */
/* Добавление квеста 0.10 */
/* HTML:
<div class="app">
    <h1>🗡️ Доска Квестов Таверны</h1>
    <input type="text" id="questInput" placeholder="Введите название квеста...">
    <button id="addBtn">Добавить квест</button>
    <div id="questList"></div>
</div> */
/* JavaScript: */
let herInput = document.querySelector('#questInput')
let herButton = document.querySelector('#addBtn')
let herListWin = document.querySelector('#questList')

herButton.addEventListener('click', () => {
    let herTxt = herInput.value.trim().toUpperCase()
    const myDiv = document.createElement('div');
    myDiv.classList.add('quest-card')
    myDiv.textContent = `КВЕСТ: ${herTxt}`;
    herListWin.append(myDiv)
    herInput.value = ""
try {
    if(herTxt === "") {
        throw new Error("Строка не можеть быть пустым!")
    }
} catch(error){
    const qList = console.log(herListWin.innerHTML += `
    <div>${error.message}</div>`)
}
})
/* ---------------------------------------------------------------------- */
/* Цвет Ауры! 0.10v */
/* HTML:
    <div class="card" id="heroCard">
    <h2 id="heroTitle">Рыцарь Света</h2>
    <p>Состояние: Обычное</p>
</div>

<br>

<button id="btnLight">Светлая аура</button>
<button id="btnDark">Тёмная аура</button>
<button id="btnSize">Увеличить шрифт</button> */

/* JavaScript: */
let heroCard = document.querySelector('#heroCard')
let btnDark = document.querySelector('#btnDark')
let btnLight = document.querySelector('#btnLight')
let btnSize = document.querySelector('#btnSize')

btnLight.addEventListener('click', () => {
    heroCard.style.backgroundColor = 'gold'
    heroCard.style.color = "black"
})
btnDark.addEventListener('click', () => {
    heroCard.style.backgroundColor = 'black'
    heroCard.style.color = "azure"
})
btnSize.addEventListener('click', () => {
    heroCard.classList.toggle('big-text')
})
/* --------------------------------------------------------------------- */
/*  Жутсу обзор! 0.10v */
/* HTML:
<div class="spells-bar">
    <button class="spell-btn" data-damage="45" data-element="fire">🔥Огненный Шар</button>
    <button class="spell-btn" data-damage="30" data-element="ice">❄️Ледяная Стрела</button>
    <button class="spell-btn" data-damage="60" data-element="lightning">⚡ Молния</button>
</div>

<hr>

<div id="battleLog">Ожидание хода...</div> */

/* JavaScript: */
let spellBtn = document.querySelector('.spells-bar')
let battleLog = document.querySelector('#battleLog')

spellBtn.addEventListener('click', (event) => {
    let clickedElement = event.target.textContent;
    let elementDamage = event.target.dataset.damage
    let elementJutsu = event.target.dataset.element

    const clicked = battleLog.innerHTML += `
    <div><p>Каст: ${clickedElement}!, Урон: ${elementDamage}!, Стихия: ${elementJutsu}! </p></div>`

});


/* --------------------------------------------------------------------- */
/* Heros 0.10v */
/* HTML:
<div class="hero-select">
    <div class="hero-card" data-hero="Наруто" data-role="Атака">🍥 Наруто</div>
    <div class="hero-card" data-hero="Гаара" data-role="Защита">⏳ Гаара</div>
    <div class="hero-card" data-hero="Сакура" data-role="Поддержка">🌸 Сакура</div>
</div>

<hr>

<h3 id="status">Выберите шиноби для миссии...</h3> */

/* JavaScript: */
let heroSelect = document.querySelector('.hero-select')
let activator = document.querySelector('.active')
let statBeginer = document.querySelector('#status')

heroSelect.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('hero-card')) {
        let heroName = event.target.dataset.hero;
        let heroRange = event.target.dataset.role;

        event.target.classList.add('active')

        statBeginer.innerHTML += `
        <p>Имя героя: ${heroName}, Его Роль: ${heroRange}</p>`
    }
});
/* ---------------------------------------------------------------------- */
/* Имперский Кузница 0.10v */
/* HTML:
<div class="forge-panel">
    <input type="text" id="itemInput" placeholder="Введите название предмета (например: Кунай)...">
    <button id="craftBtn">🔨 Сковать предмет</button>
</div>

<hr>

<h3>🎒 Склад Снаряжения:</h3>
<div id="inventory"></div> */

/* JavaScript: */
let itemInput = document.querySelector("#itemInput");
let craftBtn = document.querySelector("#craftBtn");
let inventory = document.querySelector("#inventory");

craftBtn.addEventListener('click', () => {
    let itemName = itemInput.value.trim();
    if (itemName === "") {
        return
    }

    const newCard = document.createElement('div');
    newCard.classList.add('item-card');
    newCard.textContent = `🗡️ ${itemName}`;
    inventory.append(newCard);
    itemInput.value = "";
})

inventory.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-card')) {
        event.target.remove()
    }
})
/* ------------------------------------------------------------------- */
/* Ранговнсть Миссий! 0.10v */
/* HTML:
<div class="quest-panel">
    <input type="text" id="questTitle" placeholder="Название миссии (например: Охрана обоза)...">
    <select id="questRank">
        <option value="D">Ранг D</option>
        <option value="C">Ранг C</option>
        <option value="A">Ранг A</option>
    </select>
    <button id="addQuestBtn">📜 Взять миссию</button>
</div>

<hr>

<h3>📋 Список миссий:</h3>
<div id="questList"></div> */

/* JavaScript: */
let questTitle = document.querySelector('#questTitle')
let questRank = document.querySelector('#questRank')
let addQuestBtn = document.querySelector('#addQuestBtn')
let questList = document.querySelector('#questList')

addQuestBtn.addEventListener('click', () => {

    let questName = questTitle.value.trim();
    let questHard = questRank.value;

    if(questName === "") {
        return
    }

    let divAn = document.createElement('div')
    divAn.classList.add('quest-card');
    divAn.innerHTML += `<div><p> Ранг: "${questHard}", Называние Миссий: "${questName}". </p></div>`;
    questList.append(divAn)
    questTitle.value = ""
})

questList.addEventListener('click', (event) => {
    const card = event.target.closest('.quest-card')
    if (!card) return
    card.classList.toggle('completed')

})

/* --------------------------------------------------------------------- */
/* Функция Покупок вещей! 0.10v */
/* HTML:
<h2 id="balance">💰 Монеты: 1000</h2>

<div id="shop">
    <button class="buy-btn" data-name="Кунай" data-price="150">🗡️ Кунай — 150 монет</button>
    <button class="buy-btn" data-name="Свиток Призыва" data-price="500">📜 Свиток — 500 монет</button>
    <button class="buy-btn" data-name="Дымовая шашка" data-price="100">💨 Шашка — 100 монет</button>
</div>

<hr>

<h3>🎒 Ваша сумка:</h3>
<div id="myBag"></div> */

/* JavaScript: */
let hisBalance = 1000;
let balanceHtml = document.querySelector('#balance')
let shopHtml = document.querySelector('#shop')
let buyBtnHtml = document.querySelector('.buy-btn')
let myBagHtml = document.querySelector('#myBag')

shopHtml.addEventListener('click', (event) => {
    let clickedElement = event.target
    let herPrice = Number(clickedElement.dataset.price)
    let herName = clickedElement.dataset.name
    console.log(herPrice, herName)

    if(hisBalance < herPrice) {
        alert(`У вас нехватаеть денег!`)
    } else {
        hisBalance -= herPrice
        balanceHtml.innerHTML = `<div><p>💰 Монеты: ${hisBalance}</p></div>`

        let newElementBag = document.createElement('div');
        newElementBag.classList.add('bag-item');
        newElementBag.textContent = `У вас теперь есть "${herName}", его цена быль "${herPrice}"`;

        myBagHtml.append(newElementBag)
    }
})

/* --------------------------------------------------------------------- */
/* Функция с Механикой (HP) 0.10v */
/* HTML:
<div class="boss-card">
    <h2>👹 Теневой Клон (HP: <span id="hpText">500</span>/500)</h2>
    <div class="hp-bg">
        <div id="hpFill" class="hp-fill"></div>
    </div>
</div>

<br>

<div id="actionPanel">
    <button class="attack-btn" data-damage="50">🗡️ Удар кунаем (-50 HP)</button>
    <button class="attack-btn" data-damage="150">🔥 Расенган (-150 HP)</button>
    <button class="attack-btn" data-damage="-100">💊 Регенерация (+100 HP)</button>
</div>

<hr>

<h3 id="battleStatus">Бой начался! Атакуй клона.</h3> */

/* JavaScript: */
let currentBossHp = 500;
const MAX_BOSS_HP = 500;
let actionPanel = document.querySelector('#actionPanel')
let hpText = document.querySelector('#hpText')
let hpFill = document.querySelector('#hpFill')
let battleStatus = document.querySelector('#battleStatus')

actionPanel.addEventListener('click', (event) => {
    let clickedEl = event.target
    if(clickedEl.classList.contains('attack-btn')) {
        let hisDamage = Number(clickedEl.dataset.damage)

        currentBossHp = currentBossHp - hisDamage
        let hpPercent = (currentBossHp / MAX_BOSS_HP) * 100;

        if(currentBossHp <= 500 && currentBossHp >= 0) {
            hpText.innerHTML = `${currentBossHp}`
            hpFill.style.width = hpPercent + '%'

            if(hpPercent <= 0) {
                let newStat = document.createElement('div')
                newStat.textContent = `Враг Повержен! 🥳🏆`;
                battleStatus.append(newStat)
            } else {
                let newStat = document.createElement('div')
                newStat.textContent = `Враг все еще Жив!! ☠️😐`;
                battleStatus.append(newStat)
            }

        } else {
            console.log("It's not work!")
        }

    } else {
        return;
    }
})

/* --------------------------------------------------------------------- */
/* Быстрый Пойск Элементов! 0.10v */
/* HTML: <div class="filter-panel">
    <input type="text" id="searchInput" placeholder="🔍 Поиск по названию...">
    <br><br>
    <div id="categoryButtons">
        <button class="filter-btn" data-category="all">Все</button>
        <button class="filter-btn" data-category="weapon">🗡️ Оружие</button>
        <button class="filter-btn" data-category="scroll">📜 Свитки</button>
    </div>
</div>

<hr>

<h3>🎒 Предметы на складе:</h3>
<div id="itemList">
    <div class="item" data-category="weapon">🗡️ Стальной Кунай</div>
    <div class="item" data-category="scroll">📜 Свиток Огненного Шара</div>
    <div class="item" data-category="weapon">🥷 Теневой Сюрикен</div>
    <div class="item" data-category="scroll">📜 Свиток Водяного Дракона</div>
    <div class="item" data-category="weapon">⚔️ Мех Обезьяньего Царя</div>
</div> */

/* JavaScript: */
let searchInput = document.querySelector('#searchInput')
let categoryButtons = document.querySelector('#categoryButtons')
let itemHtml = document.querySelectorAll('.item')

categoryButtons.addEventListener('click', (event) => {
    let clickedElem = event.target;

    if (clickedElem.classList.contains('filter-btn')) {
        let cateElemen = clickedElem.dataset.category;

        itemHtml.forEach(item => {
            let itemCategory = item.dataset.category;
            if (itemCategory === cateElemen) {
                item.style.display = 'block';
            }else if (cateElemen === 'all') {
                item.style.display = 'block';
            }else {
                item.style.display = 'none';
            }
        });
    }
});

searchInput.addEventListener('input', (event) => {
    let txtForm = event.target.value.trim().toLowerCase();

    itemHtml.forEach(item => {
        let cardText = item.textContent.trim().toLowerCase()

        if (cardText === txtForm || cardText.includes(txtForm)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})


/* --------------------------------------------------------------------- */
/* Меню Разнователных 0.10v */
/* HTML:
<div class="menu-container">
    <!-- Кнопки вкладок -->
    <div id="tabButtons">
        <button class="tab-btn active" data-tab="equipment">🗡️ Снаряжение</button>
        <button class="tab-btn" data-tab="skills">⚡ Навыки</button>
        <button class="tab-btn" data-tab="settings">⚙️ Настройки</button>
    </div>

    <hr>

    <!-- Блоки с контентом -->
    <div id="equipment" class="tab-content active">
        <h3>🎒 Ваше снаряжение</h3>
        <p>Экипирован: Стальной Кунай, Плащ Акацки.</p>
    </div>

    <div id="skills" class="tab-content">
        <h3>🔥 Дерево Навыков</h3>
        <p>Изучено: Расенган (Ур. 2), Теневое Клонирование (Ур. 1).</p>
    </div>

    <div id="settings" class="tab-content">
        <h3>⚙️ Настройки игры</h3>
        <p>Звук: 100% | Графика: Ультра.</p>
    </div>
</div> */

/* JavaScript: */
let tabButtons = document.querySelector('#tabButtons')
let activeButton = document.querySelector('.tab-btn.active')
let activeContent = document.querySelector('.tab-content.active')

tabButtons.addEventListener('click', (event) => {
    let clickedElem = event.target

    if(clickedElem.classList.contains('tab-btn')) {
        let currentActive = tabButtons.querySelector('.tab-btn.active');
        if (currentActive && currentActive !== clickedElem) {
            currentActive.classList.remove('active');
            clickedElem.classList.add('active')

            let targetTab = clickedElem.dataset.tab
            activeContent.classList.remove('active')
            let contentBlock = document.querySelector('#' + targetTab);
            contentBlock.classList.add('active')
        console.log("Click!")
    } else {
        console.log("No click!")
    }
}})

/* --------------------------------------------------------------------- */
/* Заполнение выполненого миссий! 0.10v */
/*  HTML:
<div class="exp-tracker">
    <h2>🎯 Общий Опыт (EXP): <span id="totalExp">0</span></h2>

    <!-- Форма отправки -->
    <form id="missionForm">
        <input type="text" id="missionTitle" placeholder="Название миссии..." required>
        <input type="number" id="missionExp" placeholder="Количество EXP (например: 250)" required>
        <button type="submit">➕ Добавить в журнал</button>
    </form>

    <hr>

    <h3>📜 История выполненных миссий:</h3>
    <div id="missionLog"></div>
</div> */

/* JavaScript: */
let total = 0;
const missionForm = document.querySelector('#missionForm');
const totalExp = document.querySelector('#totalExp');
const missionLog = document.querySelector('#missionLog');

missionForm.addEventListener('submit', (event) => {
    event.preventDefault(); /* -Stop restart site! */
    let missionInfoOfTitle = missionTitle.value.trim();
    let missionInfoOfExp = Number(missionExp.value);

    if(missionInfoOfTitle === "" || missionInfoOfExp <= 0) {
        return;
    }

    total += missionInfoOfExp
    totalExp.textContent = `${total}`

    let newElement = document.createElement('div');
    newElement.classList.add('mission-item');
    newElement.innerHTML = `<p> Mission Name: "${missionInfoOfTitle}",
    <br >Mission Exp: "${missionInfoOfExp}".</p>
    <button class="delete-btn" data-expval="${missionInfoOfExp}">❌ Удалить</button>`;
    missionLog.append(newElement)

    missionForm.reset() /* -reset the input values */

    console.log(missionInfoOfTitle);
    console.log(missionInfoOfExp);
    console.log(total);
});

missionLog.addEventListener('click', (event) => {
        let clickedElement = event.target
        if(clickedElement.classList.contains('delete-btn'))  {
            let minusExpValue = Number(clickedElement.dataset.expval)
            total -= minusExpValue
            totalExp.textContent = `${total}`
            console.log(minusExpValue)

            clickedElement.closest('.mission-item').remove()
        } else {
            console.log("No ok!")
        }
    })
/* --------------------------------------------------------------------- */
/* Система распределения очков 0.10v*/
/* HTML:
<div class="stats-panel">
    <h2>✨ Свободные очки: <span id="freePoints">10</span></h2>

    <div id="statsList">
        <div class="stat-row">
            <span>⚔️ Сила: <b class="stat-val">0</b></span>
            <div>
                <button class="btn-dec">-</button>
                <button class="btn-inc">+</button>
            </div>
        </div>

        <div class="stat-row">
            <span>⚡ Ловкость: <b class="stat-val">0</b></span>
            <div>
                <button class="btn-dec">-</button>
                <button class="btn-inc">+</button>
            </div>
        </div>

        <div class="stat-row">
            <span>🌀 Чакра: <b class="stat-val">0</b></span>
            <div>
                <button class="btn-dec">-</button>
                <button class="btn-inc">+</button>
            </div>
        </div>
    </div>

    <button id="resetBtn">🔄 Сбросить все очки</button>
</div> */

/* JavaScipt: */
let freePoints = 10;
let statsList = document.querySelector('#statsList')
let freePointsHTML = document.querySelector('#freePoints')
let resetBtn = document.querySelector('#resetBtn')

statsList.addEventListener('click', (event) => {
    let clicked = event.target
    let mState = clicked.closest('.stat-row')
    let newNum = mState.querySelector('.stat-val')
    let numPerse = Number(newNum.textContent)

    if (clicked.classList.contains('btn-inc')) {
        if(freePoints > 0) {
            freePoints -= 1
            numPerse += 1
            newNum.textContent = numPerse
            freePointsHTML.textContent = freePoints
        }

    console.log(numPerse);
    console.log(freePoints);
    console.log("Pluse");

    } else if(clicked.classList.contains('btn-dec')) {
        if(freePoints < 10) {
            freePoints += 1
            numPerse -= 1
            newNum.textContent = numPerse
            freePointsHTML.textContent = freePoints
        }

    console.log(numPerse);
    console.log(freePoints);
    console.log("Minuse!")

    } else {
        console.log("NO clicked!")
    }
})

resetBtn.addEventListener('click', () => {
    freePoints = 10
    freePointsHTML.textContent = freePoints

    document.querySelectorAll('.stat-val').forEach(el => {
        el.textContent = '0'
    })
})

/* ----------------------------------------------------------------------*/
/* Функционалный Весовка 0.10v */
/* HTML:
<div class="inventory-card">
    <h2>🎒 Вес рюкзака: <span id="totalWeight">0</span> / 50 кг</h2>

    <h3>🗡️ Доступное снаряжение:</h3>
    <div id="gearList">
        <button class="gear-item" data-name="Тяжёлый меч" data-weight="25">🗡️ Тяжёлый меч (25 кг)</button>
        <button class="gear-item" data-name="Броня Акацки" data-weight="20">🛡️ Броня (20 кг)</button>
        <button class="gear-item" data-name="Запас Кунаев" data-weight="10">🗡️ Запас кунаев (10 кг)</button>
        <button class="gear-item" data-name="Аптечка" data-weight="5">💊 Аптечка (5 кг)</button>
    </div>

    <hr>

    <h3 id="statusMsg">Статус: Рюкзак свободен.</h3>
</div> */

/* JavaScript: */
let totalWeight = 0;
const MAX_WEIGHT = 50;
let gearList = document.querySelector('#gearList')
let totalWeightHTML = document.querySelector('#totalWeight')
let statusMsg = document.querySelector('#statusMsg')

gearList.addEventListener('click', (event) => {
    let clickedElement = event.target
    if(clickedElement.classList.contains('gear-item')) {
        let hisWeight = Number(clickedElement.dataset.weight);
        console.log(hisWeight)
        if(clickedElement.classList.contains('equipped')) {
            clickedElement.classList.remove('equipped')
            totalWeight -= hisWeight
            console.log('Mm')
        } else {
            if(totalWeight + hisWeight > MAX_WEIGHT) {
                alert("Too Hevy");
            } else {
                clickedElement.classList.add('equipped')
                totalWeight += hisWeight
            }
        }
    } else {
        console.log('No!')
    }
    let realWidth = Number(totalWeightHTML.textContent)
    console.log(realWidth)

    if(totalWeight === MAX_WEIGHT) {
        statusMsg.textContent = `⚠️ Рюкзак загружен полностью!`
    } else if(totalWeight === 0) {
        statusMsg.textContent = `Статус: Рюкзак свободен.`
    } else {
        statusMsg.textContent = `Статус: Набор снаряжения в норме.`
    }
})

/*---------------------------------------------------------------------- */
/* Смена темы! 1.0v */
/* HTML:
<body class="body-function">
    <noscript>Enable THe JS</noscript>

<div class="header-sond">
    <h1 class="txt-role">Смена Темы!!!</h1>
</div>

<div class="main-head">
        <div class="main-container">
            <div class="circle"></div>
        </div>
</div>
</body> */
/* -------------------------------------------------- */
/* CSS:
.body-function {
    transition-duration: 0.5s;
    transition-property: background-color, color;
}
.body-color {
    background-color: black;
    color:azure;
}
.header-sond {
    text-align: center;
}
.main-head {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.main-container {
    width: 200px;
    height: 100px;
    border: 10px solid rgb(13, 11, 11);
    background-color: #717171;
    border-radius: 20vh;
}
.main-container-activator {
    border: 10px solid rgb(255, 255, 255);
}
.circle {
    width: 50%;
    height: 100%;
    background-color: #fed800;
    border-radius: 100%;
    transition-duration: 0.5s;
    transition-property: transform, background-color;
}

.circleActive {
    transform: translate(100%, 0);
    background-color: blueviolet;
} */

/* JavaScript: */
let circleFunction = document.querySelector('.circle')
let bodyColorFunction = document.querySelector('.body-function')
let mainContainerFn = document.querySelector('.main-container')

circleFunction.addEventListener('click', () => {
    circleFunction.classList.toggle('circleActive')
    if(circleFunction.classList.contains('circleActive')) {
        bodyColorFunction.classList.add('body-color')
        mainContainerFn.classList.add('main-container-activator')
    } else {
        bodyColorFunction.classList.remove('body-color')
        mainContainerFn.classList.remove('main-container-activator')
    }
})
/* --------------------------------------------------------------------- */
/* Трекер выполнения этапов миссии! 0.10v */
/* HTML:
<div class="quest-card">
    <h2>📜 Миссия: «Защита Повозки»</h2>

    <!-- Индикатор прогресса -->
    <div class="progress-box">
        <p>Прогресс: <span id="progressText">0 / 4</span> (<span id="percentText">0%</span>)</p>
        <div class="progress-bg">
            <div id="progressBar" class="progress-bar"></div>
        </div>
    </div>

    <hr>

    <!-- Список этапов -->
    <div id="questList">
        <label class="quest-item">
            <input type="checkbox" class="quest-check">
            <span>Собрать припасы в деревне</span>
        </label>
        <label class="quest-item">
            <input type="checkbox" class="quest-check">
            <span>Проверить карту маршрута</span>
        </label>
        <label class="quest-item">
            <input type="checkbox" class="quest-check">
            <span>Обезвредить засаду на мосту</span>
        </label>
        <label class="quest-item">
            <input type="checkbox" class="quest-check">
            <span>Доставить повозку заказчику</span>
        </label>
    </div>

    <hr>
    <h3 id="questStatus">Статус: Подготовка к миссии...</h3>
</div> */

/* CSS:
.quest-card {
    max-width: 420px;
    padding: 20px;
    background: #ffffff;
    border: 2px solid #333;
    border-radius: 8px;
    font-family: sans-serif;
}
.quest-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin: 6px 0;
    background: #f9f9f9;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #ddd;
}


.quest-item.completed span {
    text-decoration: line-through;
    color: #888;
}

.progress-bg {
    width: 100%;
    height: 16px;
    background-color: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
}

.progress-bar {
    width: 0%;
    height: 100%;
    background-color: #ff9800;
    transition: width 0.3s ease;
}*/

/* JavaScript: */
let questList = document.querySelector('#questList')
let progressText = document.querySelector('#progressText')
let percentText = document.querySelector('#percentText')
let progressBar = document.querySelector('#progressBar')
let questStatus = document.querySelector('#questStatus')

questList.addEventListener('change', (event) => {
    let changed = event.target
    if(changed.classList.contains('quest-check')) {
        let bigerItem = event.target.closest('.quest-item')
        console.log('Mimishki')

        const completedCount = document.querySelectorAll('.quest-check:checked').length;
        const allCount = document.querySelectorAll('.quest-check').length

        if(event.target.checked === true) {
            bigerItem.classList.add('completed')
            let theComleted = (completedCount / allCount) * 100
            console.log(theComleted);
            progressText.textContent = `${completedCount} / ${allCount}`
            percentText.textContent = `${theComleted}%`
            progressBar.style.width = `${theComleted}%`
            if(theComleted === 100) {
            questStatus.textContent = `Mission Completed`
            } else {
                questStatus.textContent = `Mission comming`
            }
        } else {
            bigerItem.classList.remove('completed')
            console.log('No!')
            let theComleted = (completedCount / allCount) * 100
            console.log(theComleted);
            progressText.textContent = `${completedCount} / ${allCount}`
            percentText.textContent = `${theComleted}%`
            progressBar.style.width = `${theComleted}%`
            if(theComleted === 100) {
            questStatus.textContent = `Mission Completed`
            } else {
                questStatus.textContent = `Mission comming`
            }
        }

    } else {
        console.log('mim')
    }
})
/* --------------------------------------------------------------------- */
/* Игралки с паролям! 0.10v */
/* HTML:
    <form>
        <input type="text" id="inputPassworder">
        <button type="button" id="buttonForPassword">Скрыть Пароль!</button>
    </form> */

/* JavaScript: */
let inputPassworder = document.querySelector('#inputPassworder')
let buttonForPassword = document.querySelector('#buttonForPassword')

buttonForPassword.addEventListener('click', () => {
    if(inputPassworder.type === "text") {
        inputPassworder.type = "password"
        buttonForPassword.textContent = "Показать Пароль!"
    } else {
        inputPassworder.type = "text"
        buttonForPassword.textContent = "Hide Пароль!"
    }
})
/* --------------------------------------------------------------------- */
/* Счетчик цифоров! 0.10v */
/* HTML:
<div>
    <textarea id="playerInput" placeholder="Введите текст"></textarea>
    <div>Символы в Тексте: <span id="textInfo">0;</span></div>
</div> */

/* JavaScript: */
let totalTxt = 0;
let playerInput = document.querySelector('#playerInput');
let textInfo = document.querySelector('#textInfo');

playerInput.addEventListener('input', (event) => {
    let inputLength = playerInput.value.trim().length
    console.log(inputLength)
    textInfo.textContent = `${inputLength}`
})

/* --------------------------------------------------------------------- */
/* Система Пойсковика! 0.10v */
/* HTML:
<form>
    <div><input id="inputName" type="text" placeholder="Введите Достойную Имю!"></div>
    <div id="theNames">
        <div class="theTxt">Mansur</div>
        <div class="theTxt">Mansik</div>
        <div class="theTxt">Kaepra</div>
        <div class="theTxt">Valergh</div>
    </div>
</form> */

/* JAvaScript: */
let inputName = document.querySelector('#inputName')
let theTxt = document.querySelectorAll('.theTxt')

inputName.addEventListener('input', (event) => {
    let InpukterValue = event.target.value.trim().toLowerCase()
    /* let txtValue = theTxt.textContent.toLowerCase() */
    console.log(InpukterValue)

    theTxt.forEach((txt) => {
        let cardText = txt.textContent.trim().toLowerCase()

        if (cardText === InpukterValue || cardText.includes(InpukterValue)) {
            txt.style.display = 'block'
        } else {
            txt.style.display = 'none'
        }
    })
})

/* --------------------------------------------------------------------- */
/* Форматтер имени! 0.10v! */
/* HTML:
<form>
    <input type="text" id="inpukterForName" placeholder="Введите имя">
    <button type="button" id="btnForInpukter">Отправить</button>
    <div id="resultInfo"></div>
</form> */

/* JavaScript: */
let btnForInpukter = document.querySelector('#btnForInpukter')
let inpukterForName = document.querySelector('#inpukterForName')
let resultInfo = document.querySelector('#resultInfo')

btnForInpukter.addEventListener('click', () => {
    let inputInfo = inpukterForName.value.trim().toLowerCase()
    console.log(inputInfo)

    if(inputInfo === "") {
        resultInfo.textContent = `Введите хоть что то! оригинальное!`
    } else{
        if(inputInfo.length >= 3) {
            const formattedName = inputInfo[0].toUpperCase() + inputInfo.slice(1);
            resultInfo.textContent = `Имя Принято! ${formattedName}`
        } else{
            resultInfo.textContent = `Имя Слишком короткое! хотя бы 3 буквы!`
        }
    }
})

/* --------------------------------------------------------------------- */
/* Ограниченное количество Символов! 0.10v! */
/* HTML:
<form>
    <textarea name="ForTxt" id="txtFormArea" placeholder="введите слов из 20 букв!"></textarea>
    <div><p>«Осталось символов: <span id="txtForInfo">20»</span></p></div>
</form> */

/* JavaScript: */
let txtFormArea = document.querySelector('#txtFormArea');
let txtForInfo = document.querySelector('#txtForInfo');
let maxSimbols = 20;

txtFormArea.addEventListener('input', (event) => {
    let txtAreaLength = event.target.value.replaceAll(' ', '').length;

    if(txtAreaLength > 20) {
        console.log("it's enought!")
    } else{
        console.log('Колиество букв!', txtAreaLength);
        let matemProg = maxSimbols - txtAreaLength
        txtForInfo.textContent = `${matemProg}`
        if(matemProg > 0) {
            return;
    }
}})

/* --------------------------------------------------------------------- */
/* Изменение Статуса! 0.10v! */
/* HTML:
<div>
    <p>Древний Свиток VI</p>
    <button id="btnForLike">Добавить В Список Желаемого!-🩷</button>
    <div>Статус: <span id="stasusInfo">"В Магазе!"</span></div>
</div> */

/* JavaScript: */
let btnForLike = document.querySelector('#btnForLike')
let stasusInfo = document.querySelector('#stasusInfo')
let isInWishlist = false

btnForLike.addEventListener('click', () => {
    if (!isInWishlist) {
        btnForLike.textContent = `Убрать из Список Желаемого!-💔`
        stasusInfo.textContent = `В списке Желаемого!`
        isInWishlist = true
    } else {
        btnForLike.textContent = `Добавить в Список Желаемого!-💛`
        stasusInfo.textContent = `Не в списке Желаемого`
        isInWishlist = false
    }
})
/* --------------------------------------------------------------------- */
/* Работа со всеми "querySelectorAll"! 0.10v! */
/* HTML:
<div>
    <div id="rootName">Называние товара: <h1>Grand Thef Auto VI</h1></div>
    <div>
    <h3>Ваша Оценка:</h3>
    <button class="theBtnStars" type="button">1</button>
    <button class="theBtnStars" type="button">2</button>
    <button class="theBtnStars" type="button">3</button>
    <button class="theBtnStars" type="button">4</button>
    <button class="theBtnStars" type="button">5</button>
    </div>
    <div id="statusInfo">Вы еще не выбрали оценку!</div>
</div> */

/* JavaScript: */
let statusInfo = document.querySelector('#statusInfo')
let theBtnStars = document.querySelectorAll('.theBtnStars')

theBtnStars.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let theClick = Number(btn.textContent)
        console.log(theClick)
        statusInfo.textContent = `Вы Оценили ${theClick}⭐ из 5⭐!`
    })
})
/* --------------------------------------------------------------------- */
/* Переключатель Кнопок! 0.10v! */
/* HTML:
<div>
    <button type="button" class="theBtns">Музыка: <span class="theOffOrOnTxt">ВКЛ</span></button> <br>
    <button type="button" class="theBtns">Звуки: <span class="theOffOrOnTxt">ВКЛ</span></button> <br>
    <button type="button" class="theBtns">Уведомление: <span class="theOffOrOnTxt">ВКЛ</span></button> <br>
</div> */

/* JavaScript: */
const theBtns = document.querySelectorAll('.theBtns');

theBtns.forEach((theBtn) => {
    theBtn.addEventListener('click', () => {
        const text = theBtn.querySelector('.theOffOrOnTxt');

        text.textContent = text.textContent === 'ВКЛ'
            ? 'ВЫКЛ'
            : 'ВКЛ';
    });
});
/* --------------------------------------------------------------------- */
/* ТИПО ЦИКЛ НО НЕТ! 0.10v! */
/* HTML:
<div id="theColorBlock" style="background-color: red; width: 100px; height: 100px;"></div>
<div>Цвет: <span id="theColorTxt">Красный!</span></div>
<button id="theColorBtn">Сменить цвет!</button> */

/* JavaScript: */
let theColorBlock = document.querySelector('#theColorBlock');
let theColorTxt = document.querySelector('#theColorTxt');
let theColorBtn = document.querySelector('#theColorBtn');
let theClicks = 0;

theColorBtn.addEventListener('click', () => {
    if (theClicks === 0) {
        theColorBlock.style.backgroundColor = 'red';
        theColorTxt.textContent = 'Красный!';
    } else if (theClicks === 1) {
        theColorBlock.style.backgroundColor = 'blue';
        theColorTxt.textContent = 'Синий!';
    } else {
        theColorBlock.style.backgroundColor = 'green';
        theColorTxt.textContent = 'Зелёный!';
    }

    theClicks++;

    if (theClicks === 3) {
        theClicks = 0;
    }
});
/* --------------------------------------------------------------------- */
/* Показать и Скрыт Ответ! 0.10v! */
/* HTML:
<div>Что такое JavaScript?</div>
<div id="theInfoAboutJs"></div>
<button id="theBtn">Показать Ответ!</button> */

/* JavaScript: */
let theInfoAboutJs = document.querySelector('#theInfoAboutJs')
let theBtn = document.querySelector('#theBtn')
let theClickJs = 0;

theBtn.addEventListener('click', () => {
    if(theClickJs === 1) {
        theInfoAboutJs.textContent = ''
        theBtn.textContent = 'Показать Ответ!'
    } else{
        theInfoAboutJs.textContent = 'JavaScript — язык программирования, который позволяет добавлять логику и интерактивность на веб-страницы.'
        theBtn.textContent = 'Скрыть Ответ!'
    }
    theClickJs++;
    if (theClickJs === 2) {
        theClickJs = 0;
    }
})
/* --------------------------------------------------------------------- */
/* Har JS Math! 0.20v*/
/* HTML:
<input type="text" id="inpukterOne" placeholder="Введите Первое число">
<input type="text" id="inpukterTwo" placeholder="Введите Второе число!">
<br>
<button class="theBtnForMath" data-math-room="+">+</button>
<button class="theBtnForMath" data-math-room="-">-</button>
<button class="theBtnForMath" data-math-room="*">*</button>
<button class="theBtnForMath" data-math-room="/">/</button>
<div>Резултать: <span id="theResultInfo">0</span></div> */

/* JavaScript: */
let inpukterOne = document.querySelector('#inpukterOne')
let inpukterTwo = document.querySelector('#inpukterTwo')
let theResultInfo = document.querySelector('#theResultInfo')
let theBtnForMath = document.querySelectorAll('.theBtnForMath')
let mA = inpukterOne;
let mB = inpukterTwo;

theBtnForMath.forEach((theBtn) => {
    theBtn.addEventListener('click', (event) => {
        const operation = event.currentTarget.dataset.mathRoom
        const mA = Number(inpukterOne.value)
        const mB = Number(inpukterTwo.value)

        let theResult

        switch (operation) {
            case '+':
                theResult = mA + mB
                break
            case '-':
                theResult = mA - mB
                break
            case '*':
                theResult = mA * mB
                break
            case '/':
                theResult = mA / mB
                break
        }

        theResultInfo.textContent = theResult
    })
})
/* --------------------------------------------------------------------- */
/* Биг Викторина! 0.10v */
/* HTML:
<h3>Какой язык используется для работы с логикой на этой странице?</h3>
    <div id="theButtons">
        <button class="btnSelect" data-theanswer="HTML">HTML</button> <br>
        <button class="btnSelect" data-theanswer="CSS">CSS</button> <br>
        <button class="btnSelect" data-theanswer="JS">JavaScript</button> <br>
        <button class="btnSelect" data-theanswer="Python">Python</button> <br>
    </div>
    <div>Резултать: <span id="theResult">Ожидание!</span></div>
    <div id="theRSBtnParent"></div> */

/* JavaScript: */
const theButtons = document.querySelector('#theButtons')
const theResult = document.querySelector('#theResult')
const theRSBtnParent = document.querySelector('#theRSBtnParent')
const btnSelect = document.querySelectorAll('.btnSelect')

let theResetBtn = document.createElement('button')
theResetBtn.textContent = ` Попробововать Заново!`
theResetBtn.style.display = 'none'
theRSBtnParent.append(theResetBtn)

theButtons.addEventListener('click', (event) => {
    let theClicker = event.target

    if(theClicker.classList.contains('btnSelect')) {
        if(theClicker.dataset.theanswer === "JS") {
            theResult.textContent = `
            Ответ Верный!✅
            Вы Выйграли 🤑💲💲💲🪙🪙🪙`
            btnSelect.forEach((btn) => {
                btn.disabled = true
            })
        } else {
            theResult.textContent = `Ответ неВерный!❌`
            btnSelect.forEach((btn) => {
                btn.disabled = true
            })
            theResetBtn.style.display = ''
            theResetBtn.addEventListener('click', () => {
                btnSelect.forEach((btn) => {
                btn.disabled = false
            })
            theResult.textContent = `Ожидание!`
            theResetBtn.style.display = 'none'
            })
        }
    }
})
/* --------------------------------------------------------------------- */
/* Перевод текстов или же Локализация!! 0.10v! */
/* HTML:
<div id="theSelectLangBtn">
        <button class="RUbtn" data-lanuage="rus">Русский Язык</button>
        <button class="ENbtn" data-lanuage="eng">English</button>
    </div>
    <h1 id="theTitle">Мой Текст!</h1>
    <p id="theTXT">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ты знаках, напоивший алфавит маленький свой это безопасную первую безорфографичный свою приставка рыбного, последний великий своих он. Курсивных, до. Строчка не по всей журчит возвращайся выйти маленькая текст свою предупреждал прямо, парадигматическая, одна пунктуация всеми, безорфографичный домах все страна. Заглавных, великий.</p> */

/* JavaScript: */
const theSelectLangBtn = document.querySelector('#theSelectLangBtn')
const theTitle = document.querySelector('#theTitle')
const theTXT = document.querySelector('#theTXT')
const ENbtn = document.querySelector('.ENbtn')
const RUbtn = document.querySelector('.RUbtn')

const translations = {
    ru: {
    title: "Мой Текст!",
    description: `Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ты знаках, напоивший алфавит маленький свой это безопасную первую безорфографичный свою приставка рыбного, последний великий своих он. Курсивных, до. Строчка не по всей журчит возвращайся выйти маленькая текст свою предупреждал прямо, парадигматическая, одна пунктуация всеми, безорфографичный домах все страна. Заглавных, великий.`
    },
    en: {
    title: "My Text!",
    description: `Far, far away, beyond the verbal mountains, in the land of vowels and consonants, live fishy texts. You, who have watered the alphabet, your small one, this is the first safe, orthographically correct one, the last great one, the fishy prefix. Italics, before. The line doesn’t flow all the way, come back, go out, the small text warned you directly, paradigmatic, one punctuation, orthographically correct, in all the houses, the whole country. Capitalized, great.`
    }
};

theSelectLangBtn.addEventListener('click', (event) => {
    let theClick = event.target

    if(theClick.classList.contains('RUbtn')) {
        RUbtn.classList.add('selected')
        ENbtn.classList.remove('selected')
        console.log('Privet!')

        theTitle.textContent = translations.ru.title;
        theTXT.textContent = translations.ru.description;
    } else if(theClick.classList.contains('ENbtn')) {
        RUbtn.classList.remove('selected')
        ENbtn.classList.add('selected')
        console.log('Hello!')

        theTitle.textContent = translations.en.title;
        theTXT.textContent = translations.en.description;
    } else {
        return;
    }
})

/* --------------------------------------------------------------------- */
/* СОРТИРОВКА ПО КАТЕГОРИЯМ! 0.10v! */
/* HTML:
<ul id="theSelects">
        <li class="theStore" data-category="fruit">Яблоко 🍎</li>
        <li class="theStore" data-category="fruit">Апельсин 🍊</li>
        <li class="theStore" data-category="fruit">Банан 🍌</li>
        <li class="theStore" data-category="fruit">Арбуз 🍉</li>
        <li class="theStore" data-category="fruit">Клубника 🍓</li>
        <li class="theStore" data-category="farm">Хлеб 🥖</li>
        <li class="theStore" data-category="farm">Молоко 🥛</li>
        <li class="theStore" data-category="farm">Сыр 🧀</li>
    </ul>
    <div id="theBtnS">
        <button class="theCateBtn" data-category-btn="all">Все</button>
        <button class="theCateBtn" data-category-btn="fruit">Фрукты</button>
        <button class="theCateBtn" data-category-btn="nothing">Ничего!</button>
    </div> */

    /* JavaScript: */
const theBtnS = document.querySelector('#theBtnS')
const theSelects = document.querySelectorAll('.theStore')

theBtnS.addEventListener('click', (event) => {
    let theClick = event.target

    if(theClick.classList.contains('theCateBtn')) {
        let theCategory = theClick.dataset.categoryBtn
        console.log(theCategory)

        if(theCategory === "all") {
            theSelects.forEach((item) => {
                item.style.display = ''
            })
        } else if(theCategory === "fruit") {
            theSelects.forEach((item) => {
                let allCategory = item.dataset.category
                if(allCategory === "farm") {
                item.style.display = 'none'
                }
                if(allCategory === "fruit") {
                item.style.display = ''
                }
            })
        } else{
            theSelects.forEach((item) => {
                item.style.display = 'none'
            })
        }
    }
})
/* --------------------------------------------------------------------- */
/* ТИПО ЗАМЕТКИ! 0.10v! */
/* HTML:
<input type="text" id="inputforNote" placeholder="Введите текст заметки!">
<button id="buttonNote">Добавить</button>
<br>
<div id="theNotes"></div> */

/* JavaScript: */
const inputforNote = document.querySelector('#inputforNote')
const buttonNote = document.querySelector('#buttonNote')
const theNotes = document.querySelector('#theNotes')

buttonNote.addEventListener('click', () => {
    const theInputValue = inputforNote.value.trim()

    if (theInputValue === '') {
        return
    }

    theNotes.innerHTML += `
        <div class="note">
            📝-${theInputValue}
            <button type="button" class="delete-btn">Удалить</button>
        </div>
    `

    inputforNote.value = ''
})

theNotes.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.closest('.note').remove()
    }
})

/* -------------------------------------------------------------------- */
/* Выбор цвета профиля! 0.10v! */
/* HTML:
<div id="theColorBlock" style="background-color: blue; width: 100px; height: 100px;"></div>
<div id="theUserName">Kazenov Mansur</div>
<br>
<div id="theUserBtnColor">
    <button class="theBtn" data-color-back="blue">Синний!</button>
    <button class="theBtn" data-color-back="green">Зеленый!</button>
    <button class="theBtn" data-color-back="violet">Фиолетвый!</button>
</div> */

/* JavaScript: */
const theColorBlock = document.querySelector('#theColorBlock')
const theUserBtnColor = document.querySelector('#theUserBtnColor')
const theBtnHTML = document.querySelectorAll('.theBtn')

theUserBtnColor.addEventListener('click', (event) => {
    let theBtn = event.target.classList.contains('theBtn')
    if(theBtn) {
        let theDataset = event.target.dataset.colorBack;
        console.log(theDataset)
        if(theDataset === "violet") {
            theColorBlock.style.backgroundColor = 'blueviolet'
            theBtnHTML.forEach((btn) => {
                btn.style.backgroundColor = '#EFEFEF'
            })
            event.target.style.backgroundColor = 'blueviolet'
        }
        else if(theDataset === "green") {
            theColorBlock.style.backgroundColor = 'green'
            theBtnHTML.forEach((btn) => {
                btn.style.backgroundColor = '#EFEFEF'
            })
            event.target.style.backgroundColor = 'green'
        }
        else if(theDataset === "blue") {
            theColorBlock.style.backgroundColor = 'blue'
            theBtnHTML.forEach((btn) => {
                btn.style.backgroundColor = '#EFEFEF'
            })
            event.target.style.backgroundColor = 'blue'
        }
    }
})
/* ---------------------------------------------------------------------- */
/* Переключение Вкладок! 0.10v! */
/* HTML:
<div id="theAllBtn">
    <button class="theBtnForWin active" data-tab="main">Меню</button>
    <button class="theBtnForWin" data-tab="profile">Профиль</button>
    <button class="theBtnForWin" data-tab="settings">Настройки!</button>
</div>
<div id="theAllWin"></div>
</div> */

/* JavaScript: */
const buttons = document.querySelectorAll('.theBtnForWin');
const theAllWin = document.querySelector('#theAllWin');
const main = "Здесь находится Главный Меню!";
const profile = "А Здесь находится Ваш Профиль!";
const settings = "А вот здесь настройки!";

function theTxtContent(element, value) {
    element.textContent = value
}
theTxtContent(theAllWin, main)

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        buttons.forEach((item) => item.classList.remove('active'));
        event.currentTarget.classList.add('active');

        let theClick = event.target.dataset.tab
        if(theClick === 'main') {
            theTxtContent(theAllWin, main)
        } else if(theClick === 'profile') {
            theTxtContent(theAllWin, profile)
        } else if(theClick === 'settings') {
            theTxtContent(theAllWin, settings)
        }
    });
});
/* --------------------------------------------------------------------- */
/* Удаление Товаров! 0.10v! */
/* HTML:
<ul id="allProducts">
    <li class="theProduct">🍰 сладости <button class="theDeleteBtn">Удалить</button></li>

    <li class="theProduct">🥛 Молоко <button class="theDeleteBtn">Удалить</button></li>

    <li class="theProduct">🥖 Хлеб <button class="theDeleteBtn">Удалить</button></li>

    <li class="theProduct">🍎 Яблоко <button class="theDeleteBtn">Удалить</button></li>
</ul>
<div>Товаров осталось: <span id="theLength">4</span></div> */

/* JavaScript: */
const allProducts = document.querySelector('#allProducts')
const theLength = document.querySelector('#theLength')
let theLengthNumber = Number(theLength.textContent)
/* let theProduct = document.querySelectorAll('.theProduct') */

allProducts.addEventListener('click', (event) => {
    let theClick = event.target

    if(theClick.classList.contains('theDeleteBtn')) {
        theLengthNumber--
        theLength.textContent = `${theLengthNumber}`

        let theProLength = theClick.closest('.theProduct')
        theProLength.style.display = 'none'

    }
})

/* --------------------------------------------------------------------- */
/* Переключатель Кнопки и товаров! 0.10v! */
/* HTML:
<ul id="theAllProducts">
    <li class="theProduct">🍕 Пицца <button class="theProductBtn active">[ Добавить ]</button></li>

    <li class="theProduct">🍔 Бургер <button class="theProductBtn active">[ Добавить ]</button></li>

    <li class="theProduct">🍟 Картошка <button class="theProductBtn active">[ Добавить ]</button></li>
</ul>
<div>Выбрано товаров: <span id="theResult">0</span></div> */

/* JavaScript: */
const theAllProducts = document.querySelector('#theAllProducts')
const theResult = document.querySelector('#theResult')
let theResultNum = Number(theResult.textContent)

theAllProducts.addEventListener('click', (event) => {
    let theClick = event.target
    if(theClick.classList.contains('theProductBtn')) {
        if(theClick.classList.contains('active')) {
            theClick.textContent = '[ Добавлено ✅]'
            theResultNum++
            theResult.textContent = `${theResultNum}`
            theClick.classList.remove('active')
        } else {
            theClick.textContent = '[ Добавить ]'
            theResultNum--
            theResult.textContent = `${theResultNum}`
            theClick.classList.add('active')
        }
        }
})
/* --------------------------------------------------------------------- */
/* Сетчик найденных предметов! 0.10v! */
/* HTML:
    <input class="theInput" type="text" placeholder="Введите имя вашего персоны">

        <div class="theList">Mansik</div>
        <div class="theList">Mansur</div>
        <div class="theList">Valergh</div>
        <div class="theList">Kaepra</div>
        <div class="theList">Manchuk</div>

    <div>Найдено: <span class="theResult">0</span></div> */

/* JavaScript: */
const theInput = document.querySelector('.theInput')
const theList = document.querySelectorAll('.theList')
const theResult = document.querySelector('.theResult')

theInput.addEventListener('input', () => {
    let theInputValue = theInput.value.trim().toLowerCase()
    let count = 5;
    theList.forEach((val) => {
        let theTxtValue = val.textContent.trim().toLowerCase()
        if(/* theInputValue == theTxtValue  */theTxtValue.includes(theInputValue)) {
            val.style.display = 'block'
        } else {
            val.style.display = 'none'
            count--
        }
    })
    theResult.textContent = count
})
/* --------------------------------------------------------------------- */