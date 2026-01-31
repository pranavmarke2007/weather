const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
const key = "9a38ce35fa7b14aaf38518ac600e2a0b"

let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let temp = document.querySelector(".temp")
let min = document.querySelector(".min")
let max = document.querySelector(".max")
let hum = document.querySelector(".hum")
let images = document.querySelector(".images")
let temperature = document.querySelector(".temperature")
let humm = document.querySelector(".humm")
let maxx = document.querySelector(".maxx")
let minn = document.querySelector(".minn")
let weather = document.querySelector(".weather")
async function check() {
    let city = input.value
    let response = await fetch(url + `&q=${city}` + `&appid=${key}`)
    let data = await response.json()
    console.log(data)

    checking(data)
}

btn.addEventListener("click", () => {
    check()
}
)

function checking(data) {
    if (data.message == "city not found") {
        alert("city not found")
        weather.style.display="none"
    }
    else {
        weather.style.display="block";
        temperature.innerHTML = ` ${data.main.temp}°C `
        minn.innerHTML=(`${data.main.temp_min}°C `)
        maxx.innerHTML=(`${data.main.temp_max}°C `)
        humm.innerHTML=(`${data.main.humidity} `)
        if (data.main.temp<0) {
            images.src="images/lessthan0.png"
        }
        else if(data.main.temp>0 && data.main.temp<10){
            images.src="images/lessthan10.png"
        }
        else if(data.main.temp>10 && data.main.temp<20){
            images.src="images/lessthan20.png"
        }
        else {
            images.src="images/lessthan40.png"
        }
    }
}
