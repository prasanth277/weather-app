class Location {
  constructor() {}

  getLocationLatitudeAndLongitude(setLocation) {
    this.lat = "";
    this.long = "";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      });
    }
    console.log("object", this.lat);
  }

  async getLocationDetails() {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02"
      );
      this.data = await response.json();
      console.log(this.data);
    } catch (error) {
      console.log(error);
    }
  }

  async getFiveDaysWeather() {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2295414/"
      );
      const data = await response.json();
      this.nextFiveDaysWeather = data.consolidated_weather;
      this.locationDetails = {
        city: data.title,
        country: data.parent.title,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getWeatherOfTheDay() {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2295414/2020/6/24/"
      );
      const data = await response.json();
      this.currentWeather = data[0];
    } catch (error) {
      console.log(error);
    }
  }
}

export default Location;
