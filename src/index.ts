import {
  GeoLocationProvider,
  OpenWeatherApiFormatter,
  OpenWeatherApiProvider,
  UIRenderer,
} from "./Classes";
import "./index.css";
import {Forecastday} from "./interfaces";

const weatherApi = new OpenWeatherApiProvider();
const location = new GeoLocationProvider();
const ui = new UIRenderer(document);
const formatter = new OpenWeatherApiFormatter(ui);
const grid = document.querySelector(".forecast-grid");
const city = document.querySelector(".city");
const curTemp = document.querySelector(".cur-temp");
const logo = document.querySelector(".weather-logo") as HTMLImageElement;
const feelslike = document.querySelector(".feelslike");
const speed = document.querySelector(".speed");
const chance = document.querySelector(".chance");
const index = document.querySelector(".index");
const search = document.querySelector(".search-box input") as HTMLInputElement;

location
  .getLocationPromise()
  .then((data) => {
    displayWeather(data);
  })
  .catch((error) => {
    displayWeather("Rostov-on-Don");
  });

search.addEventListener("change", (e) => {
  const city = search.value;
  displayWeather(city);
  search.value = "";
});

function displayWeather(location: string) {
  weatherApi.getWeatherObject(location).then((weather) => {
    city.textContent = weather.location.name;
    curTemp.textContent = `${weather.current.temp_c.toFixed()}°`;
    logo.src = `https:${weather.current.condition.icon.replace(
      "64x64",
      "128x128"
    )}`;

    feelslike.textContent = `${weather.current.feelslike_c}°`;
    speed.textContent = `${weather.current.wind_kph} км/ч`;
    chance.textContent = `${weather.current.humidity}%`;
    index.textContent = `${weather.current.uv}`;

    const hourObjects = weather.forecast.forecastday[0];
    const newGrid = ui.renderHourGrid(
      formatter.getForecastHourObjectArray(
        hourObjects,
        weather.location.localtime_epoch
      )
    );
    grid.innerHTML = newGrid.innerHTML;
  });
}
