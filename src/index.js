let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hour}:${minute}`;

function tempC() {
  let tempHead = document.querySelector("#tempHeading");
  tempHead.innerHTML = `16`;
}
let temperature = document.querySelector("#celcius");
temperature.addEventListener("click", tempC);
function tempF() {
  let tempHead = document.querySelector("#tempHeading");
  tempHead.innerHTML = `49`;
}
let temperatureF = document.querySelector("#fahrenheit");
temperatureF.addEventListener("click", tempF);

function showTemperature(response) {
  console.log(response);
  console.log(response.data);
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelectorAll("#tempHeading").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-butt").value;
  searchCity(city);
}
let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);
searchCity("New york");
