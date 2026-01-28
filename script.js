// 9a38ce35fa7b14aaf38518ac600e2a0b
// 9a38ce35fa7b14aaf38518ac600e2a0b
let temp = document.querySelector(".temp")
let tempmax = document.querySelector(".tempmax")
let tempmin = document.querySelector(".tempmin")
let input = document.querySelector(".input")
let btn = document.querySelector(".btn")

const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric"
const api = "9a38ce35fa7b14aaf38518ac600e2a0b"

function put(data) {
    temp.innerHTML = `temp is ${data.main.temp}`
    tempmin.innerHTML =`min temp ${data.main.temp_min}` 
    tempmax.innerHTML = `max temp ${data.main.temp_max}`
}

async function getdata() {
    let city = input.value.trim()
    const response = await fetch(url + `&q=${city}` + `&appid=${api}`)
    let data = await response.json()
    console.log(data)
    put(data)
}

btn.addEventListener("click", () => {
    getdata()
})





