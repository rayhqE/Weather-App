document.addEventListener("click", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorDisplay = document.getElementById("error-message");

  const API_KEY = a26bc9e04163f9ba702e8bf04f409729;

  getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) return;
  });
});
