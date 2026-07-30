import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeather, getForecast } from "./services/weatherApi";
import "./styles/App.css";
import Loader from "./components/Loader";
import forecast from "./components/Forecast";
import ForecastCard from "./components/Forecast";
function App() {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState([]);
  console.log(import.meta.env.VITE_WEATHER_API_KEY);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getWeather(city);
      setWeather(weatherData);

      const forecastData = await getForecast(city);

      const dailyForecast = forecastData.list.filter((item, index) => index % 8 === 0);

      setForecast(dailyForecast);

    } catch (err) {
      setError("Unable to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
      />
      {error && <p className="error">{error}</p>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <WeatherCard weather={weather} />
          <ForecastCard forecast={forecast} />
        </>
      )}
    </div>
  );
}

export default App;