function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (city === "") {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://wttr.in/${city}?format=j1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const current = data.current_condition[0];
      const weatherHTML = `
        <h2>${city.toUpperCase()}</h2>
        <p><strong>Temperature:</strong> ${current.temp_C}°C</p>
        <p><strong>Feels Like:</strong> ${current.FeelsLikeC}°C</p>
        <p><strong>Humidity:</strong> ${current.humidity}%</p>
        <p><strong>Condition:</strong> ${current.weatherDesc[0].value}</p>
      `;
      resultDiv.innerHTML = weatherHTML;
    })
    .catch(error => {
      console.error("Error fetching weather:", error);
      resultDiv.innerHTML = "<p>Could not fetch weather. Try again.</p>";
    });
}
