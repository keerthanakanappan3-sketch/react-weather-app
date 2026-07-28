import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./services/weatherApi";
import "./styles/App.css";
function App() {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(import.meta.env.VITE_WEATHER_API_KEY);

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError("Unable to fetch weather. Please check the city name or try again later.");
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
      {loading && <p>Loading...</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;