const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4fa050906fmsh1e4d77e680bee4dp1eede1jsn0e665daeaec3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) =>{
    cityname.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather('Lahore');

const islamabad = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        Islamabad_temp.innerHTML = response.temp
        Islamabad_feels_like.innerHTML = response.feels_like
        Islamabad_humidity.innerHTML = response.humidity
        Islamabad_min_temp.innerHTML = response.min_temp
        Islamabad_max_temp.innerHTML = response.max_temp
        
    })
    .catch(err => console.error(err));
}
islamabad('Islamabad');

const Tokyo = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        Tokyo_temp.innerHTML = response.temp
        Tokyo_feels_like.innerHTML = response.feels_like
        Tokyo_humidity.innerHTML = response.humidity
        Tokyo_min_temp.innerHTML = response.min_temp
        Tokyo_max_temp.innerHTML = response.max_temp
        
    })
    .catch(err => console.error(err));
}
Tokyo('Tokyo');

const London = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        London_temp.innerHTML = response.temp
        London_feels_like.innerHTML = response.feels_like
        London_humidity.innerHTML = response.humidity
        London_min_temp.innerHTML = response.min_temp
        London_max_temp.innerHTML = response.max_temp
        
    })
    .catch(err => console.error(err));
}
London('London');

const Karachi = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        
        Karachi_temp.innerHTML = response.temp
        Karachi_feels_like.innerHTML = response.feels_like
        Karachi_humidity.innerHTML = response.humidity
        Karachi_min_temp.innerHTML = response.min_temp
        Karachi_max_temp.innerHTML = response.max_temp
        
    })
    .catch(err => console.error(err));
}
Karachi('Karachi');