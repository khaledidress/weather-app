import { getWeatherIcon } from "../utils/getWeatherIcon";
import type { OpenWeatherResponse } from "../types/weather";

type Props = {
    weather: OpenWeatherResponse;
};

function WeatherCard({ weather }: Props) {
    return (
        <div className="mt-8 w-80 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white p-6 shadow-2xl hover:scale-105 transition-all duration-300">

            <h2 className="text-2xl font-bold text-center mb-4 opacity-90">
                {weather.name}
            </h2>

            <div className="flex flex-col items-center gap-2 mb-4">
                <div className="text-6xl">
                    {getWeatherIcon(weather.weather[0].main)}
                </div>

                <div className="text-4xl font-bold">
                    {Math.round(weather.main.temp)}°C
                </div>

                <p className="text-sm text-white/80 capitalize">
                    {weather.weather[0].description}
                </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs text-white/80 mt-6">

                <div className="bg-white/10 rounded-xl p-2 text-center">
                    🌡 <br />
                    {Math.round(weather.main.feels_like)}°
                </div>

                <div className="bg-white/10 rounded-xl p-2 text-center">
                    💧 <br />
                    {weather.main.humidity}%
                </div>

                <div className="bg-white/10 rounded-xl p-2 text-center">
                    💨 <br />
                    {weather.wind.speed}
                </div>

            </div>
        </div>
    );
}

export default WeatherCard;