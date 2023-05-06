let info = new userinfo();

// Функция для отображения данных на странице
async function displayData() {
    // Получаем данные и сохраняем их в переменные

    let referrer = document.referrer;
    let previousSites = await info.previousSites();
    let dataCookies = document.cookie;
    let dataStorage = localStorage.getItem("dataStorage") || "";
    let sizeScreen = screen.width + " x " + screen.height;
    let battery = (await info.battery()).level * 100 + "%";
    let ip = (await info.ip()).ipAddress;
    let city = (await info.ip()).city;
    let appVersion = (await info.browserInfo()).appVersion;
    let effectiveType = (await info.browserInfo()).connection.effectiveType;

    // Отображаем данные на странице
    document.getElementById("browserInfo").innerText = "Поколение соединения: " + effectiveType;
    document.getElementById("referrer").innerText = "Страница с которой вы пришли: " + referrer;
    document.getElementById("previousSites").innerText = "Количество сайтов перед посещением этой страницы: " + previousSites;
    document.getElementById("appVersion").innerText = "Система и движки: " + appVersion;

    document.getElementById("sizeScreen").innerText = "Размер Экрана: " + sizeScreen;
    document.getElementById("battery").innerText = "Заряд: " + battery;
    document.getElementById("ip").innerText = "IP & Местоположение: " + ip + " " + city;
    console.log(info.browserInfo());
}



// Вызываем функцию для отображения данных
displayData();


const GEO_button = document.querySelector('#button');
const locationElement = document.getElementById('location');

const apiKey = '32bcd4a6e4b548968e7afcdb682ac679';

async function getLocation() {
    try {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
            accuracy: pos.coords.accuracy,
            altitude: pos.coords.altitude,
            heading: pos.coords.heading,
            speed: pos.coords.speed,
            timestamp: pos.timestamp,
        };
    } catch (error) {
        console.error(error);
        throw new Error('геолокация запрещена в вашем браузере');
    }
}

GEO_button.addEventListener('click', async () => {
    try {
        const info = await getLocation();
        const long = info.long;
        const lat = info.lat;
        const timestamp = info.timestamp;
        const accuracy = info.accuracy;
        const speed_info = info.speed;
        const { lat1, long1 } = await getLocation();
          const { timezone, dateTime } = await getTimezone(lat, long);
      
       
        // пример метки времени
        const date = new Date(timestamp); // создаем объект Date
        console.log(date.toLocaleString()); // выводим дату и время в формате, понятном человеку

        locationElement.innerText = `Теперь я знаю ещё кое что)
    долгота: ${long}, ширина ${lat} (или наоборот) 
    скорость равна ${speed_info}, время без API: ${date.toLocaleString()} 
    Временная зона: ${timezone} Местное время: ${dateTime}`;

    } catch (error) {
        console.error(error);
        locationElement.innerText = 'Ошибка: ' + error.message;
    }

    async function getTimezone(lat, long) {
        const url = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&lat=${lat}&long=${long}`;
        const response = await fetch(url);
      
        if (!response.ok) {
          throw new Error('Не удалось получить данные о временной зоне');
        }
      
        const data = await response.json();
        return {
          timezone: data.timezone,
          dateTime: data.date_time_txt,
        };
      }
});

const button = document.querySelector('.button');
button.addEventListener('mousemove', e => {
    button.style.setProperty('--x', e.offsetX + 'px');
    button.style.setProperty('--y', e.offsetY + 'px');
});


