"use client";

import { useState } from "react";
import axios from "axios";
import SearchCity from "./components/searchcity";
import WeatherInformation from "./components/weatherinformation";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import ForecastFiveDays from "./components/forecastfivedays";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");
  const [forecastFiveDays, setForecastFiveDays] = useState<any>(null);

  const handleSearch = async () => {
    if (!city) return;

    const apiKey =  process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
    const forecastFiveDaysUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
      
      const weatherRes = await axios.get(url);
      setWeather(weatherRes.data);

      const forecastRes = await axios.get(forecastFiveDaysUrl);
      const dailyForecast = forecastRes.data.list.filter((item: any) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecastFiveDays(dailyForecast);

      setError("");
    } catch (err) {
      setWeather(null);
      setForecastFiveDays([]);
      setError("Cidade não encontrada. Tente novamente.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
         px: { xs: 2, sm: 0 },
      }}
    >
      <AppBar position="static" sx={{ background: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            🌤️ Previsão do Tempo
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 1 }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, textAlign: "center" }}>
          <SearchCity
            city={city}
            onCityChange={setCity}
            onSearch={handleSearch}
          />
          {error && (
            <Typography variant="body1" color="error" mt={2}>
              {error}
            </Typography>
          )}
          {weather && (
            <Box mt={4}>
              <WeatherInformation weather={weather} />
            </Box>
          )}

          {forecastFiveDays && forecastFiveDays.length > 0 && (
            <Box>
              <ForecastFiveDays forecastFiveDays={forecastFiveDays} />
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
