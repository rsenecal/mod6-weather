/*!
* Start Bootstrap - Blog Home v5.0.8 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

var cityName = document.getElementById("cityname");
var featureDate = document.getElementById("feature-date");
var featureTemp = document.getElementById("feature-temp");
var featureWind = document.getElementById("feature-wind");
var featurehumidity = document.getElementById("feature-humidity");
var iconUrl = "http://openweathermap.org/img/w/"  // To get the icon append the icon code from the api [list[i].weather[i].icon] + .png
var fetchButton = document.getElementById('button-search');

function getApi() {
    var apiBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
    var lat = 34.0901;
    var lon = -118.4065;
    var key = '120dfc7665d00ade68ea83f0ab620c2a';
    var requestUrl = apiBaseUrl.concat('lat=',lat,'&lon=',lon,"&appid=", key, "&units=imperial");

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
       var weatherData = data;
        console.log("Length of data set; " + weatherData.list.length);
        console.log(weatherData.list); //Getting the temperature
        console.log(weatherData.list[0].dt_txt);
        var todaysDate = weatherData.list[0].dt_txt;
        var todaysTemp = weatherData.list[0].main.temp;
        var todaysHumidity = weatherData.list[0].main.humidity;
        var weather_description = weatherData.list[0].weather[0].description;
        var weather_main = weatherData.list[0].weather[0].main;
        var weather_icon = weatherData.list[0].weather[0].icon
        var windSpeed = weatherData.list[0].wind.speed

        console.log("Todays Date" + todaysDate);
        featureDate.textContent = "Date: " + todaysDate;
        featureTemp.textContent = "Today's Temperature: " + todaysTemp;
        featureWind.textContent = "Current Wind Speed: " + windSpeed;
        featurehumidity.textContent = "Huminity: " + todaysHumidity;

        dataLength = weatherData.list.length;
      }
    );
}


fetchButton.addEventListener('click', getApi);


      // Date we want to display from the JSON
      // Location Name
      //  Temp
    //   Wind Speed
    // Humidity
    // 5 days of data

    //   var listUsers = document.createElement("p");
    //   // listUsers.textContent = data[i].login;
    //   listUsers.textContent = data[i].html_url;
    //   // console.log("data array: " + data[i]);
    //   userContainer.appendChild(listUsers);
    //   // TODO: Loop through the data and generate your HTML
