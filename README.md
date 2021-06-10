# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.x.

1.Angular Version **11.2.5**
2.Node Version **14.15.3**

## Summary

The Application displays the Weatherinformation of the 5 cities within Europe namely (Amsterdam, Paris, Berlin, London, Madrid).Using OpenMapWeatherApi(https://openweathermap.org/api) API

App displays

# Quick View Card:

- Name of City
- Last Updated time
- Temperature
- Climate Type
- Wind speed
- Feels Like
- Atmospheric Pressure
- Clouds
- Icon which indicates the Temperature Currently
- Max/Min temperatures

On Click of the Card you can see hourly temperature information of the city

- Time
- Temperature
- Windspeed
- Icon indicating temperature
- Next Button which opens the next card information

## Demo:

I have also implemented and used

- Angular Material
- interceptors
- Error Handler

## App Structure

1.  **Shared Module**: All the common information which can be shared across all the modules are put in this Module/Folder.

    # Components:

        - weather-Icon : Used acreoss to show icons of temperature.

    # Pipes:

        - temperature: To show temperature passed in degree celsius.

    # Services:

        - request-interceptors: Which add the appId for all the request going out of the application.

    # mocks:

        - Mocked responses used in Unit tests which will not be bundled in Dev/Prod(By Tree Shaking).

2.  **Material Module**: Has all the material related modules stored in one place and can be imported by any module needing it.

3.  **Widget Module**: Has the widget Components in a lazy loaded manner and decoupled from the root for future purpose.Ex: to land user on a different page can be done easily.

    # Components:

        |- weatherinfo-widget-list: holds all the names of the cities and fetches temperature info for those cities and passes it to weatherinfo-widget to show cards.

            |- weatherinfo-widget: holds the expansion panel which is shown to the user receives the data from the weatherinfo-widget-list component and shows the details to user.

                |- expansion-title: Holds the title details of the expansion-title

                |- expansion-description: Holds the additional info description of expansion panel.

                    |- expansion-additionalInfo: Holds more info to show on the expansion-panel

                    |- expansion-averageTemperature: Holds information on the average temperature in expansion Panel.

        |- weatherinfo-hourly-details: Shows the information for the next few hours on click of the weatherinfo-widget.

    # services:

        |- weather-details-service: Holds the methods to interact with the OpenWeatherApi

            |- getWeatherWithCity: gets the current Temperature of the city passed in. It passes the Queryparams units as metrics to receive data in celcius.
                 @param city cityName
                 @returns Observable<WeatherApiResponse>

            |- getHourlyInfoOfCity: gets the Hourly info of the city by taking the lat and lon of the city.
               -QueryParams: exclude=daily,current,minutely,alerts and units=metrics
                @param lat Latitude of the city
                @param lon Longitude of the City
                @returns Observable<WeatherHourlyResponse>

4.  **App Module**: App Module only holds the logic to show the header information assuming headers to be common for the whole app.

If you have any questions feel free to contact me rajeshgn821@gmail.com.

## Can be improved

1. Error Handling with an error page to show something went wrong Try again later
2. Check responsiveness of UI with Multiple Viewports and devices.
3. E2E testing
4. Error Handling

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Screenshots:

- Added UnitTestCoverage for all the files in the project
- Weather Application screenshot

## Application deployed

- on a Firebase server https://weatherapp-cb0f6.web.app

## Built With ❤

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex layout](https://github.com/angular/flex-layout)
- [Jasmin](https://jasmine.github.io/)
- [Karma](https://karma-runner.github.io/latest/index.html)
- [HTML](https://www.w3.org/html/)
- [SCSS](https://sass-lang.com/)
- [TypeScript](http://www.typescriptlang.org/)

## Icons

- [FlatIcons] https://www.flaticon.com/

## Author

- Naga Rajesh Gaddale
