import {WeatherObject} from "./interfaces";

interface LocationProvider {
  getLocationPromise(): Promise<string>;
}
export class GeoLocationProvider implements LocationProvider {
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

interface WeatherApiProvider {
  locationProvider: LocationProvider;
  getWeatherObjectPromise(): Promise<WeatherObject>;
}
export class OpenWeatherApiProvider implements WeatherApiProvider {
  locationProvider: LocationProvider;
  constructor(locationProvider: LocationProvider) {
    this.locationProvider = locationProvider;
  }

  async getWeatherObjectPromise() {
    const location = await this.locationProvider.getLocationPromise();
    const weatherData = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e48d2da8b8924f60876111321231306&q=${location}&days=3&aqi=no&alerts=no&lang=ru`,
      {mode: "cors"}
    );
    const weatherObject = await weatherData.json();
    console.log("weather object resolved");
    return weatherObject as WeatherObject;
  }
}
