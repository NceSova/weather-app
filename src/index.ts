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
location.getLocationPromise().then((data) => {
  weatherApi.getWeatherObject(data).then((weather) => {
    const hourObjects = weather.forecast.forecastday[0];
    const newGrid = ui.renderHourGrid(
      formatter.getForecastHourObjectArray(hourObjects)
    );
    grid.innerHTML = newGrid.innerHTML;
  });
});
