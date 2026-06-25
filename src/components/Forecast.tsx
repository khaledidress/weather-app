import ForecastCard from "./ForecastCard";
import type {
    ForecastResponse,
    ForecastItem,
} from "../types/weather";

type Props = {
    forecast: ForecastResponse;
};

function Forecast({ forecast }: Props) {
    if (!forecast?.list) return null;

    const dailyForecast = forecast.list.filter(
        (_item: ForecastItem, index: number) => index % 8 === 0
    );

    return (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">

            {dailyForecast.slice(0, 5).map(
                (day: ForecastItem, index: number) => (
                    <ForecastCard
                        key={index}
                        day={day}
                    />
                )
            )}

        </div>
    );
}

export default Forecast;