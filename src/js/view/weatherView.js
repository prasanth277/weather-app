import { getWeatherIcon } from "../../img/images";

const weekNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getFormattedDate = (date) => {
  const time = date.substring(11, 16).split(":");
  if (time[0] <= 12) {
    return `${date.substring(11, 16)} am`;
  } else {
    return `${time[0] - 12}:${time[1]} pm`;
  }
};

export const updateWeatherUI = (weather, location) => {
  const date = new Date();

  const html = `<div class="appBody">
    <div id="locationView">
      <div class="details">
        <img
          src="https://img.icons8.com/ios-filled/96/000000/connection-status-on.png"
          class="locationIconStyle"
        />
        <span id="locationName">${location.city},${location.country}</span>
      </div>
      <span id="lastUpdatedTime">${
        weekNames[date.getDay()]
      }, ${getFormattedDate(weather.created)}</span>
      <span id="weatherType">${weather.weather_state_name}</span>
    </div>
    <div class="weatherDetailsView">
      <div class="temparatureDetails">
        <div class="temparatureView">
          <img
            src=${getWeatherIcon(weather.weather_state_abbr)}
            class="weatherIcon"
          />
          <span id="temparature">${Math.floor(weather.the_temp)}</span>
          <span id="temparatureFormat">°C</span>
        </div>
        <div class="temparatureView">
          <span id="minTemp">min: ${Math.floor(weather.min_temp)}°C</span>
          <span id="maxTemp">max: ${Math.floor(weather.max_temp)}°C</span>
        </div>
      </div>
      <div class="weatherInfo">
        <div class="details">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/humidity.png"
            class="iconStyle"
          />
          <span id="humidity">Humidity: ${weather.humidity}%</span>
        </div>
        <div class="details">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/pressure.png"
            class="iconStyle"
          />
          <span id="airPressure">Air pressure: ${Math.floor(
            weather.air_pressure
          )} Pa</span>
        </div>
        <div class="details">
          <img
            src="https://img.icons8.com/ios-filled/100/000000/wind.png"
            class="iconStyle"
          />
          <span id="wind">Wind: ${Math.floor(weather.wind_speed)} kmph</span>
        </div>
      </div>
    </div>
  </div>`;

  document
    .getElementsByClassName("body")[0]
    .insertAdjacentHTML("afterbegin", html);
  removeLoader();
};

export const renderLoader = () => {
  const loader = "<h1 id='loader'>Loader...</h1>";
  document
    .getElementsByClassName("body")[0]
    .insertAdjacentHTML("afterbegin", loader);
};

export const removeLoader = () => {
  document.getElementById("loader").remove();
};
