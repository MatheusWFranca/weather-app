import getCityWeather from "./weather.js"

const form = document.querySelector('[data-js="change-location"]')
const card = document.querySelector('.card')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const city = await getCityWeather(inputValue)
  console.log(city)
  getCityName(city)
  getCityTemperature(city)
  isDayOrNight(city)
  addWeatherIcon(city)
  card.style.display = 'block'
  form.reset()
})



const getCityName = ({ name, sys }) => {
  const cityParagraph = document.querySelector('.my-3')
  cityParagraph.textContent = `${name}, ${sys.country}`
}

const getCityTemperature = ({ main, weather }) => {
  const tempParagraph = document.querySelector('.my-4 > span')
  const description = document.querySelector('.my-3 > div')

  const temperature = Math.floor(main.temp)
  description.textContent = `${weather[0].description}`
  tempParagraph.textContent = temperature
}

const addWeatherIcon = ({ weather }) => {
  const details = document.querySelector('[data-js=time-icon]')
  console.log(details)
  details.innerHTML =
    `
    <img class="icon" src="./src/icons/${weather[0].icon}.png">
    `
}

const isDayOrNight = ({ weather }) => {
  const dayTime = weather[0].icon
  const cardImage = document.querySelector('.card-img-top')


  dayTime.includes('d') ?
    cardImage.setAttribute('src', './src/day.svg') :
    cardImage.setAttribute('src', './src/night.svg')
}