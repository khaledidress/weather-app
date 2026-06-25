import { create } from "zustand";
import {
    getWeather,
    getForecast,
    getWeatherByCoords,
} from "../api/weatherApi";

import type {
    OpenWeatherResponse,
    ForecastResponse,
} from "../types/weather";

interface WeatherState {
    currentWeather: OpenWeatherResponse | null;
    forecast: ForecastResponse | null;
    loading: boolean;
    error: string | null;

    fetchWeatherByCity: (city: string) => Promise<void>;
    fetchWeatherByCoords: (lat: number, lon: number) => Promise<void>;
    clearError: () => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
    currentWeather: null,
    forecast: null,
    loading: false,
    error: null,

    // 🌤 by city
    fetchWeatherByCity: async (city) => {
        try {
            set({ loading: true, error: null });

            const weatherData = await getWeather(city);
            const forecastData = await getForecast(city);

            set({
                currentWeather: weatherData,
                forecast: forecastData,
                loading: false,
            });

            localStorage.setItem("lastCity", city);
        } catch (err) {
            set({
                error: "Failed to fetch weather data",
                loading: false,
            });
        }
    },

    // 📍 by coords
    fetchWeatherByCoords: async (lat, lon) => {
        try {
            set({ loading: true, error: null });

            const weatherData = await getWeatherByCoords(lat, lon);
            const forecastData = await getForecast(weatherData.name);

            set({
                currentWeather: weatherData,
                forecast: forecastData,
                loading: false,
            });

            localStorage.setItem("lastCity", weatherData.name);
        } catch (err) {
            set({
                error: "Failed to fetch location weather",
                loading: false,
            });
        }
    },

    clearError: () => set({ error: null }),
}));