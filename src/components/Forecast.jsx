function ForecastCard({ forecast }) {
  if (!forecast.length) return null;

  return (
    <div className="forecast-container">
      {forecast.map((day) => (
        <div key={day.dt} className="forecast-card">

          <h3>
            {new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </h3>

          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt=""
          />

          <p>{Math.round(day.main.temp)}°C</p>

          <small>{day.weather[0].main}</small>

        </div>
      ))}
    </div>
  );
}

export default ForecastCard;