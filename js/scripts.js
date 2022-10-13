/*!
* Start Bootstrap - Blog Home v5.0.8 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

var key = '120dfc7665d00ade68ea83f0ab620c2a';

// Curent Days DATA
// var cityName = document.getElementById("cityname");
var featureDate = document.getElementById("feature-date");
var featureTemp = document.getElementById("feature-temp");
var featureWind = document.getElementById("feature-wind");
var featurehumidity = document.getElementById("feature-humidity");


// DAY1 Variables
var featureDate1 = document.getElementById("day1-date");
var featureTemp1 = document.getElementById("day1-feature-temp");
var featureWind1 = document.getElementById("day1-feature-wind");
var featurehumidity1 = document.getElementById("day1-feature-humidity");
var weatherIcon =document.getElementById("weather_image-1");

// DAY2 Variables
var featureDate2 = document.getElementById("day2-date");
var featureTemp2 = document.getElementById("day2-feature-temp");
var featureWind2 = document.getElementById("day2-feature-wind");
var featurehumidity2 = document.getElementById("day2-feature-humidity");
var weatherIcon2 =document.getElementById("weather_image-2");


// DAY3 Variables
var featureDate3 = document.getElementById("day3-date");
var featureTemp3 = document.getElementById("day3-feature-temp");
var featureWind3 = document.getElementById("day3-feature-wind");
var featurehumidity3 = document.getElementById("day3-feature-humidity");
var weatherIcon3 =document.getElementById("weather_image-3");


// DAY4 Variables
var featureDate4 = document.getElementById("day4-date");
var featureTemp4 = document.getElementById("day4-feature-temp");
var featureWind4 = document.getElementById("day4-feature-wind");
var featurehumidity4 = document.getElementById("day4-feature-humidity");
var weatherIcon4 =document.getElementById("weather_image-4");


// DAY5 Variables
var featureDate5 = document.getElementById("day5-date");
var featureTemp5 = document.getElementById("day5-feature-temp");
var featureWind5 = document.getElementById("day5-feature-wind");
var featurehumidity5 = document.getElementById("day5-feature-humidity");
var weatherIcon5 =document.getElementById("weather_image-5");

var iconUrl = "http://openweathermap.org/img/w/"  // To get the icon append the icon code from the api [list[i].weather[i].icon] + .png
var fetchButton = document.getElementById('button-search');

var geoLat = 0;
var geoLon = 0;

var cityName ='';

function getLatLon() {
var geoAPI = 'https://api.openweathermap.org/geo/1.0/direct?q='
cityName = document.getElementById("cityname").value;
var searchCity = "'" + cityName + "'";
console.log("Name of the city: " + cityName);

geoRequestURL = geoAPI + searchCity +'&limit=5&appid=' + key; 
fetch(geoRequestURL)
  .then(function (response){
    return response.json();
  })
  .then(function(data){
    var geoData = data;
    geoLat = geoData[0].lat;
    geoLon = geoData[0].lon;
  })
  // return [geolat, geolon]
}

function getApi() {
  getLatLon();
    var apiBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
    // var lat = 34.0901;
    // var lon = -118.4065;
    // var key = '120dfc7665d00ade68ea83f0ab620c2a';

    var requestUrl = apiBaseUrl.concat('lat=',geoLat,'&lon=',geoLon,"&appid=", key, "&units=imperial");

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
       var weatherData = data;
        console.log("Length of data set; " + weatherData.list.length);
        console.log(weatherData.list); //Getting the temperature
        console.log(weatherData.list[0].dt_txt);

        //Current Date
        var todaysDate = weatherData.list[0].dt_txt;
        var event = new Date(todaysDate);
        var currentDate = event.toDateString();
        var todaysTemp = weatherData.list[0].main.temp;
        var todaysHumidity = weatherData.list[0].main.humidity;
        // var weather_description = weatherData.list[0].weather[0].description;
        // var weather_main = weatherData.list[0].weather[0].main;
        var weather_icon = weatherData.list[0].weather[0].icon
        var windSpeed = weatherData.list[0].wind.speed

        // console.log("Todays Date" + todaysDate);
        featureDate.textContent = cityName + " " + currentDate;
        featureTemp.textContent = "Temperature: " + todaysTemp;
        featureWind.textContent = "Wind Speed: " + windSpeed;
        featurehumidity.textContent = "Huminity: " + todaysHumidity;

        //  Day 1

        var todaysDate1 = weatherData.list[6].dt_txt;
        var event1 = new Date(todaysDate1);
        var currentDate1 = event1.toDateString();
        var todaysTemp1 = weatherData.list[6].main.temp;
        var todaysHumidity1 = weatherData.list[6].main.humidity;
        var weather_icon1 = weatherData.list[6].weather[0].icon
        var windSpeed1 = weatherData.list[6].wind.speed
      

        // console.log("Todays Date" + todaysDate);
        featureDate1.textContent = currentDate1;
        featureTemp1.textContent = "Temperature: " + todaysTemp1;
        featureWind1.textContent = "Wind Speed: " + windSpeed1;
        featurehumidity1.textContent = "Huminity: " + todaysHumidity1;
        weatherIcon.src = iconUrl + weather_icon1 + ".png";




        //  Day 2

        var todaysDate2 = weatherData.list[14].dt_txt;
        var event2 = new Date(todaysDate2);
        var currentDate2 = event2.toDateString();
        var todaysTemp2 = weatherData.list[14].main.temp;
        var todaysHumidity2 = weatherData.list[14].main.humidity;
        var weather_icon2 = weatherData.list[14].weather[0].icon
        var windSpeed2 = weatherData.list[14].wind.speed
      

        // console.log("Todays Date" + todaysDate);
        featureDate2.textContent = currentDate2;
        featureTemp2.textContent = "Temperature: " + todaysTemp2;
        featureWind2.textContent = "Wind Speed: " + windSpeed2;
        featurehumidity2.textContent = "Huminity: " + todaysHumidity2;
        weatherIcon2.src = iconUrl + weather_icon2 + ".png";




         //  Day 3

         var todaysDate3 = weatherData.list[22].dt_txt;
         var event3 = new Date(todaysDate3);
         var currentDate3 = event3.toDateString();
         var todaysTemp3 = weatherData.list[22].main.temp;
         var todaysHumidity3 = weatherData.list[22].main.humidity;
         var weather_icon3 = weatherData.list[22].weather[0].icon
         var windSpeed3 = weatherData.list[22].wind.speed
       
 
         // console.log("Todays Date" + todaysDate);
         featureDate3.textContent = currentDate3;
         featureTemp3.textContent = "Temperature: " + todaysTemp3;
         featureWind3.textContent = "Wind Speed: " + windSpeed3;
         featurehumidity3.textContent = "Huminity: " + todaysHumidity3;
         weatherIcon3.src = iconUrl + weather_icon3 + ".png";


         //  Day 4

         var todaysDate4 = weatherData.list[30].dt_txt;
         var event4 = new Date(todaysDate4);
         var currentDate4 = event4.toDateString();
         var todaysTemp4 = weatherData.list[30].main.temp;
         var todaysHumidity4 = weatherData.list[30].main.humidity;
         var weather_icon4 = weatherData.list[30].weather[0].icon
         var windSpeed4 = weatherData.list[30].wind.speed
       
 
         // console.log("Todays Date" + todaysDate);
         featureDate4.textContent = currentDate4;
         featureTemp4.textContent = "Temperature: " + todaysTemp4;
         featureWind4.textContent = "Wind Speed: " + windSpeed4;
         featurehumidity4.textContent = "Huminity: " + todaysHumidity4;
         weatherIcon4.src = iconUrl + weather_icon4 + ".png";



         //  Day 5

         var todaysDate5 = weatherData.list[38].dt_txt;
         var event5 = new Date(todaysDate5);
         var currentDate5 = event5.toDateString();
         var todaysTemp5 = weatherData.list[38].main.temp;
         var todaysHumidity5 = weatherData.list[38].main.humidity;
         var weather_icon5 = weatherData.list[38].weather[0].icon
         var windSpeed5 = weatherData.list[38].wind.speed
       
 
         // console.log("Todays Date" + todaysDate);
         featureDate5.textContent = currentDate5;
         featureTemp5.textContent = "Temperature: " + todaysTemp5;
         featureWind5.textContent = "Wind Speed: " + windSpeed5;
         featurehumidity5.textContent = "Huminity: " + todaysHumidity5;
         weatherIcon5.src = iconUrl + weather_icon5 + ".png";


        // dataLength = weatherData.list.length;
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
