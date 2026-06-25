import { useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import { useWeatherStore } from "../store/weatherStore";

const WeatherDetailsPage = () => {
    const {
        currentWeather,
        forecast,
        loading,
        error,
        fetchWeatherByCity,
    } = useWeatherStore();

    useEffect(() => {
        const city = localStorage.getItem("lastCity");

        if (city && !currentWeather) {
            fetchWeatherByCity(city);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-10">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-8">
                    🌤 Weather Details
                </h1>

                {loading && <LoadingSpinner />}

                {error && <ErrorMessage message={error} />}

                {currentWeather && (
                    <div className="flex justify-center">
                        <WeatherCard weather={currentWeather} />
                    </div>
                )}

                {forecast && (
                    <Forecast forecast={forecast} />
                )}

            </div>
        </div>
    );
};

export default WeatherDetailsPage;