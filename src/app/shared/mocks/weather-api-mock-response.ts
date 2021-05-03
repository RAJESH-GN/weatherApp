import {WeatherApiResponse} from '../../widget/models/weather-api-response';

export const weatherApiMockResponse: WeatherApiResponse = {
    coord: {lon: 4.4792, lat: 51.9225},
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    base: 'stations',
    main: {
      temp: 6.09,
      feels_like: 3.13,
      temp_min: 4.44,
      temp_max: 7.22,
      pressure: 1020,
      humidity: 81,
    },
    visibility: 10000,
    wind: {speed: 4.12, deg: 210},
    clouds: {all: 100},
    dt: 1620008971,
    sys: {
      type: 1,
      id: 1541,
      country: 'NL',
      sunrise: 1620014914,
      sunset: 1620068952,
    },
    timezone: 7200,
    id: 2747891,
    name: 'Rotterdam',
    cod: 200,
  };
