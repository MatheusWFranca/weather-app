import getCityWeather from "./weather.js"

const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const city = await getCityWeather(inputValue)
  console.log(city)
  getCityName(city)
  getCityTemperature(city)
  isDayOrNight(city)
})


const getCityName = ({ name, sys }) => {
  const cityParagraph = document.querySelector('.my-3')
  cityParagraph.textContent = `${name}, ${sys.country}`
}

const getCityTemperature = ({ main, weather }) => {
  const tempParagraph = document.querySelector('.my-4 > span')
  const description = document.querySelector('.text-muted > div.my-3')
  const temperature = Math.floor(main.temp)

  description.textContent = `${weather[0].description}`
  tempParagraph.textContent = temperature
}

const isDayOrNight = ({ weather }) => {
  const dayTime = weather[0].icon
  const cardImage = document.querySelector('.card-img-top')


  return dayTime.includes('d') ?
    cardImage.setAttribute('src', './src/day.svg') :
    cardImage.setAttribute('src', './src/night.svg')
}