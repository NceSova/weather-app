import {Day, Forecastday, Hour, WeatherObject} from "./interfaces";

interface LocationProviderInterface {
  getLocationPromise(): Promise<string>;
}
export class GeoLocationProvider implements LocationProviderInterface {
  async getLocationPromise(): Promise<string> {
    return new Promise(function (resolve, reject) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log("getLocation() resolved");
          resolve(`${position.coords.latitude},${position.coords.longitude}`);
        });
      } else {
        reject("Geolocation is not available");
      }
    });
  }
}

interface WeatherApiProviderInterface {
  getWeatherObject(location: string): Promise<WeatherObject>;
}
export class OpenWeatherApiProvider implements WeatherApiProviderInterface {
  async getWeatherObject(location: string) {
    const weatherData = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e48d2da8b8924f60876111321231306&q=${location}&days=3&aqi=no&alerts=no&lang=ru`,
      {mode: "cors"}
    );
    const weatherObject = await weatherData.json();
    console.log("weather object resolved");
    return weatherObject as WeatherObject;
  }
}
interface UIRendererInterface {
  getHourDiv(hour: HourObject): HTMLDivElement;
}
export class UIRenderer implements UIRendererInterface {
  document: Document;
  constructor(document: Document) {
    this.document = document;
  }
  getHourDiv(hour: HourObject) {
    const hourDiv = this.document.createElement("div");
    hourDiv.className = "hour-container";

    const hourText = this.document.createElement("div");
    hourText.textContent = hour.time;
    hourText.className = "hour-text";

    const hourIcon = this.document.createElement("img");
    hourIcon.src = hour.icon;
    hourIcon.className = "hour-icon";

    const hourTemp = this.document.createElement("div");
    hourTemp.textContent = hour.temp;
    hourTemp.className = "hour-temp";
    hourDiv.appendChild(hourText);
    hourDiv.appendChild(hourIcon);
    hourDiv.appendChild(hourTemp);
    return hourDiv;
  }
  renderHourGrid(hours: HourObject[]) {
    const grid = this.document.createElement("div");
    hours.forEach((item) => {
      grid.appendChild(this.getHourDiv(item));
    });
    return grid;
  }
}

interface HourObject {
  time: string;
  icon: string;
  temp: string;
}

export class OpenWeatherApiFormatter {
  ui: UIRendererInterface;
  constructor(ui: UIRendererInterface) {
    this.ui = ui;
  }
  formatTimeToDate(UNIX_timestamp: number) {
    return new Date(UNIX_timestamp * 1000);
  }
  getHour(hour: Hour) {
    return {
      time: `${this.formatTimeToDate(hour.time_epoch).getHours()}:00`,
      icon: `http:${hour.condition.icon}`,
      temp: `${hour.temp_c.toFixed()}°`,
    } as HourObject;
  }
  getHoursArray(hours: Hour[], curDate: Date) {
    return hours.filter(
      (hour) =>
        this.formatTimeToDate(hour.time_epoch).getHours() >= curDate.getHours()
    );
  }
  getHourObjectArray(hours: Hour[]) {
    const hourObjectArray = new Array<HourObject>();
    hours.forEach((item) => {
      hourObjectArray.push(this.getHour(item));
    });
    return hourObjectArray;
  }
  getForecastHourObjectArray(day: Forecastday) {
    const hoursArray = day.hour;
    const filteredHour = this.getHoursArray(hoursArray, new Date());
    return this.getHourObjectArray(filteredHour);
  }
}
