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

export default function cityWeatherDetails(city) {
  getCityName(city)
  getCityTemperature(city)
  addWeatherIcon(city)
  isDayOrNight(city)
}