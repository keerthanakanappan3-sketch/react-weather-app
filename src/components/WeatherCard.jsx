function WeatherCard({ weather }) {
  if (!weather) return null;
  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const condition = weather?.weather[0].main;
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className={`app weather-card ${condition?.toLowerCase()}`}>

      <h2>{weather.name}</h2>

      <p>{today}</p>

      <p>{time}</p>
      <img
        src={icon}
        alt={weather.weather[0].description}
      />
      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].description}</p>

      <p>Humidity : {weather.main.humidity}%</p>

      <p>Wind : {weather.wind.speed} m/s</p>

      <p>Feels Like : {weather.main.feels_like}°C</p>

    </div>
  );
}

export default WeatherCard;