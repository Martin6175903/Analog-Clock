(function updateClock () {      // Обновляет изображение SVG-часов, чтобы показывать текущее время.
    let now = new Date();       // Текущее время
    let sec = now.getSeconds();     // Секунды
    let min = now.getMinutes() + sec / 60;      // Дробные минуты
    let hour = (now.getHours() % 12) + min / 60;      // Дробные часы
    let minangle = min * 6;     // 6 градусов на минуту
    let hourangle = hour * 30;  // 30 градусов на час

    // Получить элементы SVG для стрелок часов.
    let minhand = document.querySelector("#clock .minutehand");
    let hourhand = document.querySelector("#clock .hourhand");

    // Установить для них атрибут SVG, чтобы перемещать по циферблату.
    minhand.setAttribute("transform", `rotate(${minangle}, 50, 50)`);
    hourhand.setAttribute("transform", `rotate(${hourangle}, 50, 50)`);

    // Запустить эту функцию через 10 секунд.
    setTimeout(updateClock, 10000);
}()); // Немедленный вызов.