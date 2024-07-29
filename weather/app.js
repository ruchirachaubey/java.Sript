const apiKey = "57672c6262bd9a44df75aaad1dac2bae";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
     const response = await fetch(apiURL + city +`&appid=${apiKey}`);
     var data = await response.json();
     console.log(data);

     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
     document.querySelector(".city").innerHTML = data.name;

     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/Hr";

     //updating the image

     if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
     }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
     }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="images/clear.png";
    }
      else  if(data.weather[0].main == "Drizzle"){
            weatherIcon.src ="images/drizzle.png";
     }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src ="images/snow.png";
     }
     else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="images/mist.png";


    document.querySelector(".Weather").style.display = "block";
}
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

//checkWeather(city);
