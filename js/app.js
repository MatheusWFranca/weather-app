import getCityWeather from "./weather.js"
import cityWeatherDetails from "./formValues.js"

const form = document.querySelector('[data-js="change-location"]')
const card = document.querySelector('.card')

form.addEventListener('submit', updateForm)

async function updateForm(event) {
  event.preventDefault()

  const inputValue = event.target.city.value
  const city = await getCityWeather(inputValue)

  cityWeatherDetails(city)
  card.style.display = 'block'
  form.reset()
}


