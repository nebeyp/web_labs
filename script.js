function updateTime() {
    var currentTime = new Date();
    var utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    
    // Часовой пояс Москвы (UTC+3)
    var moscowTime = new Date(utc + (3600000 * 3));
    var moscowTimeString = moscowTime.toLocaleTimeString('ru-RU', {timeZone: 'Europe/Moscow'});
    document.getElementsByName('moscowTime')[0].textContent = moscowTimeString + " - Moscow";
    
    // Часовой пояс Нью-Йорка (UTC-4)
    var newYorkTime = new Date(utc - (3600000 * 4));
    var newYorkTimeString = newYorkTime.toLocaleTimeString('en-US', {timeZone: 'America/New_York'});
    document.getElementsByName('newYorkTime')[0].textContent = newYorkTimeString + " - New York";
    
    // Часовой пояс Токио (UTC+9)
    var tokyoTime = new Date(utc + (3600000 * 9));
    var tokyoTimeString = tokyoTime.toLocaleTimeString('ja-JP', {timeZone: 'Asia/Tokyo'});
    document.getElementsByName('tokyoTime')[0].textContent = tokyoTimeString + " - Tokyo";
}

function addEmptyRow() {
    var table = document.getElementsByName('myTable')[0]; // Выбираем таблицу по имени
    var lastIndex = table.rows.length - 1;

    var row = table.insertRow(lastIndex);
    var cell1 = row.insertCell(0); // Добавляем ячейки в новую строку
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = ""; // Устанавливаем содержимое ячеек пустым
    cell2.innerHTML = "";
    cell3.innerHTML = "";
}

function addDataRow() {
    var table = document.getElementsByName('myTable')[0]; // Выбираем таблицу по имени
    var aspectInput = document.getElementsByName('aspectInput')[0].value; // Получаем значение из поля ввода для аспекта
    var advantageInput = document.getElementsByName('advantageInput')[0].value; // Получаем значение из поля ввода для преимущества
    var disadvantageInput = document.getElementsByName('disadvantageInput')[0].value; // Получаем значение из поля ввода для недостатка
    
    if (aspectInput === "" || advantageInput === "" || disadvantageInput === "") {
        alert("Пожалуйста, заполните все поля ввода.");
        return;
    }

    var lastIndex = table.rows.length - 1;

    var row = table.insertRow(lastIndex);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = aspectInput;
    cell2.innerHTML = advantageInput;
    cell3.innerHTML = disadvantageInput;
}

function changeCellColor() {

    let cells = document.querySelectorAll('table tr td');
    
    cells.forEach(function(cell) {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Генерируем случайный цвет в формате HEX
        cell.style.backgroundColor = randomColor; // Меняем цвет ячейки
    });
}

function changeTableFontSize() {
    // Получаем таблицу по имени
    let table = document.getElementsByName('myTable')[0];
    
    // Генерируем случайный размер шрифта
    let randomFontSize = Math.floor(Math.random() * 20 + 10) + 'px';
    
    // Устанавливаем сгенерированный размер шрифта для всех ячеек таблицы
    table.style.fontSize = randomFontSize;
}

const showAuthorInfo = () => {
    const authorInfo = "Автор сайта: Шенин Р.В., группа 4132";
    alert(authorInfo);
}

function changeBackgroundColor(element, color, duration) {
    element.style.transition = `background-color ${duration}s ease`; // Устанавливаем анимацию
    
    // Устанавливаем цвет фона
    setTimeout(() => {
        element.style.backgroundColor = color;
    }, 500); // Задержка перед применением анимации
}

// Пример применения функции для вашего сайта
window.addEventListener('load', function() {
    let header = document.querySelector('header'); // Выбираем элемент заголовка
    let footer = document.querySelector('footer'); // Выбираем элемент футера
    
    // Применяем функцию для изменения цвета фона заголовка на красный с анимацией длительностью 2 секунды
    changeBackgroundColor(header, 'pink', 1);
    changeBackgroundColor(footer, 'pink', 1);
});


document.getElementsByName('showTimeButton')[0].addEventListener('click', function() {
    updateTime(); // Обновить время сразу после нажатия на кнопку
    setInterval(updateTime, 3000); // Вызывать функцию updateTime каждую секунду
});
document.getElementsByName('addRowButton')[0].addEventListener('click', addEmptyRow);
document.getElementsByName('addRow2Button')[0].addEventListener('click', addDataRow);
document.getElementsByName('changeColorButton')[0].addEventListener('click', changeCellColor);
document.getElementsByName('changeTableSizeButton')[0].addEventListener('click', changeTableFontSize);
document.getElementsByName('FIO')[0].addEventListener('click', showAuthorInfo);
