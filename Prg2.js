const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const location = "Vellapakkam, 607109"; // Replace with your location

async function getWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Display the weather data
    document.getElementById("location").textContent = data.name;
    document.getElementById("temperature").textContent = data.main.temp + " °C";
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("weather-icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();
