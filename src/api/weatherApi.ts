import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const api = axios.create({
    baseURL: BASE_URL,
});

export const getWeather = async (city: string) => {
    const { data } = await api.get(
        `/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return data;
};

export const getForecast = async (city: string) => {
    const { data } = await api.get(
        `/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return data;
};

export const getWeatherByCoords = async (lat: number, lon: number) => {
    const { data } = await api.get(
        `/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return data;
};