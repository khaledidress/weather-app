const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * 🌤 Current Weather by city
 */
export const getWeather = async (city: string) => {
    const res = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
        throw new Error("Error fetching weather");
    }

    return res.json();
};

/**
 * 🌦 5-day Forecast by city
 */
export const getForecast = async (city: string) => {
    const res = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
        throw new Error("Error fetching forecast");
    }

    return res.json();
};

/**
 * 📍 Current weather by coordinates
 */
export const getWeatherByCoords = async (lat: number, lon: number) => {
    const res = await fetch(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
        throw new Error("Error fetching weather by coordinates");
    }

    return res.json();
};