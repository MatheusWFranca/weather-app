import getCityWeather from "./weather.js"

const form = document.querySelector('[data-js="change-location"]')
const card = document.querySelector('.card')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const city = await getCityWeather(inputValue)

  getCityName(city)
  getCityTemperature(city)
  isDayOrNight(city)
  card.style.display = 'block'
  form.reset()
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