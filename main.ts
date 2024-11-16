const inputBox = document. querySelector(".input-box") as HTMLInputElement
const searchBtn = document. querySelector("#searchBtn") as HTMLButtonElement
const weather_img = document. querySelector(".weather-img") as HTMLImageElement
const temperature = document. querySelector(".temperature") as HTMLParagraphElement
const description = document. querySelector(".description") as HTMLParagraphElement
const humidity = document. querySelector(" #humidity") as HTMLSpanElement
const wind_speed = document. querySelector(" #wind-speed") as HTMLSpanElement
const weather_body = document. querySelector(".weather-body") as HTMLDivElement

async function cheackWeather (city){
    const api_key = "934e2c11d1839a633883079306e072a7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response => response.json())


    weather_body.style.display = "flex"
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/H`

    switch(weather_data.weather[0].main){
        case "Clouds":
            weather_img.src = "assets/cloud.png"
            break
        case "Clear":
            weather_img.src = "assets/clear.png"
            break
        case "Rain":
            weather_img.src = "assets/rain.png"
            break
        case "Mist":
            weather_img.src = "assets/mist.png"
            break
        case "Snow":
            weather_img.src = "assets/snow.png"
            break
    }
    
}
searchBtn.addEventListener("click", ()=>{
    cheackWeather(inputBox.value)
})