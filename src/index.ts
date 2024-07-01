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

location.getLocationPromise().then((data) => {
  //displayWeather(data);
});

function displayWeather(location: string) {
  weatherApi.getWeatherObject(location).then((weather) => {
    city.textContent = weather.location.name;
    curTemp.textContent = `${weather.current.temp_c.toFixed()}°`;
    logo.src = `http:${weather.current.condition.icon.replace(
      "64x64",
      "128x128"
    )}`;
    const hourObjects = weather.forecast.forecastday[0];
    const newGrid = ui.renderHourGrid(
      formatter.getForecastHourObjectArray(hourObjects)
    );
    grid.innerHTML = newGrid.innerHTML;
  });
}
