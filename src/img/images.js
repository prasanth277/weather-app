export const images = {
  sun: "https://img.icons8.com/ios-glyphs/60/000000/sun.png",
  snow: "https://img.icons8.com/ios-filled/100/000000/snow.png",
  sleet: "https://img.icons8.com/ios-filled/100/000000/sleet.png",
  hail: "https://img.icons8.com/ios-filled/100/000000/hail.png",
  thunderstorm: "https://img.icons8.com/ios-filled/96/000000/storm.png",
  heavyRain: "https://img.icons8.com/ios-filled/96/000000/rain.png",
  lightRain: "https://img.icons8.com/ios-glyphs/90/000000/heavy-rain.png",
  showers: "https://img.icons8.com/ios-filled/90/000000/partly-cloudy-rain.png",
  heavyClouds: "https://img.icons8.com/ios-filled/100/000000/clouds.png",
  lightcolud: "https://img.icons8.com/ios-glyphs/96/000000/snowy-sunny-day.png",
  sun: "https://img.icons8.com/ios-filled/96/000000/sun.png",
};

export const weatherDetails = {
  airPressure: "https://img.icons8.com/ios-filled/100/000000/pressure.png",
  humidity: "https://img.icons8.com/ios-filled/100/000000/humidity.png",
  time: "https://img.icons8.com/ios-filled/96/000000/time.png",
  location:
    "https://img.icons8.com/ios-filled/96/000000/connection-status-on.png",
};

export const getWeatherIcon = (weather) => {
  switch (weather) {
    case "sn":
      return images.snow;
    case "sl":
      return images.sleet;
    case "h":
      return images.hail;
    case "t":
      return images.thunderstorm;
    case "hr":
      return images.heavyRain;
    case "lr":
      return images.lightRain;
    case "s":
      return images.showers;
    case "hc":
      return images.heavyClouds;
    case "lc":
      return images.lightcolud;
    case "c":
      return images.sun;
    default:
      break;
  }
};
