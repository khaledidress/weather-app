import {
    Sun,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudFog,
} from "lucide-react";

export function getWeatherIcon(type: string) {
    switch (type) {
        case "Clear":
            return <Sun className="text-yellow-400" />;

        case "Clouds":
            return <Cloud className="text-gray-400" />;

        case "Rain":
            return <CloudRain className="text-blue-400" />;

        case "Snow":
            return <CloudSnow className="text-blue-200" />;

        case "Mist":
        case "Fog":
            return <CloudFog className="text-gray-300" />;

        default:
            return <Sun />;
    }
}