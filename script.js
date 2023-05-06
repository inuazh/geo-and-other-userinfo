let info = new userinfo();

// Функция для отображения данных на странице
async function displayData() {
    // Получаем данные и сохраняем их в переменные
// let  = await info.browserInfo();
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
  //  document.getElementById("dataStorage").innerText = "Data Storage: " + dataStorage;
    document.getElementById("sizeScreen").innerText = "Размер Экрана: " + sizeScreen;
    document.getElementById("battery").innerText = "Заряд: " + battery;
    document.getElementById("ip").innerText = "IP & Местоположение: " + ip + " " + city;
    console.log(info.browserInfo());
}

// // Сохраняем данные в localStorage
// localStorage.setItem("dataStorage", "some data");

// Вызываем функцию для отображения данных
displayData();

// function displayBrowserInfo() {
//    
//     const browserInfo = navigator;
//     const browserInfoString = JSON.stringify(browserInfo, null, 2);
//     const browserInfoElement = document.getElementById("browserInfo");
//     browserInfoElement.innerText = browserInfoString;
//   }

//   displayBrowserInfo();