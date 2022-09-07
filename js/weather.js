const getCity = (cityName) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`
}

const getCityWeather = async (city) => {
  try {
    const cityName = getCity(city)
    const response = await fetch(cityName)

    if (!response.ok) {
      throw new Error('Não foi possivel obter os dados')
    }

    const cityData = await response.json()

    return cityData
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

export default getCityWeather
