import { useState } from "react";
import { getWeather, getForecast, getWeatherByCoords } from "../api/weatherApi";

export const useWeather = () => {
    const [weather, setWeather] = useState<any>(null);
    const [forecast, setForecast] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // 🌤 Fetch by city
    const fetchWeather = async (city: string) => {
        try {
            setLoading(true);
            setError("");

            const weatherData = await getWeather(city);
            const forecastData = await getForecast(city);

            setWeather(weatherData);
            setForecast(forecastData);

            localStorage.setItem("lastCity", city);
        } catch {
            setError("Failed to fetch weather");
        } finally {
            setLoading(false);
        }
    };

    // 📍 Fetch by coordinates (GPS)
    const fetchWeatherByCoords = async (lat: number, lon: number) => {
        try {
            setLoading(true);
            setError("");

            const weatherData = await getWeatherByCoords(lat, lon);
            const forecastData = await getForecast(weatherData.name);

            setWeather(weatherData);
            setForecast(forecastData);

            localStorage.setItem("lastCity", weatherData.name);
        } catch {
            setError("Failed to fetch weather");
        } finally {
            setLoading(false);
        }
    };

    return {
        weather,
        forecast,
        loading,
        error,
        fetchWeather,
        fetchWeatherByCoords, // ✅ مهم جدًا
    };
};