function searchByUserLocation() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Fulda&appid=efba40eb71a7c7dd297e80454c003ab3&units=metric')
    .then(response => response.json())
    .then(data=> { console.log(data)
        document.getElementById("degree").innerHTML= data.main.temp + "&#8451;"
        document.getElementById("humidity").innerHTML = "Humidity:  " + data.main.humidity
        document.getElementById("wind").innerHTML = "Wind:  " + data.wind.speed
        document.getElementById("cityName").innerHTML= data.name
        document.getElementById("weatherCondition").innerHTML = "(" + data.weather[0].main + ")";
        if (data.weather[0].main == 'Clouds') {
           document.getElementById("appCase").style.backgroundImage = "url('cloudyWeather.jpg')";
        }

        else if (data.weather[0].main == 'clear') {
            document.getElementById("appCase").style.backgroundImage = "url('clearWeather.jpg')";
        }

        else if (data.weather[0].main == 'snowing') {
            document.getElementById("appCase").style.backgroundImage = "url('snowingWeather.jpg')";
        }

        else if (data.weather[0].main == 'rain') {
            document.getElementById("appCase").style.backgroundImage = "url('rainWeather.jpg')";
        } 
    })
}

function searchButton() {
    var searchBox = document.getElementById("textBox").value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchBox+'&appid=efba40eb71a7c7dd297e80454c003ab3&units=metric')
    .then(response => response.json())
    .then(data=> { console.log(data)
        document.getElementById("degree").innerHTML= data.main.temp + "&#8451;"
        document.getElementById("humidity").innerHTML ="Humidity:  " + data.main.humidity
        document.getElementById("wind").innerHTML = "Wind:  " + data.wind.speed
        document.getElementById("cityName").innerHTML= data.name
        document.getElementById("weatherCondition").innerHTML = "(" + data.weather[0].main + ")";
        if (data.weather[0].main == 'Clouds') {
            document.getElementById("appCase").style.backgroundImage = "url('cloudyWeather.jpg')";
         }
 
         else if (data.weather[0].main == 'Clear') {
             document.getElementById("appCase").style.backgroundImage = "url('clearWeather.webp')";
         }
 
         else if (data.weather[0].main == 'snowing') {
             document.getElementById("appCase").style.backgroundImage = "url('snowingWeather.jpg')";
         }
 
         else if (data.weather[0].main == 'rain') {
             document.getElementById("appCase").style.backgroundImage = "url('rainWeather.jpg')";
         } 
    })
}

