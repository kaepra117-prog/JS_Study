/* Мой первый Норм игра! The Economic War! 0.30v! */
/* HTML:
<div class="theCountry">
    <div class="theInfo">
        <div>Имя Страны: <span class="theCountryNameInfo theTxtStyle">Russia</span></div>
        <div>Денги: <span class="theCountryBudGetInfo theTxtStyle"></span></div>
        <div>Людские Ресурсы: <span class="theCountryManPowerInfo theTxtStyle"></span></div>
        <div>Гражданские Фабрики: <span class="theCountryFactoryInfo theTxtStyle"></span></div>
        <div>Военные Фабрики: <span class="theCountryWarFactoryInfo theTxtStyle"></span></div>
        <div>В Текущий Статус: <span class="theCountryWarStatusInfo theTxtStyle"></span></div>
    </div>
    <br>
    <div class="theBtns">
        <button class="theMoney">Заработать💵!</button>
        <button class="theManpower">Мобилизовать🙎🏼‍♂️!</button>
        <button class="theEconomy">Посотройт экономику🏭!</button>
        <button class="theWarFactory">Постройт Пройзводство Военных Тех🪖!</button>
        <button class="theDeclareWar">Воевать⚠️!</button>
    </div>
    <br>
    <div class="theIventInfoWindow"></div>
</div> */

/* CSS:
.theTxtStyle {
    color: rgb(255, 0, 0); 
} */

/* JavaScript: */
const theCountry = document.querySelector('.theCountry');

class TheCountryFunction {
    country = "Russia";

    constructor(BudGet = 0, ManPower = 0, CFactory = 0, WFactory = 0, WStatus = false) {
        this._BudGet = BudGet;
        this._ManPower = ManPower;
        this._CFactory = CFactory;
        this._WFactory = WFactory;
        this.WStatus = WStatus;
    }

    set BudGet(value) {
        if (value <= 0) {
            alert('Бюджет не может быть 0 или меньше!');
            return;
        }
        this._BudGet = value;
    }

    get BudGet() {
        return this._BudGet;
    }

    set ManPower(value) {
        this._ManPower = value;
    }

    get ManPower() {
        return this._ManPower;
    }

    set CFactory(value) {
        this._CFactory = value;
    }

    get CFactory() {
        return this._CFactory;
    }

    set WFactory(value) {
        this._WFactory = value;
    }

    get WFactory() {
        return this._WFactory;
    }

    BudGetPluse() {
        this._BudGet += 10000;
    }

    Mobilization() {
        if (this._BudGet < 70000) {
            alert('Нельзя мобилизовать: бюджета меньше 70000!');
            return;
        }

        this._BudGet -= 50000;
        this._ManPower += 5000;

    }

    BuildTheCFactory() {
        if (this._BudGet < 10000) {
            alert('Невозможно Стройт Гражданскую Фабрику: бюджета меньше 10000!');
            return;
        }

        this._BudGet -= 10000;
        this._CFactory += 1;
    }

    BuildTheWFactory() {
        if (this._BudGet < 30000) {
            alert('Невозможно Стройт Военную Фабрику: бюджета меньше 30000!');
            return;
        }

        this._BudGet -= 30000;
        this._WFactory += 1;
    }

    DeclareWar() {
        alert('Война Обявльена!')
        this.WStatus = true
    }
}

let createCn = new TheCountryFunction()

createCn.BudGet = 80000
createCn.ManPower = 10000
createCn.CFactory = 10
createCn.WFactory = 10
createCn.BudGetPluse()
createCn.Mobilization()
createCn.BuildTheCFactory()
createCn.BuildTheWFactory()
/* createCn.DeclareWar() */
console.log(createCn)

function startEconomy() {
    setInterval(() => {
        createCn.BudGet += createCn.CFactory * 1000;

        console.log(`Прошло 3 сек! Прибыль: +${createCn.CFactory * 1000}. Всего очков: ${createCn.BudGet}`);
        updateCountryInfo();
    }, 3000);
}
startEconomy();

let ForTheInfoWindow = theCountry.querySelector('.theInfo')
let ForTheButtons = theCountry.querySelector('.theBtns')
let FortheIventInfoWindow = theCountry.querySelector('.theIventInfoWindow')
console.log(ForTheInfoWindow)
console.log(ForTheButtons)

ForTheButtons.addEventListener('click', (event) => {
    const buttonClick = event.target;

    if (buttonClick.closest('.theMoney')) {
        if (!buttonClick) return;

        createCn.BudGetPluse();
        updateCountryInfo();

        addEventLog('Заработали 10000💲!');
    }
    else if (buttonClick.closest('.theManpower')) {
        if (!buttonClick) return;

        createCn.Mobilization()
        updateCountryInfo();

        addEventLog('Был мобилизован 5000 🙎🏼‍♂️!');
    }
    else if (buttonClick.closest('.theEconomy')) {
        if (!buttonClick) return;

        createCn.BuildTheCFactory()
        updateCountryInfo();

        addEventLog('Был Построен +1 🏭(Гражданского Типа) !');
    }
    else if (buttonClick.closest('.theWarFactory')) {
        if (!buttonClick) return;

        createCn.BuildTheWFactory()
        updateCountryInfo();

        addEventLog('Был Построен +1 🏭(Военного Типо) !');
    }
    else if (buttonClick.closest('.theDeclareWar')) {
        if (!buttonClick) return;

        createCn.DeclareWar()
        updateCountryInfo();

        addEventLog('Был Обявлен Война 🔥 !');
    }

});

function addEventLog(message) {
    const time = new Date().toLocaleTimeString();
    FortheIventInfoWindow.insertAdjacentHTML(
        'afterend',
        `<div>${time} — ${message}</div>`
    );
}

function updateCountryInfo() {
    ForTheInfoWindow.querySelector('.theCountryBudGetInfo').textContent = `${createCn.BudGet}💲`;
    ForTheInfoWindow.querySelector('.theCountryManPowerInfo').textContent = createCn.ManPower;
    ForTheInfoWindow.querySelector('.theCountryFactoryInfo').textContent = createCn.CFactory;
    ForTheInfoWindow.querySelector('.theCountryWarFactoryInfo').textContent = createCn.WFactory;
    ForTheInfoWindow.querySelector('.theCountryWarStatusInfo').textContent = createCn.WStatus ? "В состоянии войны" : "Мирная жизнь";
}

updateCountryInfo();

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */