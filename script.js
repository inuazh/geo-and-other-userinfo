let info = new userinfo();

// Функция для отображения данных на странице
async function displayData() {
  // Получаем данные и сохраняем их в переменные
  let pageOn = await info.pageOn();
  let referrer = await info.referrer();
  let previousSites = await info.previousSites();
  let dataCookies = await info.dataCookies();
  let dataStorage = await info.dataStorage();
  let sizeScreen = await info.sizeScreen();
  let battery = await info.battery();
  let ip = await info.ip();

  // Отображаем данные на странице
  document.getElementById("pageOn").innerText = "Page On: " + pageOn;
  document.getElementById("referrer").innerText = "Referrer: " + referrer;
  document.getElementById("previousSites").innerText = "Previous Sites: " + previousSites;
  document.getElementById("dataCookies").innerText = "Data Cookies: " + dataCookies;
  document.getElementById("dataStorage").innerText = "Data Storage: " + dataStorage;
  document.getElementById("sizeScreen").innerText = "Screen Size: " + sizeScreen;
  document.getElementById("battery").innerText = "Battery: " + battery;
  document.getElementById("ip").innerText = "IP Address: " + ip;
}

// Вызываем функцию для отображения данных
displayData();