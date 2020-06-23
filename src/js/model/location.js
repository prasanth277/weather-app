class Location {
  constructor() {
    this.lat = "";
    this.long = "";
  }

  //   getLocationLatitudeAndLongitude() {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.lat = position.coords.latitude;
  //       this.long = position.coords.longitude;
  //     });
  //     console.log("object", this.lat, this.long);
  //     return [this.lat, this.long];
  //   }

  async getLocationDetails() {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02"
      );
      const data = await response.json();
      console.log(data[0]);
    } catch (error) {
      console.log(error);
    }
  }
  //   fetch(
  //       "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2295414/"
  //     ).then((result) => {
  //       console.log("object", result.json());
  //     });
}

export default Location;
