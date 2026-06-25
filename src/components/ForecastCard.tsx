import { getWeatherIcon } from "../utils/getWeatherIcon";
import type { ForecastItem } from "../types/weather";

type Props = {
    day: ForecastItem;
};

const ForecastCard = ({ day }: Props) => {
    return (
        <div className="bg-white/90 text-black rounded-2xl p-4 shadow-xl text-center hover:scale-105 transition">

            <p className="font-bold mb-2">
                {new Date(day.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                })}
            </p>

            <div className="text-4xl mb-2">
                {getWeatherIcon(day.weather[0].main)}
            </div>

            <p className="text-xl font-bold">
                {Math.round(day.main.temp)}°C
            </p>

            <p className="text-sm text-gray-600">
                {day.weather[0].main}
            </p>

        </div>
    );
};

export default ForecastCard;