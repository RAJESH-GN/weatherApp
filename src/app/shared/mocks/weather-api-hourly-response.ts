import { WeatherHourlyResponse } from '../../widget/models/weather-hourly-response';

export const weatherApiHourlyResponse: WeatherHourlyResponse = {
  lat: 52.374,
  lon: 4.8897,
  timezone: 'Europe/Amsterdam',
  timezone_offset: 7200,
  hourly: [
    {
      dt: 1620014400,
      temp: 6.42,
      feels_like: 3.57,
      pressure: 1018,
      humidity: 84,
      dew_point: 3.92,
      uvi: 0,
      clouds: 36,
      visibility: 10000,
      wind_speed: 4.07,
      wind_deg: 201,
      wind_gust: 10.63,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      pop: 0.04,
    },
  ],
};
