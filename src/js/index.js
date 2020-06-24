import Location from "./model/location";
import { updateWeatherUI, renderLoader } from "./view/weatherView";

const state = {
  lat: "",
  long: "",
  setLocation: (lat, long) => {
    this.lat = lat;
    this.long = long;
    console.log(lat, long);
  },
};

const getCurrentWeather = async () => {
  state.location = new Location();
  renderLoader();

  await state.location.getWeatherOfTheDay();

  await state.location.getFiveDaysWeather();

  updateWeatherUI(
    state.location.currentWeather,
    state.location.locationDetails
  );
};

window.onload = getCurrentWeather;
