function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">

      <h2>{weather.name}</h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].description}</p>

      <p>Humidity : {weather.main.humidity}%</p>

      <p>Wind : {weather.wind.speed} m/s</p>

      <p>Feels Like : {weather.main.feels_like}°C</p>

    </div>
  );
}

export default WeatherCard;