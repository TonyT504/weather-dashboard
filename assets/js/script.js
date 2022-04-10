var inputBox = document.getElementById("city-term");
var forecastContainer = document.querySelector("#forecast-row");

var forecastEl = document.createElement("div");



var searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var city = inputBox.value;
    console.log(city)
    var savedCities = [];
    savedCities.push(city)
    console.log(savedCities)
    getWeather(city);
    getGeoApi(city);
})

function getWeather(location) {
    console.log(location)
    var latitude = location.lat
    console.log(latitude)
    var longitude = location.lon
    console.log(longitude)
    var weatherApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&units=imperial&appid=00c7035e39f44f6671b175e92362bea4`
    

    fetch(weatherApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    
        forecastContainer.appendChild(forecastEl)
        console.log(data);
        weatherDisplay(data);
    })
    
}

function getGeoApi(city) {
    var geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=00c7035e39f44f6671b175e92362bea4`;

    fetch (geoApiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        getWeather(data[0]);
    })
 
    
}

function weatherDisplay(data){
    var temp = data.current.temp
    var tempEl = document.createElement ("p")
    var humidity = data.current.humidity
    var humidityEl = document.createElement("p")



    forecastContainer.appendChild(humidityEl)
    humidityEl.innerHTML = humidity
    forecastContainer.appendChild(tempEl)
    tempEl.innerHTML = temp

    console.log(temp)
    
}

