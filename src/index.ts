import "./index.css";

interface WeatherObject {
  city: string;
  currentTemperature: number;
  currentText: string;
  currentIcon: string;
  feelsLikeTemp: number;
}

function getLocation() {
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

async function getWeather() {
  const location = await getLocation();
  const weatherData = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=e48d2da8b8924f60876111321231306&q=${location}&days=3&aqi=no&alerts=no&lang=ru`,
    {mode: "cors"}
  );
  const weatherObject = await weatherData.json();
  console.log(weatherObject);
  return {
    city: weatherObject.location.name,
    currentTemperature: weatherObject.current.temp_c,
    currentText: weatherObject.current.condition.text,
    currentIcon: weatherObject.current.condition.icon,
    feelsLikeTemp: weatherObject.current.feelslike_c,
  } as WeatherObject;
}
