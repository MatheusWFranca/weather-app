import getCityWeather from "./weather.js"

const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const city = await getCityWeather(inputValue)
  console.log(city)
  getCityName(city)
  getCityTemperature(city)
})


const getCityName = ({ name, sys }) => {
  const cityParagraph = document.querySelector('.my-3')
  cityParagraph.textContent = `${name}, ${sys.country}`
}

const getCityTemperature = ({ main, weather }) => {
  const tempParagraph = document.querySelector('.my-4 > span')
  const description = document.querySelector('.text-muted > div.my-3')
  const temperature = Math.floor(main.temp)
  const weatherDescription = `${weather[0].description}`

  description.textContent = weatherDescription
  tempParagraph.textContent = temperature
}